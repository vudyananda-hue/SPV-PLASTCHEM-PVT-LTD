import os
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
        extra = "ignore"

    def __init__(self, **values):
        super().__init__(**values)
        # Fallback to VITE_ prefixed environment variables if standard ones aren't set or are defaults
        vite_url = os.getenv("VITE_SUPABASE_URL")
        if vite_url and (self.supabase_url == "https://your-project.supabase.co" or not self.supabase_url):
            self.supabase_url = vite_url

        vite_key = os.getenv("VITE_SUPABASE_ANON_KEY")
        if vite_key and (self.supabase_key == "your-anon-key" or not self.supabase_key):
            self.supabase_key = vite_key

        vite_service_key = os.getenv("VITE_SUPABASE_SERVICE_KEY") or os.getenv("SUPABASE_SERVICE_KEY")
        if vite_service_key and (self.supabase_service_key == "your-service-role-key" or not self.supabase_service_key):
            self.supabase_service_key = vite_service_key


@lru_cache()
def get_settings() -> Settings:
    return Settings()

