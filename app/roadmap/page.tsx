import Image from "next/image";

export default function RoadmapPage() {
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
                        <a href="/features" className="hover:text-blue-700 transition-colors">Features</a>
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/roadmap" className="hover:text-blue-700 transition-colors text-blue-700">Future Roadmap</a>
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
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-20 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        AIPATH CRM – <br />
                        <span className="text-gradient">One Mobile App</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Unified. Powerful. Simple.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        AIPATH CRM brings Admin, Management, and Staff workflows into one single mobile app—designed for fast operations, seamless communication, and complete business control from anywhere.
                    </p>
                </div>
            </section>

            {/* --- Why One Mobile App Section --- */}
            <section className="py-16 bg-gradient-to-b from-transparent to-indigo-900/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">💡 Why One Mobile App?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-3xl mb-3">✔</div>
                            <h3 className="text-lg font-bold mb-2">No multiple apps to download</h3>
                        </div>
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-3xl mb-3">✔</div>
                            <h3 className="text-lg font-bold mb-2">Unified UI for all roles</h3>
                        </div>
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-3xl mb-3">✔</div>
                            <h3 className="text-lg font-bold mb-2">Faster onboarding for teams</h3>
                        </div>
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-3xl mb-3">✔</div>
                            <h3 className="text-lg font-bold mb-2">Lower development & maintenance cost</h3>
                        </div>
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors col-span-1 md:col-span-2 lg:col-span-2">
                            <div className="text-3xl mb-3">✔</div>
                            <h3 className="text-lg font-bold mb-2">Web + Mobile = complete SaaS ecosystem</h3>
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 mb-4">
                            A single app automatically adjusts features based on user role:
                        </p>
                        <div className="flex justify-center gap-6 text-2xl font-bold">
                            <span className="text-blue-400">Admin</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-indigo-400">Manager</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-purple-400">Staff</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Role-Based Experience Section --- */}
            <section className="py-20 bg-gradient-to-b from-indigo-900/10 to-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">🔐 Role-Based Experience (Auto-Switch UI)</h2>
                        <p className="text-lg text-gray-400">
                            The same app, different experiences based on your role
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Admin Interface */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-blue-500">
                            <div className="text-4xl mb-4">👨‍💼</div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Admin Interface</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Dashboard, KPIs, reports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Lead & customer management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Project & task allocation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>HR & attendance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Approval workflows</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Billing & subscription control</span>
                                </li>
                            </ul>
                        </div>

                        {/* Manager Interface */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-indigo-500">
                            <div className="text-4xl mb-4">🧑‍💼</div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-400">Manager Interface</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Team monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Daily tasks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Staff performance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Approvals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Internal communication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Customer visit tracking</span>
                                </li>
                            </ul>
                        </div>

                        {/* Staff Interface */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-purple-500">
                            <div className="text-4xl mb-4">👷</div>
                            <h3 className="text-2xl font-bold mb-6 text-purple-400">Staff Interface</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Daily tasks & reminders</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Attendance punch-in/out</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Customer visits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Expense submissions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Activity tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>Chat with manager</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- App Flow Overview Section --- */}
            <section className="py-20 bg-gradient-to-b from-transparent to-indigo-900/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">📲 App Flow Overview</h2>
                        <p className="text-lg text-gray-400">
                            Simple login, smart role detection, personalized experience
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="glass-premium p-10 rounded-3xl">
                            <div className="flex flex-col items-center space-y-6">
                                {/* Login */}
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-2xl text-white font-bold text-xl shadow-lg">
                                    Login
                                </div>
                                <div className="text-3xl text-indigo-400">↓</div>
                                
                                {/* Role Auto-Detection */}
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-2xl text-white font-bold text-xl shadow-lg">
                                    Role Auto-Detection
                                </div>
                                <div className="text-3xl text-indigo-400">↓</div>
                                
                                {/* Three Roles */}
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="bg-blue-500/20 border-2 border-blue-500 px-6 py-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">👨‍💼</div>
                                        <div className="font-bold text-blue-400">Admin</div>
                                    </div>
                                    <div className="bg-indigo-500/20 border-2 border-indigo-500 px-6 py-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">🧑‍💼</div>
                                        <div className="font-bold text-indigo-400">Manager</div>
                                    </div>
                                    <div className="bg-purple-500/20 border-2 border-purple-500 px-6 py-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">👷</div>
                                        <div className="font-bold text-purple-400">Staff</div>
                                    </div>
                                </div>
                                
                                <div className="text-3xl text-indigo-400">↓</div>
                                
                                {/* Personalized Dashboard */}
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl text-white font-bold text-xl shadow-lg text-center">
                                    Personalized Dashboard for Each Role
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Screens Overview Section --- */}
            <section className="py-20 bg-gradient-to-b from-indigo-900/10 to-transparent">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">🎨 Screens Overview</h2>
                        <p className="text-lg text-gray-400">
                            Beautiful, intuitive interfaces for every role
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Screen Cards */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">🔐</div>
                            <h3 className="text-xl font-bold mb-2">Login & OTP Page</h3>
                            <p className="text-gray-400 text-sm">Secure authentication with OTP verification for all users.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
                            <p className="text-gray-400 text-sm">Complete business snapshot with KPIs, revenue, leads, and staff activity.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">🧑‍💼</div>
                            <h3 className="text-xl font-bold mb-2">Manager Dashboard</h3>
                            <p className="text-gray-400 text-sm">Team performance, daily activities, escalations in one screen.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">👷</div>
                            <h3 className="text-xl font-bold mb-2">Staff Dashboard</h3>
                            <p className="text-gray-400 text-sm">Quick access to daily tasks, punch-in, customer visits, and activities.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="text-xl font-bold mb-2">Task Page</h3>
                            <p className="text-gray-400 text-sm">Manage and track all tasks with priority levels and deadlines.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-bold mb-2">Lead/Customer Page</h3>
                            <p className="text-gray-400 text-sm">Complete customer relationship management with follow-ups.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-bold mb-2">Attendance Page</h3>
                            <p className="text-gray-400 text-sm">GPS-based punch-in/out with real-time attendance tracking.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold mb-2">Expense Management</h3>
                            <p className="text-gray-400 text-sm">Submit and approve expenses with receipt uploads.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-bold mb-2">Approvals Page</h3>
                            <p className="text-gray-400 text-sm">Streamlined approval workflows for leaves, expenses, and tasks.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-bold mb-2">Chat & Communication</h3>
                            <p className="text-gray-400 text-sm">Real-time messaging between team members and managers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Modules Inside the App Section --- */}
            <section className="py-20 bg-gradient-to-b from-transparent to-indigo-900/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">🧩 Modules Inside the App</h2>
                        <p className="text-lg text-gray-400">
                            Powerful features tailored for each role
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Admin Modules */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-blue-500">
                            <div className="text-4xl mb-4">👨‍💼</div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">Admin</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Lead & CRM</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">HR & Attendance</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Project/Tasks</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Billing & Invoices</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Approvals</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Team Performance</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-3 rounded-lg border border-blue-500/30">
                                    <span className="font-semibold">Automation & Alerts</span>
                                </div>
                            </div>
                        </div>

                        {/* Manager Modules */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-indigo-500">
                            <div className="text-4xl mb-4">🧑‍💼</div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-400">Manager</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Team Monitoring</span>
                                </div>
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Task Delegation</span>
                                </div>
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Customer Visits</span>
                                </div>
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Reporting</span>
                                </div>
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Approvals</span>
                                </div>
                                <div className="bg-indigo-500/10 px-4 py-3 rounded-lg border border-indigo-500/30">
                                    <span className="font-semibold">Leads Follow-Up</span>
                                </div>
                            </div>
                        </div>

                        {/* Staff Modules */}
                        <div className="glass-premium p-8 rounded-3xl border-t-4 border-t-purple-500">
                            <div className="text-4xl mb-4">👷</div>
                            <h3 className="text-2xl font-bold mb-6 text-purple-400">Staff</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Tasks</span>
                                </div>
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Visit Planner</span>
                                </div>
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Attendance</span>
                                </div>
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Expenses</span>
                                </div>
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Chat</span>
                                </div>
                                <div className="bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30">
                                    <span className="font-semibold">Performance Score</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="py-20 bg-gradient-to-b from-indigo-900/10 to-transparent">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="glass-premium p-12 rounded-3xl border border-white/10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">🚀 One App. All Roles. Complete Control.</h3>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                AIPATH CRM's One Mobile App system eliminates complexity and brings your entire team together on a single platform. Whether you're an admin managing the business, a manager leading the team, or staff executing tasks—everyone gets exactly what they need, when they need it.
                            </p>
                            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl">
                                <p className="text-2xl font-bold text-white">AIPATH CRM – Digitize. Automate. Grow.</p>
                            </div>
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
