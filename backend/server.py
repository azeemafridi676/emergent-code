from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Project Models
class ProjectMedia(BaseModel):
    url: str
    title: str
    type: str  # "image" or "video"

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str  # Short description for projects list
    long_description: dict  # {"summary": str, "modules": str, "tech_stack": str}
    technologies: List[str]
    features: List[str]
    status: str
    impact: str
    thumbnail_image: str  # URL for main projects view
    videos: List[ProjectMedia]  # Multiple videos, first one auto-plays
    images: List[ProjectMedia]  # 4-5 images for gallery
    github_url: str = ""
    live_url: str = ""
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    long_description: dict
    technologies: List[str]
    features: List[str]
    status: str
    impact: str
    thumbnail_image: str
    videos: List[ProjectMedia]
    images: List[ProjectMedia]
    github_url: str = ""
    live_url: str = ""

class ProjectUpdate(BaseModel):
    title: str = None
    description: str = None
    long_description: dict = None
    technologies: List[str] = None
    features: List[str] = None
    status: str = None
    impact: str = None
    thumbnail_image: str = None
    videos: List[ProjectMedia] = None
    images: List[ProjectMedia] = None
    github_url: str = None
    live_url: str = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Project Routes
@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects"""
    projects = await db.projects.find().to_list(1000)
    return [Project(**project) for project in projects]

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a specific project by ID"""
    project = await db.projects.find_one({"id": project_id})
    if not project:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@api_router.post("/projects", response_model=Project)
async def create_project(input: ProjectCreate):
    """Create a new project"""
    project_dict = input.dict()
    project_obj = Project(**project_dict)
    _ = await db.projects.insert_one(project_obj.dict())
    return project_obj

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, input: ProjectUpdate):
    """Update a project"""
    from fastapi import HTTPException
    
    # Find existing project
    existing_project = await db.projects.find_one({"id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    # Update only provided fields
    update_data = {k: v for k, v in input.dict().items() if v is not None}
    
    if update_data:
        await db.projects.update_one({"id": project_id}, {"$set": update_data})
    
    # Return updated project
    updated_project = await db.projects.find_one({"id": project_id})
    return Project(**updated_project)

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    """Delete a project"""
    from fastapi import HTTPException
    
    result = await db.projects.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return {"message": "Project deleted successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
