from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import get_settings
from .routers import products, inquiries, brochures

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    description="Backend API for S P V Plastchem (Pvt) Ltd corporate website",
    version=settings.app_version,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(products.router, prefix="/api")
app.include_router(inquiries.router, prefix="/api")
app.include_router(brochures.router, prefix="/api")


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "app": settings.app_name, "version": settings.app_version}
