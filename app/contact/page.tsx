import Image from "next/image";

export default function ContactPage() {
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
                        <a href="/about" className="hover:text-blue-700 transition-colors">About Us</a>
                        <a href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">Contact Us</a>
                    </div>

                    <div className="hidden md:block">
                        {/* No redirect button as requested */}
                    </div>
                </div>
            </nav>

            <div className="relative z-10 pt-48 pb-20">
                {/* --- Hero Section --- */}
                <section className="container mx-auto px-6 max-w-4xl text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                        Get in touch with us.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        Ready to transform your business operations? Let's discuss how AIpath CRM can help you achieve more.
                    </p>
                </section>

                {/* --- Contact Form & Info --- */}
                <section className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full bg-[#0A0B10] border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                                        placeholder="Tell us about your business needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-indigo-500/25"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="glass p-8 rounded-3xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Address</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Khasra No. 562, Mubarakpur, IIM Road<br />
                                                Lucknow - 226013
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Email</h4>
                                            <p className="text-gray-300 text-sm">
                                                <a href="mailto:contact@aipathcrm.com" className="hover:text-indigo-400 transition-colors">
                                                    contact@aipathcrm.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Phone</h4>
                                            <p className="text-gray-300 text-sm">
                                                <a href="tel:+919695974444" className="hover:text-indigo-400 transition-colors">
                                                    +91 9695974444
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                                            <p className="text-gray-300 text-sm">
                                                <a href="https://wa.me/6586958473" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                                    +65 86958473
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-8 rounded-3xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM IST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM IST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
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
                                <li><a href="/contact" className="hover:text-blue-700 transition-colors">Contact</a></li>
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