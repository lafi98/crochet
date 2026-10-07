import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Instagram, Mail } from 'lucide-react';

const Header = () => (
  <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-darkgreen/10">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2"><Menu className="w-6 h-6 text-darkgreen" /></button>
        <Link to="/" className="text-2xl md:text-3xl font-serif text-darkgreen font-semibold tracking-tight">THE CROCHET JOURNAL</Link>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        {['HOME', 'CROCHET', 'BEGINNERS', 'PATTERNS', 'TUTORIALS'].map(item => (
          <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm font-medium text-darkgreen tracking-wide hover:text-terracotta transition-colors">{item}</Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="p-2"><Search className="w-5 h-5 text-darkgreen" /></button>
        <Link to="/admin/login" className="hidden md:block bg-darkgreen text-cream px-5 py-2 text-sm font-medium rounded-full hover:bg-olive transition-colors">Admin</Link>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-darkgreen text-cream py-16 mt-auto">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-serif mb-4 text-cream">THE CROCHET JOURNAL</h2>
        <p className="text-cream/80 max-w-sm mb-6">Stories, tutorials, and inspiration for the modern maker.</p>
        <div className="flex gap-4">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-terracotta" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-terracotta" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold tracking-wider mb-4 text-cream">MAGAZINE</h3>
        <ul className="space-y-3 text-cream/80">
          <li><Link to="/patterns">Crochet Patterns</Link></li>
          <li><Link to="/beginners">For Beginners</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold tracking-wider mb-4 text-cream">LEGAL</h3>
        <ul className="space-y-3 text-cream/80">
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <main className="min-h-screen">
    <section className="relative h-[70vh] bg-olive flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">Stories, tutorials & inspiration<br/>for the modern maker.</h1>
        <button className="bg-terracotta text-cream px-8 py-3 rounded-full font-medium hover:bg-cream hover:text-darkgreen transition-all">EXPLORE THE JOURNAL</button>
      </div>
    </section>
    <section className="py-24 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-serif text-darkgreen text-center mb-12">Latest from the Journal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-darkgreen/10 mb-6 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-olive/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <span className="text-terracotta text-xs font-semibold uppercase mb-3 block">Beginners</span>
            <h3 className="text-xl font-serif text-darkgreen mb-3 group-hover:text-terracotta">10 Easy Crochet Projects to Start Today</h3>
            <p className="text-charcoal/70 text-sm">Discover the joy of creating with your own hands with these simple, beautiful projects.</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <form onSubmit={(e) => { e.preventDefault(); navigate('/admin/dashboard'); }} className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-darkgreen/10">
        <h1 className="text-2xl font-serif text-darkgreen mb-8 text-center">Admin Login</h1>
        <div className="space-y-6">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-darkgreen/20 focus:ring-2 focus:ring-olive bg-cream/50" required />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-darkgreen/20 focus:ring-2 focus:ring-olive bg-cream/50" required />
          <button type="submit" className="w-full bg-darkgreen text-cream py-3 rounded-lg font-medium hover:bg-olive transition-colors">Sign In</button>
        </div>
      </form>
    </div>
  );
};

const AdminDashboard = () => (
  <div className="min-h-screen bg-ivory flex">
    <aside className="w-64 bg-darkgreen text-cream p-6">
      <h2 className="text-xl font-serif mb-10 text-cream">TCJ Admin</h2>
      <nav className="space-y-4">
        {['Dashboard', 'Articles', 'Settings'].map(item => (
          <Link key={item} to={`/admin/${item.toLowerCase()}`} className="block text-cream/80 hover:text-cream hover:bg-cream/10 px-4 py-2 rounded">{item}</Link>
        ))}
        <Link to="/" className="block text-terracotta mt-8 px-4 py-2 hover:bg-cream/10 rounded">Logout</Link>
      </nav>
    </aside>
    <main className="flex-1 p-10">
      <h1 className="text-3xl font-serif text-darkgreen mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-darkgreen/10">
          <h3 className="text-charcoal/60 text-sm font-medium mb-2">Total Articles</h3>
          <p className="text-3xl font-serif text-darkgreen">34</p>
        </div>
      </div>
    </main>
  </div>
);

export default function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-xl text-darkgreen">404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}
