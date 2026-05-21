import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Package, FileText, MessageSquare, LogOut, Plus, Trash2, Eye, Edit,
  Upload, FlaskConical, BarChart3, Bell, Settings, X, Search
} from 'lucide-react'
import SEOHead from '../components/common/SEOHead'
import { useAuth } from '../context/AuthContext'
import { productCategories } from '../data/content'

const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'brochures', label: 'Brochures', icon: FileText },
  { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
  { id: 'announcements', label: 'Announcements', icon: Bell },
]

/* Mock data for demo */
const mockInquiries = [
  { id: 1, name: 'John Smith', email: 'john@example.com', company: 'ABC Manufacturing', message: 'Interested in PU Additives for foam production.', status: 'new', date: '2026-05-12' },
  { id: 2, name: 'Sarah Lee', email: 'sarah@constructions.lk', company: 'LK Constructions', message: 'Need quote for construction chemicals.', status: 'in-progress', date: '2026-05-11' },
  { id: 3, name: 'Ranil P.', email: 'ranil@rubberco.com', company: 'Rubber Co Ltd', message: 'Inquiry about reclaim rubber products.', status: 'resolved', date: '2026-05-10' },
]

export default function AdminDashboard() {
  const { user, loading, signOut } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!loading && !user) navigate('/login')
  }, [user, loading, navigate])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-3 border-neutral-200 border-t-accent-500 rounded-full animate-spin" /></div>
  if (!user) return null

  const statusColors = { 'new': 'bg-blue-100 text-blue-700', 'in-progress': 'bg-yellow-100 text-yellow-700', 'resolved': 'bg-green-100 text-green-700' }

  return (
    <>
      <SEOHead title="Admin Dashboard" path="/admin" />

      <div className="min-h-screen bg-neutral-50 pt-20">
        <div className="flex">
          {/* Sidebar — Desktop */}
          <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-neutral-100 min-h-[calc(100vh-80px)] fixed top-20 left-0">
            <div className="p-5 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>Admin Panel</p>
                  <p className="text-xs text-neutral-400 truncate max-w-[140px]">{user.email}</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 p-3 space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === item.id ? 'bg-primary-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}>
                    <Icon className="w-4.5 h-4.5" /> {item.label}
                  </button>
                )
              })}
            </nav>
            <div className="p-3 border-t border-neutral-100">
              <button onClick={signOut} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-4.5 h-4.5" /> Sign Out
              </button>
            </div>
          </aside>

          {/* Mobile Sidebar Toggle */}
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary-900 text-white rounded-full shadow-xl flex items-center justify-center">
            <Settings className="w-6 h-6" />
          </button>

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
              <aside className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-xl lg:hidden">
                <div className="p-4 flex justify-between items-center border-b">
                  <span className="font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>Admin Menu</span>
                  <button onClick={() => setSidebarOpen(false)} className="p-1.5 rounded-lg hover:bg-neutral-100"><X className="w-5 h-5" /></button>
                </div>
                <nav className="p-3 space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === item.id ? 'bg-primary-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}>
                        <Icon className="w-4.5 h-4.5" /> {item.label}
                      </button>
                    )
                  })}
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-neutral-100">
                  <button onClick={signOut} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50"><LogOut className="w-4.5 h-4.5" /> Sign Out</button>
                </div>
              </aside>
            </>
          )}

          {/* Main Content */}
          <main className="flex-1 lg:ml-64 p-6 md:p-8">
            {/* Overview */}
            {activeTab === 'overview' && (
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Dashboard Overview</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  {[
                    { label: 'Total Products', value: '15', icon: Package, color: 'bg-blue-500' },
                    { label: 'Open Inquiries', value: '8', icon: MessageSquare, color: 'bg-yellow-500' },
                    { label: 'Documents', value: '12', icon: FileText, color: 'bg-green-500' },
                    { label: 'Announcements', value: '3', icon: Bell, color: 'bg-purple-500' },
                  ].map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <div key={i} className="bg-white rounded-xl p-5 border border-neutral-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                        <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="bg-white rounded-xl p-6 border border-neutral-100">
                  <h3 className="font-bold text-neutral-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Recent Inquiries</h3>
                  <div className="space-y-3">
                    {mockInquiries.map((inq) => (
                      <div key={inq.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{inq.name} — {inq.company}</p>
                          <p className="text-xs text-neutral-500 truncate max-w-md">{inq.message}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[inq.status]}`}>{inq.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products Manager */}
            {activeTab === 'products' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>Product Management</h1>
                  <button className="btn-primary text-sm !py-2"><Plus className="w-4 h-4" /> Add Product</button>
                </div>
                <div className="bg-white rounded-xl border border-neutral-100 overflow-hidden">
                  <div className="p-4 border-b border-neutral-100 flex gap-3">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input type="text" placeholder="Search products..." className="w-full pl-9 pr-4 py-2 rounded-lg border border-neutral-200 text-neutral-900 bg-white text-sm outline-none focus:border-accent-500" />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-neutral-50 text-left">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-neutral-600">Product</th>
                          <th className="px-4 py-3 font-semibold text-neutral-600">Category</th>
                          <th className="px-4 py-3 font-semibold text-neutral-600">Status</th>
                          <th className="px-4 py-3 font-semibold text-neutral-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {productCategories.flatMap((cat) =>
                          cat.products.map((p, j) => (
                            <tr key={`${cat.id}-${j}`} className="hover:bg-neutral-50">
                              <td className="px-4 py-3 font-medium text-neutral-800">{p.name}</td>
                              <td className="px-4 py-3 text-neutral-500">{cat.name}</td>
                              <td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Active</span></td>
                              <td className="px-4 py-3 flex gap-2">
                                <button className="p-1.5 rounded hover:bg-neutral-100"><Eye className="w-4 h-4 text-neutral-400" /></button>
                                <button className="p-1.5 rounded hover:bg-neutral-100"><Edit className="w-4 h-4 text-neutral-400" /></button>
                                <button className="p-1.5 rounded hover:bg-red-50"><Trash2 className="w-4 h-4 text-red-400" /></button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Brochures Manager */}
            {activeTab === 'brochures' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>Document Management</h1>
                  <button className="btn-primary text-sm !py-2"><Upload className="w-4 h-4" /> Upload</button>
                </div>
                <div className="bg-white rounded-xl border border-neutral-100 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-7 h-7 text-neutral-400" />
                  </div>
                  <h3 className="font-bold text-neutral-700 mb-2">No Brochures Uploaded</h3>
                  <p className="text-sm text-neutral-500 mb-4">Upload product brochures and datasheets for customers to download.</p>
                  <button className="btn-primary text-sm"><Upload className="w-4 h-4" /> Upload First Document</button>
                </div>
              </div>
            )}

            {/* Inquiries Manager */}
            {activeTab === 'inquiries' && (
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Inquiry Management</h1>
                <div className="space-y-4">
                  {mockInquiries.map((inq) => (
                    <div key={inq.id} className="bg-white rounded-xl p-5 border border-neutral-100">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-neutral-900">{inq.name}</h3>
                          <p className="text-sm text-neutral-500">{inq.email} • {inq.company}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[inq.status]}`}>{inq.status}</span>
                      </div>
                      <p className="text-sm text-neutral-600 mb-3">{inq.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-400">{inq.date}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-yellow-50 text-yellow-700 hover:bg-yellow-100">In Progress</button>
                          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100">Resolve</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Announcements */}
            {activeTab === 'announcements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>Announcements</h1>
                  <button className="btn-primary text-sm !py-2"><Plus className="w-4 h-4" /> New Post</button>
                </div>
                <div className="bg-white rounded-xl border border-neutral-100 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-7 h-7 text-neutral-400" />
                  </div>
                  <h3 className="font-bold text-neutral-700 mb-2">No Announcements</h3>
                  <p className="text-sm text-neutral-500 mb-4">Create and publish company updates and announcements.</p>
                  <button className="btn-primary text-sm"><Plus className="w-4 h-4" /> Create First Announcement</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
