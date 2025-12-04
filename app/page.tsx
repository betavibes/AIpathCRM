import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
                <div className="bg-gray-200/90 backdrop-blur-md border border-gray-300 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="AIPATH CRM Logo"
                            width={150}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-900">
                        <a href="#" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/features" className="hover:text-blue-700 transition-colors">Features</a>
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/roadmap" className="hover:text-blue-700 transition-colors">Future Roadmap</a>
                    </div>

                    <a
                        href="https://www.aidiginext.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-300">Coming Soon...</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        AIPATH CRM <br />
                        <span className="text-gradient">Staff Management System Launch</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Welcome to the next generation of workforce/staff management automation.
                        AIPATH CRM proudly announces the launch of our Staff Management System, designed to empower businesses with end-to-end staff operations, real-time insights, and productivity tools—accessible anytime, anywhere.
                    </p>

                    <div className="glass-premium inline-block p-6 rounded-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.25s' }}>
                        <p className="text-xl font-semibold text-white">
                            Our mission is simple: <br />
                            <span className="text-gradient-blue">Make Staff Management effortless, transparent, and fully automated.</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
                            Start Free Trial
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all">
                            View Demo
                        </button>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="mt-20 relative mx-auto max-w-5xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <div className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden group relative">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
                            <Image
                                src="/dashboard-mockup.png"
                                alt="AIPATH CRM Dashboard Interface"
                                width={1200}
                                height={675}
                                className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Features (Bento Grid) --- */}
            <section id="features" className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">🌐 What’s Included in the Launch</h2>
                        <p className="text-gray-400 text-lg">
                            Current Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Web Admin Panel */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-3xl text-white border border-white/10">📊</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Web Admin Panel for Business Owners</h3>
                            <p className="text-gray-400 mb-6">A powerful, web-based admin dashboard designed to give you complete control.</p>

                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> 360° Business Overview Dashboard</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Employee Management</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Payroll Management (Salary, Bonus, Advances, Deductions)</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Task Assignment & Workflow Tracking</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Leave Management System</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Staff Location Tracking (Live) & Geo-Fencing</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Attendance with Photo Check-In/Out (Selfie)</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Smart Alerts & Notifications</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Document Vault & Staff Performance Scorecard</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Multi-Branch Management & Timesheet Module</li>
                            </ul>
                        </div>

                        {/* Staff Mobile App */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-3xl text-white border border-white/10">📱</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Staff Mobile App (Android & iOS)</h3>
                            <p className="text-gray-400 mb-6">A simple, fast employee app that keeps staff connected and accountable.</p>

                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Photo Check-In / Check-Out Attendance</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Multiple Check-Ins / Check-Outs per day</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Task Acceptance & Task Updates with Photos</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Subtasks & Multi-Task Handling</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Performance Scorecard – AI-based productivity scoring</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> View Customer Details or Add Manually</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Apply Leaves & Track Leave Status</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> Check Attendance History Anytime</li>
                                <li className="flex items-start gap-2"><span className="text-green-400 mt-1">✔</span> View Salary Details & Download Payslips</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* --- Roadmap / Future --- */}
            <section id="roadmap" className="py-24 bg-gradient-to-b from-transparent to-indigo-900/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Roadmap Preview</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">🚧 Upcoming Features</h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-right md:text-left">
                            We’re just getting started. Here’s what’s coming next.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-indigo-500">
                            <div className="text-3xl mb-4">📱</div>
                            <h3 className="text-xl font-bold mb-2">Admin Mobile/Tablet App</h3>
                            <p className="text-gray-400 text-sm">Manage your entire business from your smartphone. Track staff, assign tasks, approve leaves, check attendance — anytime, anywhere.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-purple-500">
                            <div className="text-3xl mb-4">🤖</div>
                            <h3 className="text-xl font-bold mb-2">AI Assistant for Business</h3>
                            <p className="text-gray-400 text-sm">Ask anything: “Show today’s attendance,” “What tasks are pending?”, “Who is on leave today?” Get instant answers.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-pink-500">
                            <div className="text-3xl mb-4">🎓</div>
                            <h3 className="text-xl font-bold mb-2">AI Trainer for Staff</h3>
                            <p className="text-gray-400 text-sm">Automated training modules to upskill staff: SOP Training, Customer Handling, Industry-specific knowledge.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-cyan-500">
                            <div className="text-3xl mb-4">📸</div>
                            <h3 className="text-xl font-bold mb-2">Face Recognition</h3>
                            <p className="text-gray-400 text-sm">Touchless, secure and fast — future of attendance.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-green-500">
                            <div className="text-3xl mb-4">⚙️</div>
                            <h3 className="text-xl font-bold mb-2">Full Business Automation</h3>
                            <p className="text-gray-400 text-sm">Automated task delegation, payroll, alerts for issues, and predictive business insights.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-yellow-500">
                            <div className="text-3xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">More Features</h3>
                            <ul className="text-gray-400 text-sm list-disc list-inside">
                                <li>Customer Visit Tracking</li>
                                <li>Expense Management</li>
                                <li>Inventory/Tools Tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stay Tuned CTA --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-10 rounded-3xl glass-premium max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">🔔 Stay Tuned</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            More updates, feature drops, and AI automation tools are on the way. <br />
                            Welcome to the future of Staff Management.
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-gradient-blue">
                            AIPATH CRM – Digitize. Automate. Grow.
                        </p>
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
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
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
