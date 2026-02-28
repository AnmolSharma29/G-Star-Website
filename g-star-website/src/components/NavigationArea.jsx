import { useState } from "react";
import { Watch, Link2, Settings, ShoppingBag, FileText, Download } from "lucide-react";

const tabs = ["WARRANTY", "MANUALS", "SERVICE CENTERS", "STORE LOCATOR"];

/* ─── Reusable Icon Card ─── */
const IconCard = ({ icon: Icon, label, delay = 0 }) => (
    <div
        className="border border-gray-200 rounded bg-white flex flex-col items-center justify-center p-10 cursor-pointer
               hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        style={{
            fontFamily: "Poppins, sans-serif",
            animation: "fadeUp 0.5s ease both",
            animationDelay: `${delay}ms`,
        }}
    >
        <Icon size={64} strokeWidth={1} className="text-gray-700 mb-4" />
        <span className="text-sm tracking-widest text-gray-700 mt-2">{label}</span>
    </div>
);

/* ─── Tab Content Components ─── */
const WarrantyContent = () => (
    <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
        <IconCard icon={Watch} label="TIMEPIECES" delay={0} />
        <IconCard icon={Link2} label="JEWELLERY" delay={100} />
    </div>
);

const ManualsContent = () => (
    <div className="flex justify-center">
        <IconCard icon={FileText} label="DOWNLOAD PDF" delay={0} />
    </div>
);

const ServiceCentersContent = () => (
    <div className="flex justify-center">
        <IconCard icon={Settings} label="DOWNLOAD LIST" delay={0} />
    </div>
);

const StoreLocatorContent = () => (
    <div className="flex justify-center">
        <IconCard icon={ShoppingBag} label="DOWNLOAD LIST" delay={0} />
    </div>
);

const DefaultContent = () => (
    <div className="flex flex-col items-center gap-0">
        {tabs.map((tab, i) => (
            <div
                key={tab}
                className="flex flex-col items-center"
                style={{
                    fontFamily: "Poppins, sans-serif",
                    animation: "fadeUp 0.5s ease both",
                    animationDelay: `${i * 80}ms`,
                }}
            >
                <span className="text-2xl tracking-widest text-gray-800 py-4">{tab}</span>
                {i < tabs.length - 1 && <div className="w-12 h-px bg-gray-300" />}
            </div>
        ))}
    </div>
);

/* ─── Content Map ─── */
const contentMap = {
    WARRANTY: WarrantyContent,
    MANUALS: ManualsContent,
    "SERVICE CENTERS": ServiceCentersContent,
    "STORE LOCATOR": StoreLocatorContent,
};

/* ─── Main Component ─── */
const NavigationArea = () => {
    const [active, setActive] = useState(null);
    const Content = active ? contentMap[active] : DefaultContent;

    return (
        <main className="w-full flex-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            {/* Tab Buttons */}
            <div className="max-w-5xl mx-auto px-6 mb-10">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(active === tab ? null : tab)}
                            className={`py-6 text-sm tracking-widest transition-all duration-300
                ${active === tab
                                    ? "bg-black text-white font-bold shadow-md"
                                    : "bg-[#f2f2f2] text-black hover:bg-gray-200"
                                }`}
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Section Title */}
            {active && (
                <h2
                    className="text-center text-2xl font-bold tracking-widest mb-8"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        animation: "fadeUp 0.4s ease both",
                    }}
                >
                    {active}
                </h2>
            )}

            {/* Dynamic Content */}
            <div
                className="max-w-5xl mx-auto px-6 pb-16"
                key={active || "default"}
                style={{ animation: "fadeUp 0.4s ease both" }}
            >
                <Content />
            </div>
        </main>
    );
};

export default NavigationArea;