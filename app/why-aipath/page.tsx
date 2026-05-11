import Image from "next/image";

export default function WhyAipathPage() {
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

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
                        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/features" className="hover:text-blue-700 transition-colors">Features</a>
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/roadmap" className="hover:text-blue-700 transition-colors">Roadmap</a>
                        <a href="/about" className="hover:text-blue-700 transition-colors">About</a>
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

            <section className="relative pt-40 pb-20 md:pt-52 md:pb-20 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-indigo-700 via-slate-900 to-sky-700 opacity-30 blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-300 mb-6">What makes AIpath CRM different</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                        Why businesses choose <span className="text-gradient">AIpath CRM.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        A premium AI-first platform built to unify CRM, ERP, and automation workflows in one intelligent ecosystem.
                    </p>
                </div>
            </section>

            <section className="py-24 relative bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">All-in-one platform</h3>
                            <p className="text-gray-400">CRM, ERP, staff management, and AI workflows all in one modern, unified SaaS experience.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">🤖</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">AI-powered automation</h3>
                            <p className="text-gray-400">Smart task routing, predictive insights, and automated follow-ups so your team can move faster.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Work from anywhere</h3>
                            <p className="text-gray-400">Web, mobile, WhatsApp, and Telegram access for distributed teams and remote workflows.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Fast onboarding</h3>
                            <p className="text-gray-400">Designed for quick setup and easy adoption with guided training and support.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">📈</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Built to scale</h3>
                            <p className="text-gray-400">A SaaS platform for growing businesses that need reliable operations across teams and locations.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors text-center">
                            <div className="text-5xl mb-4">🔐</div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Secure & dependable</h3>
                            <p className="text-gray-400">Enterprise-grade controls, secure data handling, and a platform built for trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4">Unify your tech stack</h3>
                            <p className="text-gray-400">Replace disconnected point solutions with one powerful platform for people, processes, and performance.</p>
                        </div>
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4">AI-ready workflows</h3>
                            <p className="text-gray-400">Use AI to automate follow-up, analytics, staff productivity, and customer engagement.</p>
                        </div>
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-4">Customer-first support</h3>
                            <p className="text-gray-400">A white-glove launch experience, guided onboarding, and always-on support for your team.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <p className="text-xl text-gray-300 mb-4">AIpath CRM is built for businesses that need modern tools, real-time control, and intelligent automation.</p>
                    <a
                        href="https://www.aidiginext.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
                    >
                        Talk to Sales
                    </a>
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
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <p>© 2026 AIpath CRM. All rights reserved.</p>
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
