import Image from "next/image";

export default function FeaturesPage() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
                <div className="bg-gray-200/90 backdrop-blur-md border border-gray-300 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="AIPATH CRM Logo"
                            width={150}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-900">
                        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/features" className="hover:text-blue-700 transition-colors text-blue-700">Features</a>
                        <a href="#why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="#pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
                    </div>

                    <button className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">
                        Contact Us
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

            {/* --- Feature Section 5: Attendance Management System --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Attendance Management System</h2>
                        <p className="text-gray-400 text-lg">
                            Revolutionary attendance tracking with selfie verification, GPS validation, and automated calculations. Say goodbye to proxy attendance and manual timesheet management.
                        </p>
                    </div>

                    {/* Content Grid - Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Selfie Check-In/Out
                                </h3>
                                <p className="text-gray-400 text-sm">Photo-based attendance with facial verification to prevent proxy attendance and ensure authenticity.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> GPS Location Verification
                                </h3>
                                <p className="text-gray-400 text-sm">Automatic GPS tracking ensures staff check-in from designated work locations with geo-fencing support.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Automated Calculations
                                </h3>
                                <p className="text-gray-400 text-sm">Auto-calculate late arrivals, early departures, overtime, half-days, and short days with configurable rules.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Real-Time Attendance Reports
                                </h3>
                                <p className="text-gray-400 text-sm">Live attendance dashboard with present/absent status, attendance percentage, and monthly reports.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/attendance-management.png"
                                    alt="Attendance Management System"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 6: Task Management System --- */}
            <section className="py-20 relative bg-white/[0.01]">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Task Management System</h2>
                        <p className="text-gray-400 text-lg">
                            Assign, track, and manage tasks with photo updates, subtasks, and real-time progress monitoring. Keep your team aligned and productive.
                        </p>
                    </div>

                    {/* Content Grid - Image Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/task-management.png"
                                    alt="Task Management System"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Task Assignment & Tracking
                                </h3>
                                <p className="text-gray-400 text-sm">Create and assign tasks to staff with descriptions, deadlines, priority levels, and custom fields.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Photo & Progress Updates
                                </h3>
                                <p className="text-gray-400 text-sm">Staff can update task progress with photos, comments, and status changes from their mobile app.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Subtasks & Dependencies
                                </h3>
                                <p className="text-gray-400 text-sm">Break down complex tasks into subtasks and manage task dependencies for better workflow control.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Task Analytics & Reports
                                </h3>
                                <p className="text-gray-400 text-sm">Track task completion rates, overdue tasks, and staff productivity with detailed analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 7: Leave Management System --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Leave Management System</h2>
                        <p className="text-gray-400 text-lg">
                            Streamline leave requests, approvals, and balance tracking. Automated workflows ensure smooth leave management with complete transparency.
                        </p>
                    </div>

                    {/* Content Grid - Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Easy Leave Requests
                                </h3>
                                <p className="text-gray-400 text-sm">Staff can apply for leaves directly from mobile app with reason, dates, and supporting documents.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Multi-Level Approval Workflow
                                </h3>
                                <p className="text-gray-400 text-sm">Configure approval hierarchies with automated notifications to managers and HR for pending requests.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Leave Balance Tracking
                                </h3>
                                <p className="text-gray-400 text-sm">Automatic tracking of leave balances for different leave types (casual, sick, annual, unpaid).</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Leave Calendar & History
                                </h3>
                                <p className="text-gray-400 text-sm">Visual calendar view of team leaves and complete leave history with approval status.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-3 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 w-full">
                                <Image
                                    src="/leave-management.png"
                                    alt="Leave Management System"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Feature Section 8: AI Assistant for Business --- */}
            <section className="py-20 relative bg-white/[0.01]">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Assistant for Business</h2>
                        <p className="text-gray-400 text-lg">
                            Ask anything about your business and get instant answers. Your intelligent assistant understands natural language and provides real-time insights.
                        </p>
                    </div>

                    {/* Content Grid - Image Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <div className="glass-premium rounded-3xl p-6 overflow-hidden w-full">
                                <div className="space-y-4">
                                    <div className="text-center mb-6">
                                        <div className="text-5xl mb-3">🤖</div>
                                        <h3 className="text-xl font-bold text-gradient">Ask Anything About Your Business</h3>
                                    </div>

                                    {/* Example Queries */}
                                    <div className="space-y-3">
                                        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4 text-right">
                                            <p className="text-white font-medium">"Show today's attendance"</p>
                                        </div>
                                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-right">
                                            <p className="text-white font-medium">"What tasks are pending?"</p>
                                        </div>
                                        <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-right">
                                            <p className="text-white font-medium">"Who is on leave today?"</p>
                                        </div>
                                    </div>

                                    <div className="text-center pt-4">
                                        <p className="text-green-400 font-semibold">✓ Get instant answers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Natural Language Queries
                                </h3>
                                <p className="text-gray-400 text-sm">Ask questions in plain English and get instant answers about attendance, tasks, leaves, and more.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Real-Time Data Access
                                </h3>
                                <p className="text-gray-400 text-sm">Get up-to-date information from your workforce data instantly without navigating through multiple screens.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Intelligent Recommendations
                                </h3>
                                <p className="text-gray-400 text-sm">AI-powered suggestions for optimal shift scheduling, resource allocation, and productivity improvements.</p>
                            </div>

                            <div className="glass p-5 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Predictive Insights
                                </h3>
                                <p className="text-gray-400 text-sm">Forecast attendance patterns, identify productivity trends, and predict staffing needs with AI models.</p>
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
                                <Image
                                    src="/logo.png"
                                    alt="AIPATH CRM Logo"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
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
