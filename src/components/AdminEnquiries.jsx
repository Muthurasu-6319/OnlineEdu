import React, { useState, useEffect } from 'react';
import { Mail, Phone, Trash2, Calendar } from 'lucide-react';
import BASE_URL from '../api.js';

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('enquiry'); // 'enquiry' or 'contact'

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/enquiries`);
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`${BASE_URL}/api/enquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries(enquiries.filter(e => e.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete enquiry:', err);
    }
  };

  const filteredEnquiries = enquiries.filter(e => e.type === activeTab);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading enquiries...</div>;
  }

  return (
    <div className="p-6 md:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Enquiries & Contacts</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('enquiry')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'enquiry'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Course Enquiries
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'contact'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Contact Requests
          </button>
        </div>

        {/* List */}
        {filteredEnquiries.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-lg">No {activeTab}s found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredEnquiries.map(enq => (
              <div key={enq.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{enq.name}</h3>
                    <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {enq.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-4 text-sm text-slate-600">
                    {enq.email && (
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-slate-400" />
                        <a href={`mailto:${enq.email}`} className="hover:text-blue-600">{enq.email}</a>
                      </div>
                    )}
                    {enq.phone && (
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-slate-400" />
                        <a href={`tel:${enq.phone}`} className="hover:text-blue-600">{enq.phone}</a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Calendar size={16} className="text-slate-400" />
                      <span>
                        {new Date(enq.created_at).toLocaleString('en-IN', {
                          timeZone: 'Asia/Kolkata',
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                          hour12: true
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 text-sm border border-slate-100">
                    {enq.type === 'enquiry' ? (
                      <>
                        <p className="mb-2"><strong className="text-slate-700">Course Interest:</strong> {enq.course || 'Not specified'}</p>
                        {enq.message && <p><strong className="text-slate-700">Message:</strong> {enq.message}</p>}
                      </>
                    ) : (
                      <>
                        <p className="mb-2"><strong className="text-slate-700">Location:</strong> {enq.location || 'Not specified'}</p>
                        <p><strong className="text-slate-700">Qualification:</strong> {enq.qualification || 'Not specified'}</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                  <button
                    onClick={() => handleDelete(enq.id)}
                    className="p-2.5 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <Trash2 size={18} />
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
