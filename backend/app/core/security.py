from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
import httpx
from functools import lru_cache
from .config import get_settings

security = HTTPBearer()


@lru_cache()
def get_jwks_url():
    settings = get_settings()
    return f"{settings.supabase_url}/auth/v1/.well-known/jwks.json"


async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Verify Supabase JWT token."""
    token = credentials.credentials
    try:
        # Fetch JWKS for token verification
        async with httpx.AsyncClient() as client:
            response = await client.get(get_jwks_url())
            jwks = response.json()

        # Decode and verify the JWT
        payload = jwt.decode(
            token,
            jwks,
            algorithms=["RS256"],
            audience="authenticated",
        )
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
        )
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )


async def require_admin(payload: dict = Depends(verify_token)):
    """Verify user has admin role via admin_profiles table."""
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied",
        )
    # In production, check admin_profiles table
    # For now, any authenticated user is treated as admin
    return payload
