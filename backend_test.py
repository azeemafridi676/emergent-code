#!/usr/bin/env python3
"""
Backend API Testing for Project CRUD Operations
Tests the newly implemented project APIs with comprehensive validation
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://95419764-7e75-48d9-810e-3a4fe15d4dcc.preview.emergentagent.com/api"

def test_api_connection():
    """Test basic API connection"""
    print("🔍 Testing API Connection...")
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        if response.status_code == 200:
            print("✅ API connection successful")
            return True
        else:
            print(f"❌ API connection failed with status: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API connection error: {str(e)}")
        return False

def create_sample_project_data():
    """Create realistic project data for testing"""
    return {
        "title": "AI-Powered Portfolio Website",
        "description": "A modern portfolio website built with React and FastAPI, featuring AI-generated content and dynamic project showcases.",
        "long_description": {
            "summary": "This portfolio website demonstrates modern web development practices with AI integration. Built using React for the frontend and FastAPI for the backend, it showcases projects with rich media content including videos and image galleries.",
            "modules": "Frontend: React components with responsive design, routing, and state management. Backend: FastAPI with MongoDB integration, CRUD operations, and RESTful APIs. AI Integration: Content generation and dynamic project descriptions.",
            "tech_stack": "Frontend: React 18, Tailwind CSS, React Router. Backend: FastAPI, MongoDB, Motor (async driver). Deployment: Docker containers, Kubernetes orchestration. AI: OpenAI GPT integration for content generation."
        },
        "technologies": ["React", "FastAPI", "MongoDB", "Tailwind CSS", "Docker", "Kubernetes"],
        "features": [
            "Responsive design with mobile-first approach",
            "Dynamic project galleries with video support",
            "AI-generated project descriptions",
            "RESTful API with comprehensive CRUD operations",
            "Real-time data synchronization"
        ],
        "status": "Completed",
        "impact": "Demonstrates full-stack development capabilities with modern technologies and AI integration, serving as a comprehensive showcase for potential employers and clients.",
        "thumbnail_image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        "videos": [
            {
                "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "title": "Project Demo Video",
                "type": "video"
            },
            {
                "url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "title": "Technical Overview",
                "type": "video"
            }
        ],
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
                "title": "Homepage Design",
                "type": "image"
            },
            {
                "url": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
                "title": "Project Gallery View",
                "type": "image"
            },
            {
                "url": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
                "title": "Mobile Responsive Design",
                "type": "image"
            },
            {
                "url": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
                "title": "Code Architecture",
                "type": "image"
            }
        ],
        "github_url": "https://github.com/user/ai-portfolio",
        "live_url": "https://portfolio.example.com"
    }

def test_create_project():
    """Test POST /api/projects - Create new project"""
    print("\n🔍 Testing Project Creation (POST /api/projects)...")
    
    project_data = create_sample_project_data()
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/projects",
            json=project_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            project = response.json()
            print("✅ Project created successfully")
            print(f"   Project ID: {project.get('id')}")
            print(f"   Title: {project.get('title')}")
            
            # Validate response structure
            required_fields = ['id', 'title', 'description', 'long_description', 'technologies', 
                             'features', 'status', 'impact', 'thumbnail_image', 'videos', 'images']
            
            missing_fields = [field for field in required_fields if field not in project]
            if missing_fields:
                print(f"⚠️  Missing fields in response: {missing_fields}")
                return None
            
            # Validate long_description structure
            long_desc = project.get('long_description', {})
            if not all(key in long_desc for key in ['summary', 'modules', 'tech_stack']):
                print("⚠️  Invalid long_description structure")
                return None
                
            # Validate media arrays
            if not isinstance(project.get('videos'), list) or not isinstance(project.get('images'), list):
                print("⚠️  Videos or images not returned as arrays")
                return None
                
            return project['id']
        else:
            print(f"❌ Project creation failed with status: {response.status_code}")
            print(f"   Response: {response.text}")
            return None
            
    except Exception as e:
        print(f"❌ Project creation error: {str(e)}")
        return None

def test_get_all_projects():
    """Test GET /api/projects - Fetch all projects"""
    print("\n🔍 Testing Get All Projects (GET /api/projects)...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/projects", timeout=10)
        
        if response.status_code == 200:
            projects = response.json()
            print(f"✅ Retrieved {len(projects)} projects")
            
            if projects:
                # Validate first project structure
                project = projects[0]
                required_fields = ['id', 'title', 'description', 'technologies', 'videos', 'images']
                missing_fields = [field for field in required_fields if field not in project]
                
                if missing_fields:
                    print(f"⚠️  Missing fields in project: {missing_fields}")
                else:
                    print("✅ Project structure validation passed")
                    
            return True
        else:
            print(f"❌ Get projects failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Get projects error: {str(e)}")
        return False

def test_get_project_by_id(project_id):
    """Test GET /api/projects/{id} - Fetch specific project"""
    print(f"\n🔍 Testing Get Project by ID (GET /api/projects/{project_id})...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/projects/{project_id}", timeout=10)
        
        if response.status_code == 200:
            project = response.json()
            print("✅ Project retrieved successfully")
            print(f"   Title: {project.get('title')}")
            
            # Validate complete structure
            if project.get('id') == project_id:
                print("✅ Project ID matches request")
            else:
                print("⚠️  Project ID mismatch")
                
            return True
        else:
            print(f"❌ Get project failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Get project error: {str(e)}")
        return False

def test_update_project(project_id):
    """Test PUT /api/projects/{id} - Update project"""
    print(f"\n🔍 Testing Project Update (PUT /api/projects/{project_id})...")
    
    update_data = {
        "title": "Updated AI-Powered Portfolio Website",
        "status": "Enhanced",
        "technologies": ["React", "FastAPI", "MongoDB", "Tailwind CSS", "Docker", "Kubernetes", "Redis"]
    }
    
    try:
        response = requests.put(
            f"{BACKEND_URL}/projects/{project_id}",
            json=update_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            project = response.json()
            print("✅ Project updated successfully")
            
            # Validate updates
            if project.get('title') == update_data['title']:
                print("✅ Title updated correctly")
            else:
                print("⚠️  Title update failed")
                
            if project.get('status') == update_data['status']:
                print("✅ Status updated correctly")
            else:
                print("⚠️  Status update failed")
                
            return True
        else:
            print(f"❌ Project update failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Project update error: {str(e)}")
        return False

def test_invalid_project_id():
    """Test error handling for invalid project ID"""
    print("\n🔍 Testing Invalid Project ID Error Handling...")
    
    invalid_id = "invalid-project-id-12345"
    
    try:
        response = requests.get(f"{BACKEND_URL}/projects/{invalid_id}", timeout=10)
        
        if response.status_code == 404:
            print("✅ Proper 404 error for invalid project ID")
            return True
        else:
            print(f"⚠️  Expected 404, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Invalid ID test error: {str(e)}")
        return False

def test_delete_project(project_id):
    """Test DELETE /api/projects/{id} - Delete project"""
    print(f"\n🔍 Testing Project Deletion (DELETE /api/projects/{project_id})...")
    
    try:
        response = requests.delete(f"{BACKEND_URL}/projects/{project_id}", timeout=10)
        
        if response.status_code == 200:
            result = response.json()
            print("✅ Project deleted successfully")
            print(f"   Message: {result.get('message')}")
            
            # Verify deletion by trying to fetch the project
            verify_response = requests.get(f"{BACKEND_URL}/projects/{project_id}", timeout=10)
            if verify_response.status_code == 404:
                print("✅ Project deletion verified")
                return True
            else:
                print("⚠️  Project still exists after deletion")
                return False
                
        else:
            print(f"❌ Project deletion failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Project deletion error: {str(e)}")
        return False

def run_comprehensive_tests():
    """Run all backend API tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING - PROJECT CRUD OPERATIONS")
    print("=" * 60)
    
    test_results = {
        'api_connection': False,
        'create_project': False,
        'get_all_projects': False,
        'get_project_by_id': False,
        'update_project': False,
        'invalid_id_handling': False,
        'delete_project': False
    }
    
    # Test 1: API Connection
    test_results['api_connection'] = test_api_connection()
    if not test_results['api_connection']:
        print("\n❌ CRITICAL: API connection failed. Cannot proceed with tests.")
        return test_results
    
    # Test 2: Create Project
    project_id = test_create_project()
    test_results['create_project'] = project_id is not None
    
    if not project_id:
        print("\n❌ CRITICAL: Project creation failed. Cannot proceed with dependent tests.")
        return test_results
    
    # Test 3: Get All Projects
    test_results['get_all_projects'] = test_get_all_projects()
    
    # Test 4: Get Project by ID
    test_results['get_project_by_id'] = test_get_project_by_id(project_id)
    
    # Test 5: Update Project
    test_results['update_project'] = test_update_project(project_id)
    
    # Test 6: Invalid ID Error Handling
    test_results['invalid_id_handling'] = test_invalid_project_id()
    
    # Test 7: Delete Project
    test_results['delete_project'] = test_delete_project(project_id)
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed_tests = sum(test_results.values())
    total_tests = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 ALL TESTS PASSED - Backend APIs are working correctly!")
    else:
        print("⚠️  Some tests failed - Backend needs attention")
    
    return test_results

if __name__ == "__main__":
    results = run_comprehensive_tests()
    
    # Exit with appropriate code
    if all(results.values()):
        sys.exit(0)
    else:
        sys.exit(1)