import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotMessage, setForgotMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'admin@vnet.com' && password === 'vnet@admin123') {
        onLoginSuccess();
      } else {
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setForgotMessage('');
    setIsLoading(true);

    try {
      await fetch('http://localhost:5000/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setForgotMessage('If this email is registered, a password recovery email has been sent.');
    } catch (err) {
      setError('Failed to send recovery email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1c2d76] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4 relative z-10" />
          <h2 className="text-2xl font-bold text-white relative z-10 font-outfit tracking-tight">Admin Portal</h2>
          <p className="text-blue-100 text-sm mt-2 relative z-10">Secure access for VNET management</p>
        </div>

        {/* Form */}
        {!isForgotPassword ? (
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 font-medium text-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@vnet.com" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                <button 
                  type="button" 
                  onClick={() => { setIsForgotPassword(true); setError(''); setForgotMessage(''); }}
                  className="text-xs font-bold text-[#2ca785] hover:text-[#238a6d] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all duration-200 ${
                isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#2ca785] hover:bg-[#238a6d] shadow-lg hover:shadow-emerald-100'
              }`}
            >
              {isLoading ? 'Authenticating...' : 'Secure Login'}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>

          </form>
        ) : (
          <form onSubmit={handleForgotPassword} className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">Reset Password</h3>
            
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 font-medium text-center">
                {error}
              </div>
            )}
            
            {forgotMessage && (
              <div className="bg-emerald-50 text-emerald-700 text-sm p-3 rounded-lg border border-emerald-100 font-medium text-center">
                {forgotMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@vnet.com" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">We will send a password recovery email to this address.</p>
            </div>

            <div className="space-y-3">
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all duration-200 ${
                  isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1c2d76] hover:bg-[#15235c] shadow-lg hover:shadow-indigo-100'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Recovery Email'}
              </button>
              
              <button 
                type="button" 
                onClick={() => { setIsForgotPassword(false); setError(''); setForgotMessage(''); }}
                className="w-full py-3.5 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
