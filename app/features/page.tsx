import Image from "next/image";

export default function FeaturesPage() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30 bg-[#05060A] text-gray-100">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
                <div className="bg-gray-200/90 backdrop-blur-md border border-gray-300 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <Image
                            src="/AIpath CRM LOGO.png"
                            alt="AIpath CRM Logo"
                            width={220}
                            height={60}
                            className="h-14 w-auto object-contain logo-premium drop-shadow-sm"
                            priority
                            unoptimized={true}
                        />
                    </a>

                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-blue-900">
                        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/features" className="hover:text-blue-700 transition-colors">Features</a>
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/roadmap" className="hover:text-blue-700 transition-colors">Roadmap</a>
                        <a href="/about" className="hover:text-blue-700 transition-colors">About Us</a>
                        <a href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">Contact Us</a>
                    </div>
                </div>
            </nav>

            <section className="relative pt-40 pb-20 md:pt-52 md:pb-20 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-indigo-700 via-slate-900 to-sky-700 opacity-30 blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-300 mb-6">Enterprise-grade product capabilities</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                        Features that move your business forward.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        AIpath CRM combines CRM, ERP, workforce automation, and AI intelligence into a single premium platform built for modern teams.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Unified CRM + ERP</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                One platform for customer relationships, sales operations, HR, finance, and field execution. Remove tool fragmentation and run your business from a single source of truth.
                            </p>
                            <div className="space-y-4">
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">CRM + Customer Data</h3>
                                    <p className="text-gray-400 text-sm">Track leads, conversations, customer history, and follow-up workflows with intelligent attribution.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">Orders, Billing & Inventory</h3>
                                    <p className="text-gray-400 text-sm">Manage quotes, invoices, billing, and stock across branches with a seamless integrated workflow.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">People & Payroll</h3>
                                    <p className="text-gray-400 text-sm">Onboard employees, manage attendance, and run payroll with automated rules and compliance-ready reports.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="glass-premium rounded-[2rem] overflow-hidden p-3 shadow-2xl shadow-indigo-900/20">
                                <Image
                                    src="/dashboard-mockup.png"
                                    alt="Unified CRM and ERP dashboard"
                                    width={900}
                                    height={700}
                                    className="w-full h-auto rounded-[1.75rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                        <div className="flex items-center justify-center">
                            <div className="glass-premium rounded-[2rem] overflow-hidden p-3 shadow-2xl shadow-slate-900/20">
                                <Image
                                    src="/mobile-app-screens.png"
                                    alt="Mobile workforce experience"
                                    width={900}
                                    height={700}
                                    className="w-full h-auto rounded-[1.75rem]"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Workforce Automation</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Automate attendance, tasks, field workflows, and approvals so your team can focus on execution instead of paperwork.
                            </p>
                            <div className="space-y-4">
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">Selfie Attendance</h3>
                                    <p className="text-gray-400 text-sm">Photo check-ins with GPS verification remove proxy attendance and improve accuracy.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">Task & Visit Management</h3>
                                    <p className="text-gray-400 text-sm">Assign tasks, capture progress updates, and coordinate field visits from one mobile experience.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10">
                                    <h3 className="font-semibold text-white mb-2">Geo-Fenced Operations</h3>
                                    <p className="text-gray-400 text-sm">Create location-based rules for attendance, visits, and work zones to enforce consistency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-First Intelligence</h2>
                        <p className="text-gray-400 text-lg">
                            Get smarter business outcomes with AI insights, predictive analytics, and automated recommendations that keep your teams ahead.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Predictive Forecasting</h3>
                            <p className="text-gray-400 text-sm">Forecast staffing needs, attendance trends, and operational risks with AI-driven signals.</p>
                        </div>
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                            <p className="text-gray-400 text-sm">Receive automatic notifications for approvals, task delays, SLA breaches, and critical business events.</p>
                        </div>
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Operational Insights</h3>
                            <p className="text-gray-400 text-sm">Track performance, productivity, and revenue across teams with actionable dashboards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Secure Enterprise Controls</h3>
                            <p className="text-gray-400 text-sm">Manage permissions, audit logs, and branch-level access with a platform built for growing businesses.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Connected Ecosystem</h3>
                            <p className="text-gray-400 text-sm">Link web, mobile, WhatsApp, and Telegram workflows for seamless communication and execution.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-10 rounded-3xl glass-premium max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">More than features�an entire operating system.</h2>
                        <p className="text-xl text-blue-900 mb-8">
                            Discover how AIpath CRM unifies your business into a single intelligent platform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
                                Book a Demo
                            </a>
                            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                                Talk to Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/10 bg-[#05060A] pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <Image
                                    src="/AIpath CRM LOGO.png"
                                    alt="AIpath CRM Logo"
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
                                <li><a href="/features" className="hover:text-blue-700 transition-colors">Features</a></li>
                                <li><a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">API</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="/about" className="hover:text-blue-700 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Stay Updated</h4>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors" />
                                <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                                    ?
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <p>� 2026 AIpath CRM. All rights reserved.</p>
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
