import Image from "next/image";

export default function WhyAipathPage() {
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
                        <a href="/why-aipath" className="hover:text-blue-700 transition-colors text-blue-700">Why AIpath CRM?</a>
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
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-20 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Why Choose <br />
                        <span className="text-gradient">AIPATH CRM?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        AIPATH CRM is built with one purpose — to simplify your business operations.
                    </p>
                </div>
            </section>

            {/* --- Why AIpath CRM Section --- */}
            <section className="py-24 relative bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Point 1 */}
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors text-center group border border-white/5 hover:border-white/10">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Lowest Cost, Maximum Value</h3>
                            <p className="text-gray-400">All essential staff management features at the most affordable price.</p>
                        </div>

                        {/* Point 2 */}
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors text-center group border border-white/5 hover:border-white/10">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Simple & User-Friendly</h3>
                            <p className="text-gray-400">Anyone can use it. No complicated setup or learning curve.</p>
                        </div>

                        {/* Point 3 */}
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors text-center group border border-white/5 hover:border-white/10">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold mb-3 text-white">For Every Business Category</h3>
                            <p className="text-gray-400">Retail, service, field teams, restaurants, agencies — we support them all.</p>
                        </div>

                        {/* Point 4 */}
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors text-center group border border-white/5 hover:border-white/10">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold mb-3 text-white">24×7 Dedicated Support</h3>
                            <p className="text-gray-400">Get assistance anytime. We’re always one message away.</p>
                        </div>

                        {/* Point 5 */}
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors text-center group border border-white/5 hover:border-white/10">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Complete Staff Training</h3>
                            <p className="text-gray-400">We provide step-by-step training for your entire team to ensure smooth usage.</p>
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
