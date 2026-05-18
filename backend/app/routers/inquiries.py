from fastapi import APIRouter, Depends, HTTPException
from typing import List
from ..schemas import InquiryCreate, InquiryStatusUpdate, InquiryResponse
from ..database import get_supabase_client, get_supabase_admin
from ..core.security import require_admin

router = APIRouter(prefix="/inquiries", tags=["Inquiries"])


@router.post("", response_model=InquiryResponse, status_code=201)
async def submit_inquiry(inquiry: InquiryCreate):
    """Submit a new inquiry (public)."""
    db = get_supabase_admin()
    result = db.table("inquiries").insert(inquiry.model_dump()).execute()
    return result.data[0]



@router.get("", response_model=List[InquiryResponse])
async def list_inquiries(_admin=Depends(require_admin)):
    """List all inquiries (admin only)."""
    db = get_supabase_admin()
    result = db.table("inquiries").select("*").order("created_at", desc=True).execute()
    return result.data


@router.patch("/{inquiry_id}/status", response_model=InquiryResponse)
async def update_inquiry_status(
    inquiry_id: str, update: InquiryStatusUpdate, _admin=Depends(require_admin)
):
    """Update inquiry status (admin only)."""
    db = get_supabase_admin()
    result = db.table("inquiries").update({"status": update.status}).eq("id", inquiry_id).execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return result.data[0]
