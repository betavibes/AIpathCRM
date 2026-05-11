import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
                <div className="bg-gray-200/90 backdrop-blur-md border border-gray-300 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/AIpath CRM LOGO.png"
                            alt="AIpath CRM Logo"
                            width={220}
                            height={60}
                            className="h-14 w-auto object-contain logo-premium drop-shadow-sm"
                            priority
                            unoptimized={true}
                        />
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-blue-900">
                        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
                        <a href="/features" className="hover:text-blue-700 transition-colors">Features</a>
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors">Why AIpath CRM?</a>
                        <a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/roadmap" className="hover:text-blue-700 transition-colors">Roadmap</a>
                        <a href="/about" className="hover:text-blue-700 transition-colors">About</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.aidiginext.com/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-violet-700 via-slate-900 to-sky-700 opacity-30 blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-300 mb-6">AIpath CRM — CRM. ERP. AI. Unified.</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                        AIpath CRM — <span className="text-gradient">CRM. ERP. AI. Unified.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        An AI-First Business Operating System designed to automate operations, streamline growth, and run your entire business from one intelligent platform.
                    </p>
                    <p className="text-sm md:text-base text-blue-200 max-w-2xl mx-auto mb-10">
                        From sales to service, finance to communication—AIpath brings everything together across web, mobile, and messaging platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="https://www.aidiginext.com/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
                        >
                            Get Started
                        </a>
                        <a
                            href="https://www.aidiginext.com/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                        >
                            Book a Demo
                        </a>
                    </div>

                    <div className="relative mx-auto max-w-5xl rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f172a] shadow-2xl shadow-indigo-900/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-sky-500/10 blur-2xl"></div>
                        <Image
                            src="/dashboard-mockup.png"
                            alt="AIpath CRM Dashboard Interface"
                            width={1200}
                            height={675}
                            className="relative w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Built as an AI-First Business Operating System</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            AIpath CRM is more than just a CRM or ERP—it’s a unified platform where artificial intelligence powers every aspect of your business. Automate repetitive tasks, reduce manual work, and gain real-time insights to make faster, smarter decisions.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-[#0b1224] rounded-3xl border border-white/10 p-10 shadow-xl shadow-indigo-900/10">
                        <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                            Less manual work. More intelligent automation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass p-5 rounded-3xl">
                                <h3 className="font-semibold mb-2">Automate workflows</h3>
                                <p className="text-gray-400 text-sm">Turn repetitive tasks into AI-driven workflows across sales, service, finance, and operations.</p>
                            </div>
                            <div className="glass p-5 rounded-3xl">
                                <h3 className="font-semibold mb-2">Simplify operations</h3>
                                <p className="text-gray-400 text-sm">Use one intelligent system instead of multiple point tools for better control and faster execution.</p>
                            </div>
                            <div className="glass p-5 rounded-3xl">
                                <h3 className="font-semibold mb-2">Act on insight</h3>
                                <p className="text-gray-400 text-sm">Access real-time visibility and predictive analytics to make decisions with confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">One Platform. Multiple Interfaces.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Access and manage your business from anywhere, on any device.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-xl font-semibold mb-2">Web Platform</h3>
                            <p className="text-gray-400 text-sm">Full control and analytics from a powerful browser dashboard.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                            <p className="text-gray-400 text-sm">Android and iOS apps for every role, from field staff to leadership.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-semibold mb-2">WhatsApp Integration</h3>
                            <p className="text-gray-400 text-sm">Sales and support workflows inside the world’s most used messaging app.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">✈️</div>
                            <h3 className="text-xl font-semibold mb-2">Telegram Integration</h3>
                            <p className="text-gray-400 text-sm">Instant business communication and updates with Telegram integration.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
                            <p className="text-gray-400 text-sm">24/7 automated engagement for leads, customers, and internal support.</p>
                        </div>
                        <div className="glass-premium p-8 rounded-3xl border border-white/10">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Unified Ecosystem</h3>
                            <p className="text-gray-400 text-sm">Bring every channel and workflow together in one intelligent platform.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Business. Anywhere.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether you're closing deals on WhatsApp, tracking operations from your dashboard, or managing teams via mobile—AIpath CRM ensures seamless connectivity across all touchpoints.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Connect every channel</h3>
                            <p className="text-gray-400 text-sm">Work from your phone, laptop, or tablet without losing control, visibility, or efficiency.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Operate on the go</h3>
                            <p className="text-gray-400 text-sm">Manage teams, approve work, and respond to customers from anywhere.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Stay in control</h3>
                            <p className="text-gray-400 text-sm">Keep real-time visibility into every process no matter where your business moves.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Designed for Modern Businesses</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            AIpath CRM is built to support fast-growing teams, distributed workforces, and businesses who need a single intelligent system.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">AI-driven automation</h3>
                            <p className="text-gray-400 text-sm">Automate workflows across sales, service, finance, and operations.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">CRM + ERP in one</h3>
                            <p className="text-gray-400 text-sm">One platform for customer, operations, and financial workflows.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Real-time visibility</h3>
                            <p className="text-gray-400 text-sm">Live reporting and dashboards for leadership and execution teams.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Built for scale</h3>
                            <p className="text-gray-400 text-sm">Designed to grow from startups to enterprises with confidence.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Seamless communication</h3>
                            <p className="text-gray-400 text-sm">Keep teams aligned across web, mobile, and messaging platforms.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3">Modern business engine</h3>
                            <p className="text-gray-400 text-sm">A premium SaaS experience built for modern operating teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center bg-[#0b1224] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-indigo-900/10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h2>
                        <p className="text-gray-300 text-lg mb-6">
                            To redefine how businesses operate through intelligent, unified systems powered by AI.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="glass p-6 rounded-3xl border border-white/10">
                                <h3 className="font-semibold mb-3">Vision</h3>
                                <p className="text-gray-400 text-sm">To redefine how businesses operate through intelligent, unified systems powered by AI.</p>
                            </div>
                            <div className="glass p-6 rounded-3xl border border-white/10">
                                <h3 className="font-semibold mb-3">Mission</h3>
                                <p className="text-gray-400 text-sm">To simplify and automate business processes with scalable CRM and ERP solutions built for the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#0b1224] p-12 shadow-xl shadow-indigo-900/10">
                        <h2 className="text-4xl md:text-5xl font-bold">Move your business forward with AIpath CRM.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://www.aidiginext.com/contact" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all">Get Started</a>
                            <a href="https://www.aidiginext.com/contact" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all">Book a Demo</a>
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
                                    src="/AIpath CRM LOGO.png"
                                    alt="AIpath CRM Logo"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                    unoptimized={true}
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
                            <div className="flex flex-col gap-3">
                                <input type="email" placeholder="Enter your email" className="bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors w-full" />
                                <button className="bg-white text-[#05060A] font-semibold text-sm px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors w-full">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 font-light text-sm">
                        <p>© 2026 AIpath CRM. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-blue-700 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-blue-700 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
