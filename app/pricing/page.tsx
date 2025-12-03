import Image from "next/image";

export default function PricingPage() {
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
                        <a href="/pricing" className="hover:text-blue-700 transition-colors text-blue-700">Pricing</a>
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
                        Simple. Transparent. <br />
                        <span className="text-gradient">Lowest-Cost CRM in India.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Premium features at a price every business can afford.
                    </p>
                </div>
            </section>

            {/* --- Pricing Plans --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

                        {/* Starter Plan */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2">⭐ Starter Plan</h3>
                                <p className="text-sm text-gray-400">Perfect for small teams & daily staff operations.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">₹199</span>
                                <span className="text-gray-400">/user/month</span>
                                <p className="text-xs text-green-400 mt-1">or ₹1,999/user/year (save 20%)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Staff Attendance (Selfie)</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Geo Tracking & Fencing</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Leave Management</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Task Assignment</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Payroll Calculation</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Staff Mobile App</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Admin Web Dashboard</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Customer Details & Notes</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">✔</span> Unlimited Support</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                                Choose Starter
                            </button>
                        </div>

                        {/* Business Plan */}
                        <div className="glass-premium p-8 rounded-3xl border-2 border-indigo-500 relative transform md:-translate-y-4 flex flex-col">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Recommended
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2">⭐⭐ Business Plan</h3>
                                <p className="text-sm text-gray-300">Complete staff + business operations.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">₹499</span>
                                <span className="text-gray-300">/user/month</span>
                                <p className="text-xs text-green-300 mt-1">or ₹4,999/user/year</p>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-200 mb-8 flex-grow">
                                <li className="font-semibold text-indigo-300">Everything in Starter, plus:</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Multi-Branch Support</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Orders & Billing</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Basic Inventory</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Daily Reports & Analytics</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Team Performance Dashboard</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Attendance Location History</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Export data (Excel / PDF)</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">✔</span> Priority Support</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/25">
                                Choose Business
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2">⭐⭐⭐ Enterprise</h3>
                                <p className="text-sm text-gray-400">For growing businesses who want full automation.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">Custom</span>
                                <p className="text-xs text-gray-500 mt-1">(Depends on modules selected)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-grow">
                                <li className="font-semibold text-purple-400">Everything in Business, plus:</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> Sales Module</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> Marketing Automation</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> HRMS (Hiring to Appraisal)</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> Accounting & Finance</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> E-Commerce</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> AI Business Assistant</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">✔</span> Dedicated Account Manager</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                                Contact Sales
                            </button>
                        </div>

                        {/* Lifetime Deal */}
                        <div className="glass p-8 rounded-3xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-1 text-xs font-bold transform rotate-45 translate-x-4 translate-y-4">
                                OFFER
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-2">🔥 Lifetime Deal</h3>
                                <p className="text-sm text-gray-400">Limited Time for Early Customers Only.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">₹9,999</span>
                                <span className="text-gray-400"> One-Time</span>
                                <p className="text-xs text-orange-400 mt-1">(up to 5 staff)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><span className="text-orange-400">✔</span> All Staff Management Features</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">✔</span> Free Updates for 1 Year</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">✔</span> Lifetime Access for 5 Employees</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">✔</span> Premium Support for 6 Months</li>
                                <li className="mt-4 text-xs text-gray-500 italic">Great for small shops, salons, freelancers, start-ups.</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold transition-colors">
                                Grab Lifetime Deal
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Add-ons & Comparison --- */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Add-ons */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">🧾 Pricing Add-ons</h3>
                            <div className="glass p-6 rounded-2xl space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-gray-300">Additional Staff</span>
                                    <span className="font-bold text-white">₹50<span className="text-xs font-normal text-gray-500">/month per user</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-gray-300">Additional Branch</span>
                                    <span className="font-bold text-white">₹499<span className="text-xs font-normal text-gray-500">/month</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-gray-300">White Label Branding</span>
                                    <span className="font-bold text-white">₹999<span className="text-xs font-normal text-gray-500">/month</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-gray-300">Custom Workflow Setup</span>
                                    <span className="font-bold text-white">₹2,999<span className="text-xs font-normal text-gray-500"> One-time</span></span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Data Migration</span>
                                    <span className="font-bold text-white">₹1,999<span className="text-xs font-normal text-gray-500"> One-time</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Comparison */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">📊 Feature Comparison</h3>
                            <div className="glass p-6 rounded-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <span className="text-gray-300">Staff Attendance & Tracking – <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <span className="text-gray-300">Payroll – <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <span className="text-gray-300">Leave Management – <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✔</span>
                                    <span className="text-gray-300">Task Management – <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-yellow-400">✔</span>
                                    <span className="text-gray-300">Reports & Analytics – <span className="text-white font-semibold">Business & Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-yellow-400">✔</span>
                                    <span className="text-gray-300">Inventory + Billing – <span className="text-white font-semibold">Business & Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">✔</span>
                                    <span className="text-gray-300">Sales, Marketing, Accounts – <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">✔</span>
                                    <span className="text-gray-300">AI Automation – <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">✔</span>
                                    <span className="text-gray-300">Admin Mobile App – <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Value Proposition --- */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">💡 Why our pricing is unbeatable?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-6">
                            <div className="text-3xl mb-4">💰</div>
                            <h3 className="text-xl font-bold mb-2">Lowest Cost</h3>
                            <p className="text-gray-400">Lowest cost CRM for staff & business automation in India.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
                            <p className="text-gray-400">Pay only for what you need. Simple, predictable billing.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">🇮🇳</div>
                            <h3 className="text-xl font-bold mb-2">Made for India</h3>
                            <p className="text-gray-400">Designed specifically for Indian business needs and workflows.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">📞</div>
                            <h3 className="text-xl font-bold mb-2">24×7 Support</h3>
                            <p className="text-gray-400">Customer support is included with every plan.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">🎓</div>
                            <h3 className="text-xl font-bold mb-2">Free Training</h3>
                            <p className="text-gray-400">We train your staff for free so you don't have to.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
                            <p className="text-gray-400">Get started in minutes. No technical knowledge required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-block p-10 rounded-3xl glass-premium max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Free – No Credit Card Needed</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
                                Start 7-Day Free Trial
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all">
                                Schedule Live Demo
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
                                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
