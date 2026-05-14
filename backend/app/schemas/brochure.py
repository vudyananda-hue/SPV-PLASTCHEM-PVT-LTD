from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class BrochureResponse(BaseModel):
    id: str
    title: str
    file_url: str
    file_size: Optional[int] = None
    product_category: Optional[str] = None
    uploaded_at: Optional[datetime] = None
