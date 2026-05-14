from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from typing import List
from ..schemas import BrochureResponse
from ..database import get_supabase_admin
from ..core.security import require_admin

router = APIRouter(prefix="/brochures", tags=["Brochures"])


@router.get("", response_model=List[BrochureResponse])
async def list_brochures():
    """List all brochures (public)."""
    db = get_supabase_admin()
    result = db.table("brochures").select("*").order("uploaded_at", desc=True).execute()
    return result.data


@router.post("/upload", response_model=BrochureResponse, status_code=201)
async def upload_brochure(
    title: str = Form(...),
    product_category: str = Form(None),
    file: UploadFile = File(...),
    _admin=Depends(require_admin),
):
    """Upload a brochure PDF (admin only)."""
    db = get_supabase_admin()

    # Upload file to Supabase Storage
    file_content = await file.read()
    file_path = f"brochures/{file.filename}"

    db.storage.from_("documents").upload(file_path, file_content)

    # Get public URL
    file_url = db.storage.from_("documents").get_public_url(file_path)

    # Save record to database
    brochure_data = {
        "title": title,
        "file_url": file_url,
        "file_size": len(file_content),
        "product_category": product_category,
    }
    result = db.table("brochures").insert(brochure_data).execute()
    return result.data[0]


@router.delete("/{brochure_id}", status_code=204)
async def delete_brochure(brochure_id: str, _admin=Depends(require_admin)):
    """Delete a brochure (admin only)."""
    db = get_supabase_admin()
    db.table("brochures").delete().eq("id", brochure_id).execute()
