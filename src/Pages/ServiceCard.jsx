import { useState } from "react";

const ServiceCard = ({ service, idx }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const createRipple = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const size = 20;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onClick={createRipple}
            className="group relative overflow-hidden w-full h-full rounded-xl p-[2px] transition-all duration-300 hover:-translate-y-2 active:scale-[0.96] active:translate-y-[1px] cursor-pointer select-none"
        >
            {ripples.map((ripple, i) => (
                <span
                    key={i}
                    className="absolute bg-white/30 dark:bg-white/20 rounded-full animate-ping pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                    }}
                />
            ))}

            {/* Animated gradient border */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, 
                    rgba(59,130,246,0.8), rgba(236,72,153,0.4), transparent 80%)`,
                }}
            />

            {/* Content */}
            <div className="relative h-full rounded-[10px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 flex items-center gap-10 p-8 transition-all duration-300">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
                        src={service.icon}
                        alt=""
                    />
                </div>

                <div className="flex-1">
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm mt-2">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
