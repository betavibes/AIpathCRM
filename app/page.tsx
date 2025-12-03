import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
                <div className="glass-premium rounded-full px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">
                            A
                        </div>
                        <span className="font-bold text-lg tracking-tight">AIPATH</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#why-aipath" className="hover:text-white transition-colors">Why AIpath CRM?</a>
                        <a href="#about" className="hover:text-white transition-colors">About Us</a>
                    </div>

                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse-glow"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-300">v2.0 Now Live</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        The <span className="text-gradient">Intelligence</span> Behind <br />
                        Your Workforce
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Automate operations, track real-time productivity, and scale your business with the world's most advanced AI-driven staff management platform.
                    </p>

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

            {/* --- Trusted By --- */}
            <section className="py-10 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">Trusted by 500+ Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for Logos */}
                        <div className="text-xl font-bold text-white">ACME Corp</div>
                        <div className="text-xl font-bold text-white">GlobalTech</div>
                        <div className="text-xl font-bold text-white">Nebula</div>
                        <div className="text-xl font-bold text-white">Vertex</div>
                        <div className="text-xl font-bold text-white">Orbit</div>
                    </div>
                </div>
            </section>

            {/* --- Features (Bento Grid) --- */}
            <section id="features" className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything You Need</h2>
                        <p className="text-gray-400 text-lg">
                            A complete ecosystem of tools designed to streamline your operations and boost efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Large Card */}
                        <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 min-h-[300px] flex flex-col justify-between group">
                            <div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-2xl text-white border border-white/10">📊</div>
                                <h3 className="text-2xl font-bold mb-2">Command Center</h3>
                                <p className="text-gray-400">Real-time oversight of your entire workforce. Track attendance, location, and tasks in one unified dashboard.</p>
                            </div>
                            <div className="mt-8 h-32 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-xl border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col justify-between">
                            <div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-2xl text-white border border-white/10">📱</div>
                                <h3 className="text-2xl font-bold mb-2">Mobile First</h3>
                                <p className="text-gray-400">Empower your staff with a powerful mobile app. Check-ins, task updates, and leave requests on the go.</p>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <div className="w-32 h-48 bg-gray-800 rounded-t-2xl border-x border-t border-white/10 relative">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Small Card 1 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-2xl text-white border border-white/10">🤖</div>
                            <h3 className="text-xl font-bold mb-2">AI Insights</h3>
                            <p className="text-gray-400 text-sm">Predictive analytics to optimize scheduling and reduce costs.</p>
                        </div>

                        {/* Small Card 2 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-2xl text-white border border-white/10">📍</div>
                            <h3 className="text-xl font-bold mb-2">Geo-Fencing</h3>
                            <p className="text-gray-400 text-sm">Precise location tracking ensures staff are where they need to be.</p>
                        </div>

                        {/* Wide Card */}
                        <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center gap-8">
                            <div className="flex-1">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-2xl text-white border border-white/10">⚡</div>
                                <h3 className="text-2xl font-bold mb-2">Automated Payroll</h3>
                                <p className="text-gray-400">One-click payroll generation based on accurate attendance and performance data.</p>
                            </div>
                            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Roadmap / Future --- */}
            <section id="roadmap" className="py-24 bg-gradient-to-b from-transparent to-indigo-900/20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">The Future</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">Innovation Roadmap</h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-right md:text-left">
                            We are constantly pushing boundaries. Here is what's coming next to AIPATH.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Admin Mobile App", icon: "📱", status: "Coming Soon" },
                            { title: "AI Assistant", icon: "🧠", status: "In Development" },
                            { title: "Face ID", icon: "📸", status: "Planned" },
                            { title: "Expense Mgmt", icon: "💳", status: "Planned" }
                        ].map((item, i) => (
                            <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-indigo-500">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-gray-300">{item.status}</span>
                                </div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join the workforce revolution today. No credit card required.
                    </p>
                    <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Get Started Now
                    </button>
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
