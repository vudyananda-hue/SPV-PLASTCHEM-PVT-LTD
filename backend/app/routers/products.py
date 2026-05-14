from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from ..schemas import ProductCreate, ProductUpdate, ProductResponse
from ..database import get_supabase_client, get_supabase_admin
from ..core.security import require_admin

router = APIRouter(prefix="/products", tags=["Products"])


@router.get("", response_model=List[ProductResponse])
async def list_products(category: str = None):
    """List all active products, optionally filtered by category."""
    db = get_supabase_client()
    query = db.table("products").select("*").eq("is_active", True).order("sort_order")
    if category:
        query = query.eq("category", category)
    result = query.execute()
    return result.data


@router.get("/{product_id}", response_model=ProductResponse)
async def get_product(product_id: str):
    """Get a single product by ID."""
    db = get_supabase_client()
    result = db.table("products").select("*").eq("id", product_id).single().execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Product not found")
    return result.data


@router.post("", response_model=ProductResponse, status_code=status.HTTP_201_CREATED)
async def create_product(product: ProductCreate, _admin=Depends(require_admin)):
    """Create a new product (admin only)."""
    db = get_supabase_admin()
    result = db.table("products").insert(product.model_dump()).execute()
    return result.data[0]


@router.put("/{product_id}", response_model=ProductResponse)
async def update_product(product_id: str, product: ProductUpdate, _admin=Depends(require_admin)):
    """Update an existing product (admin only)."""
    db = get_supabase_admin()
    update_data = product.model_dump(exclude_none=True)
    result = db.table("products").update(update_data).eq("id", product_id).execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Product not found")
    return result.data[0]


@router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(product_id: str, _admin=Depends(require_admin)):
    """Delete a product (admin only)."""
    db = get_supabase_admin()
    db.table("products").delete().eq("id", product_id).execute()
