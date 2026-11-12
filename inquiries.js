const KEY = 'lionking_project_inquiries_v1'
export function getInquiries() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}
export function saveInquiry(data) {
  const record = { ...data, id: crypto.randomUUID?.() || String(Date.now()), createdAt: new Date().toISOString(), status: 'New' }
  const all = getInquiries()
  localStorage.setItem(KEY, JSON.stringify([record, ...all]))
  return record
}
