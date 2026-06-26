import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Navigate to dashboard after login/signup
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen w-full flex overflow-hidden bg-background font-body-md text-on-background">
      {/* Left Side: Visual/Brand Messaging */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-primary-container p-xl flex-col justify-between overflow-hidden">
        {/* Background Animated Asset */}
        <div className="absolute inset-0 z-0"></div>
        {/* Header Identity */}
        <div className="relative z-10 flex items-center gap-sm">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-container shadow-lg">
            <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
          </div>
          <h1 className="font-title-lg text-title-lg font-black text-white tracking-tight">ProjectFlow</h1>
        </div>
        {/* Hero Message */}
        <div className="relative z-10 max-w-lg mb-2xl">
          <h2 className="font-display text-display text-white mb-md leading-none">The operating system for modern teams.</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed opacity-90 leading-relaxed">
            Unite your product, design, and engineering workflows in a single, high-fidelity environment. Designed for speed, built for scale.
          </p>
          {/* Bento-style feature highlights */}
          <div className="grid grid-cols-2 gap-md mt-xl">
            <div className="glass-card p-md rounded-xl border border-white/20 animate-float" style={{ animationDelay: '0.2s' }}>
              <span className="material-symbols-outlined text-white mb-sm">bolt</span>
              <p className="font-label-md text-label-md text-white font-bold uppercase">Real-time sync</p>
            </div>
            <div className="glass-card p-md rounded-xl border border-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="material-symbols-outlined text-white mb-sm">layers</span>
              <p className="font-label-md text-label-md text-white font-bold uppercase">Advanced Hierarchy</p>
            </div>
          </div>
        </div>
        {/* Footer Badge */}
        <div className="relative z-10 flex items-center gap-md">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCs22DhlY3NqDVE1RM7OfsxmNZRXy2-TnoleavBCrElwACSSl4fEwdIQZB8Rgm3cf5pOjyr_gNEdAHNhlOdLExkDPiQxNGeAVChPaOhb10sxKyp3s8VfUTQGrhZXYkOFWm1Kt11r4TDRqV0uhqwc7GNHI13Gl4uahEN52pkSqoWw9GkEWKpQq4cjxXoDyR2raNQ8myf3QOoN0JgzIzefWRCtNQkqJ_MeFR5IJnAVZCoZRkneYTZqRHk2iFojpVNK5rnzxcQQCM7Tc"/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZlD6U3QBFneZA1l8AfRxnBeEBjtNWpyqA7A_-PmhUMgppGvzxWPM58hBj3HC4-yxWe4scJ6_JyPtUDF3fC524xlvEdA58aX_rrHpAFIjHoy8bHpzrhAjChoDbm_s_Ybw_3mPVaDE__qoT75vKFMmZQHNWWJ-yI727EYBpfDb6P7Fhg_UZ-kcOMtHA7HX49yLy8OTxe2ASkylAVOFCuFfKUYTRn0C_qSyAeBiJhBoxTNMFRKJy2U5S_7BhPEti4JnAN7WkxC-MJE"/>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaHKBUBlqRaF6hUH9EPezJWmQEU6n3VqTJyKyFRgzsoBm2hRmp1vKMjKk5sfMhCH4itnrczI_QHV4UAjVrLCh9nLTnLFpYwKovy9duSFCMPqQWqPOYlFaPV3O9IIoXsXFI68TrjBuKmirGdOKGakoH9aySwc2a4Jbkw-VlEHOM4SnKKVf4JUWvoYDLdkWr-QLr1LbdEwQ4B-XNLSQTldEoE2doP0_l0dyvVBLN73dL6WWj2IXyjJZmHGjgGs4Lyecl0ZNzs92wfQ"/>
            </div>
          </div>
          <p className="font-label-md text-label-md text-white/80 italic">Trusted by 2,000+ workspace leads</p>
        </div>
      </section>
      
      {/* Right Side: Auth Form */}
      <section className="w-full lg:w-1/2 bg-surface flex items-center justify-center p-md sm:p-xl relative">
        {/* Mobile Logo */}
        <div className="absolute top-md left-md lg:hidden flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary font-bold">dataset</span>
          <span className="font-title-lg text-title-lg font-black text-primary">ProjectFlow</span>
        </div>
        <div className="w-full max-w-md space-y-xl z-10">
          
          {/* Header */}
          <header className="space-y-sm">
            {isLogin ? (
              <div id="login-header">
                <h2 className="font-headline-md text-headline-md text-on-surface">Welcome back</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Enter your credentials to access your workspace.</p>
              </div>
            ) : (
              <div id="signup-header">
                <h2 className="font-headline-md text-headline-md text-on-surface">Get started for free</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Join thousands of teams building the future.</p>
              </div>
            )}
          </header>
          
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-md">
            <button onClick={() => navigate('/dashboard')} className="flex items-center justify-center gap-sm py-sm px-md border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 active:scale-[0.98]">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              Google
            </button>
            <button onClick={() => navigate('/dashboard')} className="flex items-center justify-center gap-sm py-sm px-md border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 active:scale-[0.98]">
              <svg className="w-5 h-5 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              GitHub
            </button>
          </div>
          
          <div className="relative flex items-center py-sm">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink mx-md font-label-md text-label-md text-outline">OR CONTINUE WITH EMAIL</span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>
          
          {/* Main Form */}
          <form className="space-y-lg" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
                <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 bg-surface" id="name" placeholder="John Doe" type="text" />
              </div>
            )}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Work Email</label>
              <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 bg-surface" id="email" placeholder="name@company.com" type="email" />
            </div>
            <div className="flex flex-col gap-xs">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                {isLogin && <a className="font-label-md text-label-md text-primary hover:underline" href="#">Forgot?</a>}
              </div>
              <div className="relative">
                <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 bg-surface" id="password" placeholder="••••••••" type={showPassword ? "text" : "password"} />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-primary py-md rounded-lg font-label-md text-label-md text-white font-bold tracking-wide hover:shadow-lg hover:shadow-primary/20 active:scale-[0.99] transition-all duration-200">
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            </button>
          </form>
          
          <footer className="text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button type="button" className="text-primary font-semibold hover:underline" onClick={toggleForm}>
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
            <div className="mt-xl flex justify-center gap-lg">
              <a className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors" href="#">Privacy Policy</a>
              <a className="font-label-sm text-label-sm text-outline hover:text-on-surface-variant transition-colors" href="#">Terms of Service</a>
            </div>
          </footer>
        </div>
      </section>
      
      {/* Decorative floating elements for depth */}
      <div className="fixed bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-96 h-96 -mt-48 -mr-48 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
    </main>
  );
};

export default LoginSignup;
