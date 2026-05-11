import Image from "next/image";

export default function PricingPage() {
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
                        <a href="/pricing" className="hover:text-white transition-colors text-white">Pricing</a>
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
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-300 mb-6">Premium SaaS pricing for modern operations</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                        Intelligent pricing for <span className="text-gradient">growing businesses.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Choose a plan that scales with your team, delivers enterprise-grade features, and unlocks AI-powered operations.
                    </p>
                </div>
            </section>

            {/* --- Pricing Plans --- */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

                        {/* Growth Plan */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                            <div className="mb-4">
                                <div className="text-3xl mb-2">??</div>
                                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                                <p className="text-sm text-gray-400">For smaller teams starting to automate staff operations.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">?199</span>
                                <span className="text-gray-400">/user/month</span>
                                <p className="text-xs text-green-400 mt-1">or ?1,999/user/year (save 20%)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-blue-900 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Staff Attendance (Selfie)</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Geo Tracking & Fencing</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Leave Management</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Task Assignment</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Payroll Calculation</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Staff Mobile App</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Admin Web Dashboard</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Customer Details & Notes</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-400">?</span> Unlimited Support</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                                Start Growth
                            </button>
                        </div>

                        {/* Scale Plan */}
                        <div className="glass-premium p-8 rounded-3xl border-2 border-indigo-500 relative transform md:-translate-y-4 flex flex-col">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Most Popular
                            </div>
                            <div className="mb-4">
                                <div className="text-3xl mb-2">??</div>
                                <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                                <p className="text-sm text-blue-900">The best choice for teams focused on growth and efficiency.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">?499</span>
                                <span className="text-blue-900">/user/month</span>
                                <p className="text-xs text-green-300 mt-1">or ?4,999/user/year</p>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-200 mb-8 flex-grow">
                                <li className="font-semibold text-indigo-300">Everything in Growth, plus:</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Multi-Branch Support</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Orders & Billing</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Basic Inventory</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Daily Reports & Analytics</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Team Performance Dashboard</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Attendance Location History</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Export data (Excel / PDF)</li>
                                <li className="flex items-start gap-2"><span className="text-green-400">?</span> Priority Support</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-500/25">
                                Start Scale
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                            <div className="mb-4">
                                <div className="text-3xl mb-2">??</div>
                                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                                <p className="text-sm text-gray-400">For ambitious businesses that need full automation and customization.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">Custom</span>
                                <p className="text-xs text-gray-500 mt-1">(Module-based pricing)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-blue-900 mb-8 flex-grow">
                                <li className="font-semibold text-purple-400">Everything in Scale, plus:</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> Sales Module</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> Marketing Automation</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> HRMS (Hiring to Appraisal)</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> Accounting & Finance</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> E-Commerce</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> AI Business Assistant</li>
                                <li className="flex items-start gap-2"><span className="text-purple-400">?</span> Dedicated Account Manager</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                                Contact Sales
                            </button>
                        </div>

                        {/* Founders Plan */}
                        <div className="glass p-8 rounded-3xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-1 text-xs font-bold transform rotate-45 translate-x-4 translate-y-4">
                                LIMITED
                            </div>
                            <div className="mb-4">
                                <div className="text-3xl mb-2">??</div>
                                <h3 className="text-xl font-bold text-white mb-2">Founders Plan</h3>
                                <p className="text-sm text-gray-400">Limited launch package for early customers.</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">?9,999</span>
                                <span className="text-gray-400"> One-Time</span>
                                <p className="text-xs text-orange-400 mt-1">(up to 5 staff)</p>
                            </div>
                            <ul className="space-y-3 text-sm text-blue-900 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><span className="text-orange-400">?</span> All Staff Management Features</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">?</span> Free Updates for 1 Year</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">?</span> Lifetime Access for 5 Employees</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400">?</span> Premium Support for 6 Months</li>
                                <li className="mt-4 text-xs text-gray-500 italic">Great for small shops, salons, freelancers, start-ups.</li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold transition-colors">
                                Book Founders Plan
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Visual Pricing Calculator --- */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">?? Calculate Your Savings</h2>
                        <p className="text-lg text-gray-400">
                            See how much you can save compared to traditional HR software
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="glass-premium p-8 rounded-3xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Traditional Cost */}
                                <div className="text-center">
                                    <div className="text-3xl mb-4">??</div>
                                    <h3 className="text-xl font-bold mb-2">Traditional HR Software</h3>
                                    <div className="text-4xl font-bold text-red-400 mb-2">?15,000+</div>
                                    <p className="text-sm text-gray-400">per month for 10 users</p>
                                    <ul className="text-xs text-gray-500 mt-4 space-y-1">
                                        <li>� Multiple tools needed</li>
                                        <li>� Complex setup</li>
                                        <li>� Limited mobile access</li>
                                        <li>� High maintenance</li>
                                    </ul>
                                </div>

                                {/* AIpath Cost */}
                                <div className="text-center border-x border-white/10">
                                    <div className="text-3xl mb-4">??</div>
                                    <h3 className="text-xl font-bold mb-2 text-indigo-400">AIpath CRM</h3>
                                    <div className="text-4xl font-bold text-green-400 mb-2">?4,990</div>
                                    <p className="text-sm text-gray-400">per month for 10 users</p>
                                    <ul className="text-xs text-green-400 mt-4 space-y-1">
                                        <li>� All-in-one platform</li>
                                        <li>� Instant setup</li>
                                        <li>� Full mobile experience</li>
                                        <li>� AI-powered automation</li>
                                    </ul>
                                </div>

                                {/* Savings */}
                                <div className="text-center">
                                    <div className="text-3xl mb-4">??</div>
                                    <h3 className="text-xl font-bold mb-2 text-green-400">Your Savings</h3>
                                    <div className="text-4xl font-bold text-green-400 mb-2">?10,010</div>
                                    <p className="text-sm text-gray-400">per month</p>
                                    <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                                        <p className="text-sm font-bold text-green-400">67% Cost Reduction</p>
                                        <p className="text-xs text-gray-400">ROI in 3 months</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Add-ons & Comparison --- */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Add-ons */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">?? Premium Add-ons</h3>
                            <div className="glass p-6 rounded-2xl space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-blue-900">Additional Staff</span>
                                    <span className="font-bold text-white">?50<span className="text-xs font-normal text-gray-500">/month per user</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-blue-900">Additional Branch</span>
                                    <span className="font-bold text-white">?499<span className="text-xs font-normal text-gray-500">/month</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-blue-900">White Label Branding</span>
                                    <span className="font-bold text-white">?999<span className="text-xs font-normal text-gray-500">/month</span></span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                    <span className="text-blue-900">Custom Workflow Setup</span>
                                    <span className="font-bold text-white">?2,999<span className="text-xs font-normal text-gray-500"> One-time</span></span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-900">Data Migration</span>
                                    <span className="font-bold text-white">?1,999<span className="text-xs font-normal text-gray-500"> One-time</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Comparison */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">?? Feature Comparison</h3>
                            <div className="glass p-6 rounded-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">?</span>
                                    <span className="text-blue-900">Staff Attendance & Tracking � <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">?</span>
                                    <span className="text-blue-900">Payroll � <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">?</span>
                                    <span className="text-blue-900">Leave Management � <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">?</span>
                                    <span className="text-blue-900">Task Management � <span className="text-white font-semibold">All Plans</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-yellow-400">?</span>
                                    <span className="text-blue-900">Reports & Analytics � <span className="text-white font-semibold">Scale & Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-yellow-400">?</span>
                                    <span className="text-blue-900">Inventory + Billing � <span className="text-white font-semibold">Scale & Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">?</span>
                                    <span className="text-blue-900">Sales, Marketing, Accounts � <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">?</span>
                                    <span className="text-blue-900">AI Automation � <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400">?</span>
                                    <span className="text-blue-900">Admin Mobile App � <span className="text-white font-semibold">Enterprise</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Value Proposition --- */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">?? Why our pricing is unbeatable?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">??</div>
                            <h3 className="text-xl font-bold mb-2">Lowest Cost</h3>
                            <p className="text-gray-400">Lowest cost CRM for staff & business automation in India.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">???</div>
                            <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
                            <p className="text-gray-400">Pay only for what you need. Simple, predictable billing.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">????</div>
                            <h3 className="text-xl font-bold mb-2">Made for India</h3>
                            <p className="text-gray-400">Designed specifically for Indian business needs and workflows.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">??</div>
                            <h3 className="text-xl font-bold mb-2">24�7 Support</h3>
                            <p className="text-gray-400">Customer support is included with every plan.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">??</div>
                            <h3 className="text-xl font-bold mb-2">Free Training</h3>
                            <p className="text-gray-400">We train your staff for free so you don\'t have to.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl border border-white/10">
                            <div className="text-3xl mb-4">?</div>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Free � No Credit Card Needed</h2>
                        <p className="text-xl text-blue-900 mb-8">
                            Join thousands of businesses already saving time and money with AIpath CRM.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://www.aidiginext.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1">
                                Start 7-Day Free Trial
                            </a>
                            <a href="https://www.aidiginext.com/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all">
                                Schedule Live Demo
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
