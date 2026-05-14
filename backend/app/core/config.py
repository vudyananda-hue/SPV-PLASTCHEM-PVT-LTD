from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    supabase_url: str = "https://your-project.supabase.co"
    supabase_key: str = "your-anon-key"
    supabase_service_key: str = "your-service-role-key"
    cors_origins: str = "http://localhost:5173"
    app_name: str = "S P V Plastchem API"
    app_version: str = "1.0.0"

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
