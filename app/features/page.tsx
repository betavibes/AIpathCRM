import Image from "next/image";

export default function FeaturesPage() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
                <div className="glass-premium rounded-full px-6 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">
                            A
                        </div>
                        <span className="font-bold text-lg tracking-tight">AIPATH</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <a href="/features" className="hover:text-white transition-colors text-white">Features</a>
                        <a href="#why-aipath" className="hover:text-white transition-colors">Why AIpath CRM?</a>
                        <a href="#about" className="hover:text-white transition-colors">About Us</a>
                    </div>

                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-20 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Powerful Features for <br />
                        <span className="text-gradient">Modern Workforce Management</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Discover how AIPATH CRM empowers your business with comprehensive tools for HR, tracking, mobile operations, and intelligent insights.
                    </p>
                </div>
            </section>

            {/* --- Feature Section 1: HR & Payroll Automation --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">HR & Payroll Automation</h2>
                        <p className="text-gray-400 text-lg">
                            Streamline your entire human resources and payroll operations with intelligent automation. From employee onboarding to salary processing, manage everything in one unified system.
                        </p>
                    </div>

                    {/* Content Grid - Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Employee Management
                                </h3>
                                <p className="text-gray-400 text-sm">Complete employee profiles, documents, contracts, and performance tracking in one place.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Automated Payroll Processing
                                </h3>
                                <p className="text-gray-400 text-sm">Calculate salaries, bonuses, advances, and deductions automatically. Generate monthly salary sheets with one click.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Leave Management System
                                </h3>
                                <p className="text-gray-400 text-sm">Track leave requests, approvals, and balances. Automated notifications for pending approvals.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Document Vault
                                </h3>
                                <p className="text-gray-400 text-sm">Secure storage for employee documents, certificates, IDs, and contracts with easy access control.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/hr-payroll-dashboard.png"
                                    alt="HR & Payroll Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 2: Smart Workforce Tracking --- */}
            <section className="py-20 relative bg-white/[0.01]">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Workforce Tracking</h2>
                        <p className="text-gray-400 text-lg">
                            Real-time visibility into your workforce location, attendance, and activities. Ensure accountability and optimize field operations with GPS-powered tracking.
                        </p>
                    </div>

                    {/* Content Grid - Image Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/workforce-tracking.png"
                                    alt="Live Workforce Tracking"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Live Location Tracking
                                </h3>
                                <p className="text-gray-400 text-sm">Track staff location in real-time on an interactive map. Perfect for field teams and remote workers.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Geo-Fencing Control
                                </h3>
                                <p className="text-gray-400 text-sm">Define work zones and get alerts when staff enter or leave designated areas. Restrict check-ins to specific locations.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Photo Check-In/Out Attendance
                                </h3>
                                <p className="text-gray-400 text-sm">Selfie-based attendance with GPS verification. Automatic calculation of late arrivals, short days, and half-days.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Smart Shift Scheduling
                                </h3>
                                <p className="text-gray-400 text-sm">Auto-generate staff shifts, send notifications, and manage rotations effortlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 3: Mobile Empowerment --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mobile Empowerment</h2>
                        <p className="text-gray-400 text-lg">
                            Empower your staff with a powerful mobile app for Android and iOS. Enable them to manage tasks, attendance, and performance from anywhere.
                        </p>
                    </div>

                    {/* Content Grid - Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Staff Mobile App
                                </h3>
                                <p className="text-gray-400 text-sm">Simple, fast, and intuitive mobile app for all staff operations. Available on Android and iOS.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Task Management
                                </h3>
                                <p className="text-gray-400 text-sm">Accept tasks, update progress with photos, handle subtasks, and manage multiple assignments simultaneously.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Multiple Check-Ins Per Day
                                </h3>
                                <p className="text-gray-400 text-sm">Support for multiple check-ins and check-outs throughout the day for field staff and flexible schedules.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Performance Scorecard
                                </h3>
                                <p className="text-gray-400 text-sm">AI-based productivity scoring. Staff can view their performance metrics and salary details anytime.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/mobile-app-screens.png"
                                    alt="Mobile App Interface"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 4: Business Intelligence & AI --- */}
            <section className="py-20 relative bg-white/[0.01]">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Intelligence & AI</h2>
                        <p className="text-gray-400 text-lg">
                            Make data-driven decisions with powerful analytics, AI-powered insights, and comprehensive business intelligence tools.
                        </p>
                    </div>

                    {/* Content Grid - Image Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/analytics-dashboard.png"
                                    alt="Business Intelligence Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> 360° Admin Dashboard
                                </h3>
                                <p className="text-gray-400 text-sm">Complete business overview with real-time metrics, charts, and KPIs. Monitor everything from one screen.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> AI-Powered Insights
                                </h3>
                                <p className="text-gray-400 text-sm">Predictive analytics to optimize scheduling, reduce costs, and identify productivity patterns.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Smart Alerts & Notifications
                                </h3>
                                <p className="text-gray-400 text-sm">Automated alerts for late reporting, SLA breaches, pending approvals, and critical events.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Multi-Branch Management
                                </h3>
                                <p className="text-gray-400 text-sm">Manage multiple locations, departments, and teams from a single unified platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-10 rounded-3xl glass-premium max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Experience the power of AIPATH CRM with a free trial. <br />
                            No credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
                                Start Free Trial
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="border-t border-white/10 bg-[#05060A] pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">A</div>
                                <span className="font-bold text-xl">AIPATH</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Empowering businesses with intelligent workforce solutions. Built for the future of work.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Product</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Stay Updated</h4>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors" />
                                <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <p>© 2025 AIPATH CRM. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gray-400">Privacy</a>
                            <a href="#" className="hover:text-gray-400">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
