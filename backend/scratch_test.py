import os
import sys
from dotenv import load_dotenv

# Add parent directory to sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Load local .env
load_dotenv()

from app.core.config import get_settings
from app.database import get_supabase_admin, get_supabase_client

settings = get_settings()
print("SUPABASE_URL:", settings.supabase_url)
print("SUPABASE_KEY exists:", bool(settings.supabase_key))
print("SUPABASE_SERVICE_KEY exists:", bool(settings.supabase_service_key))

try:
    print("Initializing admin client...")
    db = get_supabase_admin()
    print("Admin client initialized successfully.")
    
    test_inquiry = {
        "name": "Local Test Victor",
        "email": "frankvictorcls@gmail.com",
        "message": "Testing from local scratch script"
    }
    
    print("Attempting to insert test inquiry into public.inquiries...")
    result = db.table("inquiries").insert(test_inquiry).execute()
    print("Insert result:", result)
except Exception as e:
    print("Error encountered:")
    import traceback
    traceback.print_exc()
