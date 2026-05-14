from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    email: str = Field(..., max_length=255)
    company: Optional[str] = None
    phone: Optional[str] = None
    product_category: Optional[str] = None
    message: str = Field(..., min_length=1)


class InquiryStatusUpdate(BaseModel):
    status: str = Field(..., pattern="^(new|in-progress|resolved)$")


class InquiryResponse(BaseModel):
    id: str
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    product_category: Optional[str] = None
    message: str
    status: str
    created_at: Optional[datetime] = None
