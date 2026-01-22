"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Scale,
    Mic,
    FileText,
    AlertTriangle,
    Shield,
    Upload,
    Home,
    Menu,
    X,
    CheckCircle,
    FileCheck,
    Languages,
    Siren,
    Gavel,
    History,
    Download,
    PenTool,
    Lock,
    ChevronRight,
    Send,
    Loader2,
    File
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Types ---
type TabId = "voice" | "ocr" | "draft" | "panic" | "vault";

interface Message {
    id: string;
    role: "user" | "ai";
    text: string;
    isAudio?: boolean;
}

// --- Main Component ---
export default function NyayaSahayak() {
    const [activeTab, setActiveTab] = useState<TabId>("voice");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // default open on desktop

    // Toggle sidebar on mobile
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Render the active view
    const renderView = () => {
        switch (activeTab) {
            case "voice":
                return <RightsWhisperer />;
            case "ocr":
                return <DocumentDecoder />;
            case "draft":
                return <AutoDraftingEngine />;
            case "panic":
                return <CyberSanjeevani />;
            case "vault":
                return <EvidenceVault />;
            default:
                return <RightsWhisperer />;
        }
    };

    return (
        <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="p-6 border-b border-slate-700 flex items-center gap-3">
                    <div className="bg-indigo-500 p-2 rounded-lg">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Nyaya Sahayak</h1>
                </div>

                <nav className="p-4 space-y-2">
                    <NavItem
                        id="voice"
                        label="Rights Whisperer"
                        icon={Mic}
                        active={activeTab === "voice"}
                        onClick={() => { setActiveTab("voice"); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                    />
                    <NavItem
                        id="ocr"
                        label="Docu Decoder"
                        icon={FileText}
                        active={activeTab === "ocr"}
                        onClick={() => { setActiveTab("ocr"); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                    />
                    <NavItem
                        id="draft"
                        label="Auto-Drafting"
                        icon={PenTool}
                        active={activeTab === "draft"}
                        onClick={() => { setActiveTab("draft"); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                    />
                    <NavItem
                        id="panic"
                        label="Cyber Sanjeevani"
                        icon={Siren}
                        active={activeTab === "panic"}
                        onClick={() => { setActiveTab("panic"); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                    />
                    <NavItem
                        id="vault"
                        label="Evidence Vault"
                        icon={Shield}
                        active={activeTab === "vault"}
                        onClick={() => { setActiveTab("vault"); if (window.innerWidth < 768) setIsSidebarOpen(false); }}
                    />
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">RK</div>
                        <div>
                            <p className="text-sm font-medium">Ravi Kumar</p>
                            <p className="text-xs text-slate-400">Basic Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 bg-white flex items-center px-6 justify-between flex-shrink-0">
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden p-2 hover:bg-slate-100 rounded-md"
                    >
                        <Menu className="w-6 h-6 text-slate-600" />
                    </button>
                    <div className="md:hidden text-lg font-bold text-slate-800 ml-2">Nyaya Sahayak</div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-4">
                        {/* Language Toggle Placeholder */}
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors">
                            <Languages className="w-4 h-4" />
                            <span>English</span>
                        </div>
                    </div>
                </header>

                {/* View Container */}
                <div className="flex-1 overflow-auto p-4 md:p-8 bg-slate-50/50">
                    <div className="max-w-5xl mx-auto h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="h-full"
                            >
                                {renderView()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
}

// --- Sub-Components ---

function NavItem({ id, label, icon: Icon, active, onClick }: { id: TabId; label: string; icon: any; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                active
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            )}
        >
            <Icon className={cn("w-5 h-5", active ? "text-indigo-100" : "text-slate-500")} />
            {label}
        </button>
    );
}

// 1. Rights Whisperer (Voice Chat)
function RightsWhisperer() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isListening, setIsListening] = useState(false);
    const [language, setLanguage] = useState("English");

    const handleMicClick = () => {
        if (isListening) return;
        setIsListening(true);

        // Simulate listening
        setTimeout(() => {
            setIsListening(false);
            const userMsg: Message = {
                id: Date.now().toString(),
                role: "user",
                text: "My landlord is refusing to return my ₹50,000 deposit. What should I do?",
                isAudio: true
            };
            setMessages(prev => [...prev, userMsg]);

            // Simulate AI thinking and response
            setTimeout(() => {
                const aiMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    role: "ai",
                    text: "Under the Rent Control Act, a landlord cannot withhold deposits without valid proof of damage. You can send a legal notice. Shall I draft one for you?"
                };
                setMessages(prev => [...prev, aiMsg]);
            }, 1000);
        }, 2000);
    };

    return (
        <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-indigo-600" />
                    Rights Whisperer
                </h2>
                <div className="flex gap-2 text-xs font-medium">
                    {["English", "Hindi", "Tamil"].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={cn(
                                "px-3 py-1.5 rounded-full transition-colors",
                                language === lang ? "bg-indigo-100 text-indigo-700" : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/30">
                {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Mic className="w-8 h-8 text-slate-300" />
                        </div>
                        <p className="text-sm">Tap the microphone to speak</p>
                    </div>
                )}

                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex w-full",
                            msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div
                            className={cn(
                                "max-w-[80%] p-4 rounded-2xl text-sm shadow-sm",
                                msg.role === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-white border border-slate-200 text-slate-700 rounded-bl-none"
                            )}
                        >
                            {msg.isAudio && (
                                <div className="flex items-center gap-2 mb-2 opacity-80">
                                    <div className="flex gap-1 items-end h-4">
                                        {[1, 2, 3, 2, 4, 2, 1].map((h, i) => (
                                            <div key={i} className="w-1 bg-white/70 rounded-full animate-pulse" style={{ height: `${h * 4}px` }} />
                                        ))}
                                    </div>
                                    <span className="text-xs">Audio Transcribed</span>
                                </div>
                            )}
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-center gap-4">
                <button
                    onClick={handleMicClick}
                    className={cn(
                        "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
                        isListening
                            ? "bg-red-500 shadow-red-500/30 scale-110"
                            : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30"
                    )}
                >
                    {isListening && (
                        <span className="absolute inset-0 rounded-full border-4 border-red-200 animate-ping opacity-75"></span>
                    )}
                    <Mic className={cn("w-6 h-6", isListening ? "text-white animate-pulse" : "text-white")} />
                </button>
                <p className={cn("text-sm font-medium animate-pulse", isListening ? "text-red-500" : "hidden")}>
                    Listening...
                </p>
            </div>
        </div>
    );
}

// 2. Smart Document Decoder (OCR Scanner)
function DocumentDecoder() {
    const [status, setStatus] = useState<"idle" | "uploading" | "analyzing" | "done">("idle");
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        setStatus("uploading");
        setProgress(0);

        // Simulate upload
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus("analyzing");
                    // Simulate analysis
                    setTimeout(() => setStatus("done"), 1500);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Smart Document Decoder</h2>
                    <p className="text-slate-500">Upload legal documents for instant AI analysis and risk detection.</p>
                </div>
            </div>

            {status !== "done" ? (
                <div className="flex-1 bg-white rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-12 text-center hover:border-indigo-400 transition-colors cursor-pointer group" onClick={handleUpload}>
                    {status === "idle" ? (
                        <>
                            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                                <Upload className="w-10 h-10 text-indigo-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-700 mb-2">Click to Upload or Drag & Drop</h3>
                            <p className="text-sm text-slate-400 max-w-xs mx-auto">Support for PDFs, Images of Contracts, Notices, and Agreements.</p>
                        </>
                    ) : (
                        <div className="w-full max-w-sm">
                            <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                                <span>{status === "uploading" ? "Scanning Document..." : "AI Analysis in progress..."}</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-indigo-600 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                            {status === "analyzing" && (
                                <p className="text-xs text-indigo-500 mt-4 animate-pulse text-center">Detecting legal loopholes...</p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                >
                    <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <FileText className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Rent Agreement (Tamil Nadu)</h3>
                                <p className="text-sm text-slate-500">Scanned on Jan 22, 2026 • 2.4 MB</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold border border-red-200 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Risk Detected
                        </span>
                    </div>

                    <div className="p-6 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500" />
                                Critical Issues Found
                            </h4>
                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                <p className="text-sm text-slate-700 mb-2 font-medium">Clause 14: Lock-in Period</p>
                                <p className="text-sm text-slate-600">"The tenant cannot terminate the agreement for a period of 3 years."</p>
                                <div className="mt-3 pt-3 border-t border-amber-200/50 flex gap-2">
                                    <Shield className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                                    <p className="text-xs text-indigo-700 font-medium">State law limits lock-in periods to reasonable durations (usually 11 months). This clause may be voidable.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                <p className="text-sm text-slate-700 mb-2 font-medium">Clause 5: Deposit Refund</p>
                                <p className="text-sm text-slate-600">"Deposit to be returned within 7 days of vacancy."</p>
                                <div className="mt-3 pt-3 border-t border-green-200/50 flex gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    <p className="text-xs text-green-700 font-medium">This clause is compliant with standard practices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h4 className="font-semibold text-slate-700 mb-4">Recommended Actions</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        Negotiate Clause 14 removal
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        Request Rent Control registration
                                    </li>
                                </ul>
                            </div>
                            <button className="w-full mt-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-indigo-200">
                                Draft Objection Notice
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

// 3. Auto-Drafting Engine
function AutoDraftingEngine() {
    const [step, setStep] = useState<"form" | "drafting" | "preview">("form");

    const handleGenerate = () => {
        setStep("drafting");
        setTimeout(() => {
            setStep("preview");
        }, 2000);
    };

    return (
        <div className="h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Auto-Drafting Engine</h2>
                <p className="text-slate-500">Generate professional legal notices in seconds.</p>
            </div>

            <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                    {step === "form" && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-3xl"
                        >
                            <h3 className="text-lg font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-100">Notice Details</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                    <input type="text" defaultValue="Ravi Kumar" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-900" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                                    <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-900" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Issue Type</label>
                                    <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-900">
                                        <option>Security Deposit Refund</option>
                                        <option>Illegal Eviction</option>
                                        <option>Maintenance Dispute</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Disputed Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2 text-slate-500">₹</span>
                                        <input type="text" defaultValue="50,000" className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-900 font-medium" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Landlord Name</label>
                                    <input type="text" defaultValue="Mr. Sharma" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-900" />
                                </div>
                            </div>
                            <div className="flex justify-end pt-4">
                                <button
                                    onClick={handleGenerate}
                                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md shadow-indigo-200 transition-all flex items-center gap-2"
                                >
                                    <PenTool className="w-4 h-4" />
                                    Generate Notice
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "drafting" && (
                        <motion.div
                            key="drafting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-96"
                        >
                            <div className="relative">
                                <Loader2 className="w-16 h-16 text-indigo-500 animate-spin" />
                                <Scale className="w-6 h-6 text-indigo-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                            <h3 className="mt-8 text-xl font-medium text-slate-800">Drafting Legal Notice...</h3>
                            <p className="text-slate-500 mt-2">Citing Section 21 of Rent Control Act</p>
                        </motion.div>
                    )}

                    {step === "preview" && (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid md:grid-cols-2 gap-8 h-full"
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                                <div className="p-3 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
                                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Preview</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <div className="flex-1 p-8 overflow-y-auto bg-white font-serif text-sm leading-relaxed text-slate-800">
                                    <p className="text-center font-bold text-lg mb-6 uppercase">Legal Notice</p>
                                    <p className="mb-4">To,<br />Mr. Sharma<br />12/A, Civil Lines, Chennai</p>
                                    <p className="mb-4 font-bold">Subject: Demand for Refund of Security Deposit of ₹50,000</p>
                                    <p className="mb-4">Sir/Madam,</p>
                                    <p className="mb-4">Under instruction from my client <strong>Mr. Ravi Kumar</strong>, notice is hereby given that you have unlawfully withheld the security deposit of ₹50,000 despite the rightful termination of the tenancy agreement dated 12/01/2025.</p>
                                    <p className="mb-4">As per the local Rent Control Act, failure to refund the deposit within 30 days of vacancy attracts an interest penalty of 18% p.a.</p>
                                    <p className="mb-8">You are called upon to refund the said amount within 7 days of receipt of this notice, failing which legal action shall be initiated.</p>
                                    <p className="text-right mt-12">Advocate for Ravi Kumar</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-4">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h3 className="font-semibold text-slate-800 mb-2">Ready to Send?</h3>
                                    <p className="text-sm text-slate-500 mb-6">Review the draft carefully before signing.</p>
                                    <div className="space-y-3">
                                        <button className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors">
                                            <Download className="w-4 h-4" /> Download PDF
                                        </button>
                                        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all">
                                            <Lock className="w-4 h-4" /> E-Sign with Aadhaar (Demo)
                                        </button>
                                    </div>
                                </div>
                                <button onClick={() => setStep('form')} className="text-slate-500 text-sm hover:underline">Edit Details</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// 4. Cyber-Sanjeevani (Panic Mode)
function CyberSanjeevani() {
    const [panicState, setPanicState] = useState<"initial" | "processing" | "results">("initial");

    const handlePanic = () => {
        setPanicState("processing");
        setTimeout(() => {
            setPanicState("results");
        }, 2000);
    };

    if (panicState === "initial") {
        return (
            <div className="h-full flex items-center justify-center">
                <button
                    onClick={handlePanic}
                    className="group relative w-64 h-64 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-2xl shadow-red-900/30 flex flex-col items-center justify-center text-white transition-transform transform active:scale-95 duration-200 hover:scale-105"
                >
                    <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                    <div className="absolute inset-0 rounded-full border border-red-400 opacity-50 scale-110"></div>
                    <Siren className="w-20 h-20 mb-4 animate-bounce" />
                    <span className="text-2xl font-bold tracking-wider">I GOT SCAMMED!</span>
                    <span className="text-xs opacity-70 mt-2 uppercase tracking-widest">Tap for immediate help</span>
                </button>
            </div>
        );
    }

    return (
        <div className={cn("h-full rounded-2xl p-6 transition-colors duration-500", panicState === "results" ? "bg-red-50" : "bg-white")}>
            <AnimatePresence mode="wait">
                {panicState === "processing" ? (
                    <motion.div
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center"
                    >
                        <div className="w-20 h-20 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mb-6"></div>
                        <h2 className="text-xl font-bold text-red-700">Analyzing Transaction...</h2>
                        <p className="text-red-500">Extracting Fraudster Metadata</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-red-600 rounded-lg shadow-lg shadow-red-500/30">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800">Cyber Sanjeevani Report</h2>
                                <p className="text-red-600 font-medium">Incident Logged at {new Date().toLocaleTimeString()}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Fraudster Details Extracted</h3>
                                <div className="flex items-start gap-3 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500">UPI ID</p>
                                        <p className="text-lg font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">scammer@oksbi</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <History className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500">Device Location (Approx)</p>
                                        <p className="text-md font-medium text-slate-800">New Delhi, India (IP: 192.168.x.x)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Immediate Actions</h3>
                                <button className="w-full flex justify-between items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg mb-3 border border-slate-200 group">
                                    <span className="font-medium text-slate-700">Copy 1930 Complaint Text</span>
                                    <File className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                                </button>
                                <button className="w-full flex justify-between items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-100 group">
                                    <span className="font-medium text-indigo-700">Email HDFC Nodal Officer</span>
                                    <Send className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600" />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <p className="text-sm text-yellow-800">
                                <strong>Advice:</strong> Do not delete any messages or call logs. We have auto-saved the last 5 minutes of screen activity as evidence.
                            </p>
                        </div>

                        <button onClick={() => setPanicState("initial")} className="mx-auto block text-slate-400 text-sm hover:text-slate-600 mt-8">Reset Simulation</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// 5. Evidence Vault
function EvidenceVault() {
    const files = [
        { name: "Call_Recording_Landlord.mp3", type: "audio", date: "Today, 10:00 AM", verified: true },
        { name: "Chat_Screenshot.png", type: "image", date: "Yesterday, 4:32 PM", verified: true },
        { name: "Rent_Agreement_Final.pdf", type: "pdf", date: "Jan 12, 2025", verified: true },
        { name: "Notice_Draft_v1.docx", type: "doc", date: "Jan 20, 2025", verified: false },
    ];

    return (
        <div className="h-full flex flex-col">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Evidence Vault</h2>
                    <p className="text-slate-500">Secure, blockchain-verified storage for your legal files.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md shadow-indigo-200">
                    <Upload className="w-4 h-4" /> Upload New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {files.map((file, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-indigo-300 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-3 rounded-lg",
                                file.type === 'audio' ? "bg-amber-100 text-amber-600" :
                                    file.type === 'image' ? "bg-purple-100 text-purple-600" :
                                        file.type === 'pdf' ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                            )}>
                                {file.type === 'audio' ? <Mic className="w-6 h-6" /> :
                                    file.type === 'image' ? <File className="w-6 h-6" /> :
                                        <FileText className="w-6 h-6" />
                                }
                            </div>
                            {file.verified && (
                                <div className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold border border-green-100 flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> VERIFIED
                                </div>
                            )}
                        </div>
                        <h4 className="font-semibold text-slate-700 truncate mb-1" title={file.name}>{file.name}</h4>
                        <p className="text-xs text-slate-400 mb-4">{file.date}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                SHA-256: 8f4a...9c2b
                            </span>
                            <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
