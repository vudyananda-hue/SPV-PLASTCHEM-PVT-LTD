const API_BASE = import.meta.env.VITE_API_URL || '/api'

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Network error' }))
    throw new Error(error.detail || `HTTP ${response.status}`)
  }

  return response.json()
}

export const api = {
  /* Products */
  getProducts: (category) =>
    request(`/products${category ? `?category=${category}` : ''}`),
  getProduct: (id) => request(`/products/${id}`),
  createProduct: (data, token) =>
    request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateProduct: (id, data, token) =>
    request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteProduct: (id, token) =>
    request(`/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),

  /* Inquiries */
  submitInquiry: (data) =>
    request('/inquiries', { method: 'POST', body: JSON.stringify(data) }),
  getInquiries: (token) =>
    request('/inquiries', {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateInquiryStatus: (id, status, token) =>
    request(`/inquiries/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { Authorization: `Bearer ${token}` },
    }),

  /* Brochures */
  getBrochures: () => request('/brochures'),
  uploadBrochure: (formData, token) =>
    fetch(`${API_BASE}/brochures/upload`, {
      method: 'POST',
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => {
      if (!r.ok) throw new Error('Upload failed')
      return r.json()
    }),
  deleteBrochure: (id, token) =>
    request(`/brochures/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
}
