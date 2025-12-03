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
                        Future <br />
                        <span className="text-gradient">Roadmap</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        AIPATH CRM is evolving into a complete One-Stop Business Operating System designed for all types of businesses.
                    </p>
                </div>
            </section>

            {/* --- Future Roadmap Section --- */}
            <section className="py-24 bg-gradient-to-b from-transparent to-indigo-900/10">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Our Vision</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Building the All-in-One AI-First Business Suite</h2>
                        <p className="text-xl font-semibold text-gradient-blue">
                            One platform. All business operations. Powered by AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {/* Module 1: Sales Management */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-blue-500">
                            <div className="text-3xl mb-4">📈</div>
                            <h3 className="text-xl font-bold mb-2">Sales Management Module (Upcoming)</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Lead capture from WhatsApp, website forms, social ads</li>
                                <li>• Lead scoring with AI</li>
                                <li>• Sales pipeline tracking (Kanban style)</li>
                                <li>• Follow-up reminders & auto-calling integrations</li>
                                <li>• Deal forecasting</li>
                                <li>• Proposal & quotation generator</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Zoho CRM, Salesforce)</p>
                        </div>

                        {/* Module 2: Marketing Automation */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-orange-500">
                            <div className="text-3xl mb-4">📣</div>
                            <h3 className="text-xl font-bold mb-2">Marketing Automation Module</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Email campaigns</li>
                                <li>• WhatsApp broadcast automation</li>
                                <li>• Drip marketing sequences</li>
                                <li>• Campaign tracking & analytics</li>
                                <li>• AI-generated marketing content</li>
                                <li>• Customer segmentation</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: HubSpot, Zoho Campaigns)</p>
                        </div>

                        {/* Module 3: Order & Billing */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-green-500">
                            <div className="text-3xl mb-4">🛒</div>
                            <h3 className="text-xl font-bold mb-2">Order & Billing Management</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Order creation & tracking</li>
                                <li>• Auto-generate invoices</li>
                                <li>• GST-friendly billing</li>
                                <li>• Payment reminders & online payment link</li>
                                <li>• Delivery tracking (with staff location sync)</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Dial ERP, Vyapar)</p>
                        </div>

                        {/* Module 4: Inventory */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-yellow-500">
                            <div className="text-3xl mb-4">📦</div>
                            <h3 className="text-xl font-bold mb-2">Inventory & Stock Control</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Real-time stock levels</li>
                                <li>• Purchase orders</li>
                                <li>• Supplier management</li>
                                <li>• Low-stock alerts</li>
                                <li>• Barcode/QR code support</li>
                                <li>• Multi-warehouse tracking</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Zoho Inventory, ERPNext)</p>
                        </div>

                        {/* Module 5: HRMS */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-purple-500">
                            <div className="text-3xl mb-4">👥</div>
                            <h3 className="text-xl font-bold mb-2">HRMS (Human Resource Management Suite)</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Recruitment & Job posting</li>
                                <li>• Candidate tracking</li>
                                <li>• Performance reviews</li>
                                <li>• KPI dashboards</li>
                                <li>• Appraisal cycles</li>
                                <li>• Policy documents & digital signatures</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Zoho People, Darwinbox)</p>
                        </div>

                        {/* Module 6: Accounting */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-teal-500">
                            <div className="text-3xl mb-4">💰</div>
                            <h3 className="text-xl font-bold mb-2">Accounting & Finance</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Expense management</li>
                                <li>• Vendor payments</li>
                                <li>• Profit/Loss & cashflow</li>
                                <li>• Bank reconciliation</li>
                                <li>• Tax summary reports</li>
                                <li>• Automated financial insights</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Zoho Books, Tally Prime)</p>
                        </div>

                        {/* Module 7: E-Commerce */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-pink-500">
                            <div className="text-3xl mb-4">🛍️</div>
                            <h3 className="text-xl font-bold mb-2">E-Commerce Module</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Online store builder</li>
                                <li>• Product catalog sync with inventory</li>
                                <li>• Payment gateway integration</li>
                                <li>• Customer accounts & order history</li>
                                <li>• Delivery assignment to staff</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Shopify + Zoho Commerce)</p>
                        </div>

                        {/* Module 8: Affiliate */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-indigo-500">
                            <div className="text-3xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-2">Affiliate Networking System</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Affiliate user onboarding</li>
                                <li>• Referral tracking</li>
                                <li>• Commission payout system</li>
                                <li>• Marketing toolkit for affiliates</li>
                            </ul>
                        </div>

                        {/* Module 9: Digital Marketing */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-red-500">
                            <div className="text-3xl mb-4">📢</div>
                            <h3 className="text-xl font-bold mb-2">Digital Marketing Automation</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Auto-post on social media</li>
                                <li>• AI content generator</li>
                                <li>• Schedule posts across multiple channels</li>
                                <li>• Performance analytics</li>
                            </ul>
                        </div>

                        {/* Module 10: AI Assistant */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-violet-500 col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="text-3xl mb-4">🤖</div>
                            <h3 className="text-xl font-bold mb-2">AI Assistant for Business Owners</h3>
                            <p className="text-gray-400 text-sm mb-2">Your 24/7 AI partner for complete business control. Ask anything like:</p>
                            <ul className="text-gray-400 text-sm space-y-1 mb-4 italic bg-white/5 p-3 rounded-lg">
                                <li>“Show today’s attendance.”</li>
                                <li>“Create salary for November.”</li>
                                <li>“What are this week’s pending leads?”</li>
                                <li>“Generate invoice for Customer A.”</li>
                            </ul>
                            <p className="text-gray-400 text-sm">The AI Assistant will respond, plan, and automate tasks.</p>
                        </div>

                        {/* Module 11: AI Trainer */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-cyan-500">
                            <div className="text-3xl mb-4">📚</div>
                            <h3 className="text-xl font-bold mb-2">AI Trainer for Staff</h3>
                            <p className="text-gray-400 text-sm mb-2">Automated training modules for:</p>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• SOPs & Company processes</li>
                                <li>• Safety guidelines</li>
                                <li>• Customer handling</li>
                                <li>• Industry-specific knowledge</li>
                            </ul>
                            <p className="text-gray-400 text-sm">This ensures fast onboarding and consistent performance.</p>
                        </div>

                        {/* Module 12: Full Automation */}
                        <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t-4 border-t-emerald-500">
                            <div className="text-3xl mb-4">⚙️</div>
                            <h3 className="text-xl font-bold mb-2">Full Business Automation</h3>
                            <ul className="text-gray-400 text-sm space-y-2 mb-4">
                                <li>• Auto-create tasks based on triggers</li>
                                <li>• Auto-generate reports</li>
                                <li>• Payroll automation</li>
                                <li>• AI-based predictions</li>
                                <li>• Smart alerts for business risks</li>
                                <li>• Workflow builder (drag & drop)</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic">(Inspired by: Zoho Flow, Make.com)</p>
                        </div>
                    </div>

                    {/* --- Our Goal Section --- */}
                    <div className="mt-20 text-center max-w-5xl mx-auto">
                        <div className="inline-block p-10 rounded-3xl glass-premium border border-white/10">
                            <h3 className="text-3xl font-bold mb-6">🌟 Our Goal</h3>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                To build AIPATH CRM as the most affordable, AI-first, all-in-one platform where every module works together smoothly — replacing:
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ Zoho CRM</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ Dial ERP</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ Tally</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ ClickUp</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ HubSpot</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ Shopify</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ HRMS tools</span>
                                <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-medium">❌ Payroll apps</span>
                            </div>

                            <p className="text-2xl font-bold text-white">
                                You get everything in one platform, with the <span className="text-gradient-blue">simplest UI and the lowest cost</span> in the market.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <div className="inline-block p-8 rounded-3xl glass-premium">
                            <h3 className="text-2xl font-bold mb-4">🔔 Stay Tuned</h3>
                            <p className="text-gray-300 mb-6">More updates, feature drops, and AI automation tools are on the way.</p>
                            <p className="text-xl font-bold text-gradient-blue">AIPATH CRM – Digitize. Automate. Grow.</p>
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
