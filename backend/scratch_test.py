import os
import sys
from dotenv import load_dotenv

# Add parent directory to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Load local .env
load_dotenv()

try:
    from app.database import get_supabase_client
    print("Database module imported successfully!")
    db = get_supabase_client()
    print("Supabase client initialized successfully!")
    
    inquiry_data = {
        "name": "Test Script Public Victor",
        "email": "frankvictorcls@gmail.com",
        "message": "Hello from local public test script"
    }
    
    print(f"Attempting to insert inquiry via PUBLIC client: {inquiry_data}")
    result = db.table("inquiries").insert(inquiry_data).execute()
    print("Execution complete!")
    print(f"Result data: {result.data}")
except Exception as e:
    import traceback
    print("An error occurred:")
    traceback.print_exc()
