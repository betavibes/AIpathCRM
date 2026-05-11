import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#05060A] text-gray-100 selection:bg-indigo-500/30 font-sans overflow-hidden">
            {/* --- Global Ambient Background (Very Subtle for clean SaaS look) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-indigo-900/10 blur-[150px] rounded-[100%] object-contain"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
            </div>

            {/* --- Navigation --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
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

            <div className="relative z-10 pt-48 pb-20">
                {/* --- 1. Opening Statement (Hero) --- */}
                <section className="container mx-auto px-6 max-w-4xl text-center mb-32">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                        Meet the team behind AIpath CRM.
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        AIpath CRM is led by founders who combine product strategy, CRM and ERP expertise, and AI infrastructure leadership to build a premium business operating system.
                    </p>
                </section>

                {/* --- 2. Leadership Section (Main Focus) --- */}
                <section className="container mx-auto px-6 max-w-6xl mb-40">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Leadership</h2>
                        <div className="h-px w-full bg-gradient-to-r from-white/30 to-transparent mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                        <div className="group">
                            <div className="aspect-[4/5] rounded-2xl bg-[#0A0B10] border border-white/20 mb-6 overflow-hidden relative flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B10]/50 z-10"></div>
                                <svg className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">Aadesh Gupta</h3>
                            <h4 className="text-indigo-300 font-medium text-sm tracking-wide mb-4">Co-founder & Director – Sales, Partnerships & Growth</h4>
                            <p className="text-gray-200 font-light leading-relaxed text-base">
                                Driving business expansion, strategic partnerships, and customer success.
                            </p>
                        </div>

                        <div className="group">
                            <div className="aspect-[4/5] rounded-2xl bg-[#0A0B10] border border-white/20 mb-6 overflow-hidden relative flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B10]/50 z-10"></div>
                                <svg className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">Anurag Chaurasia</h3>
                            <h4 className="text-cyan-300 font-medium text-sm tracking-wide mb-4">Co-founder & Director – Technology, AI & Infrastructure</h4>
                            <p className="text-gray-200 font-light leading-relaxed text-base">
                                Spearheading AI systems, platform engineering, and cloud infrastructure.
                            </p>
                        </div>

                        <div className="group">
                            <div className="aspect-[4/5] rounded-2xl bg-[#0A0B10] border border-white/20 mb-6 overflow-hidden relative flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B10]/50 z-10"></div>
                                <svg className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">Anuj Kumar Singh</h3>
                            <h4 className="text-purple-300 font-medium text-sm tracking-wide mb-4">Co-founder & Director – CRM, ERP & Product Strategy</h4>
                            <p className="text-gray-200 font-light leading-relaxed text-base">
                                Leading product vision, CRM/ERP architecture, and scalable SaaS innovation.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 max-w-6xl mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                        <div className="relative">
                            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent rounded-full hidden md:block"></div>
                            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Our Vision</h2>
                            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-6">
                                To redefine how businesses operate through intelligent, unified systems powered by AI.
                            </p>
                            <p className="text-base text-blue-200 leading-relaxed">
                                We are building a future where business teams run sales, finance, operations, and communication from one intelligent platform.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full hidden md:block"></div>
                            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Our Mission</h2>
                            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-6">
                                To simplify and automate business processes with scalable CRM and ERP solutions built for the future.
                            </p>
                            <p className="text-base text-blue-200 leading-relaxed">
                                We deliver premium AI-powered workflows, seamless communication, and easy scalability for teams that want more than just another business app.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="border-t border-white/10 bg-[#05060A] relative z-10 pt-20 pb-12">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
                        <div className="md:col-span-5">
                            <Image
                                src="/AIpath CRM LOGO.png"
                                alt="AIpath CRM Logo"
                                width={160}
                                height={45}
                                className="h-10 w-auto object-contain mb-6"
                            />
                            <p className="text-gray-400 text-base leading-relaxed max-w-sm font-light">
                                Empowering businesses with intelligent workforce solutions. Built for the future of work.
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="text-white font-medium mb-6 tracking-wide">Product</h4>
                            <ul className="space-y-4 text-blue-900 font-light text-sm">
                                <li><a href="/features" className="hover:text-blue-700 transition-colors">Features</a></li>
                                <li><a href="/pricing" className="hover:text-blue-700 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">API</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="text-white font-medium mb-6 tracking-wide">Company</h4>
                            <ul className="space-y-4 text-blue-900 font-light text-sm">
                                <li><a href="/about" className="hover:text-blue-700 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-700 transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-3">
                            <h4 className="text-white font-medium mb-6 tracking-wide">Stay Updated</h4>
                            <div className="flex flex-col gap-3">
                                <input type="email" placeholder="Enter your email" className="bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors w-full" />
                                <button className="bg-white text-[#05060A] font-semibold text-sm px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors w-full">
                                    Subscribe
                                </button>
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
