import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FlaskConical } from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, loading, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && !loading) navigate('/admin')
  }, [user, loading, navigate])

  return (
    <>
      <SEOHead title="Admin Login" path="/login" />

      <section className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #111D38 50%, #0D162E 100%)' }}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-accent-500 flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Admin Portal</h1>
            <p className="text-neutral-400 text-sm">Sign in to access the management dashboard</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <button
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white text-neutral-800 font-semibold py-3 px-6 rounded-xl hover:bg-neutral-50 transition-all shadow-lg hover:shadow-xl"
              id="google-sign-in"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </button>

            <div className="mt-6 text-center">
              <p className="text-xs text-neutral-500">
                Access restricted to authorized administrators only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
