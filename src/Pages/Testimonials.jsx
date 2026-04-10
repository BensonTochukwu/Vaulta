import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Katie Smith",
            comment: "These guys completely transformed our online presence.",
        },
        {
            name: "Alex Fox",
            comment: "Our conversions doubled after working with them.",
        },
        {
            name: "Charles Brown",
            comment: "Clean design, fast delivery, highly recommend.",
        },
        {
            name: "Bobby Brown",
            comment: "Clean design, fast delivery, highly recommend.",
        },
        {
            name: "Alex Fox",
            comment: "Our conversions doubled after working with them.",
        }
    ];

    return (
        <section className="relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-8 py-12 lg:py-16 text-gray-700 dark:text-white/80">

            {/* Background glow (removes flat box feel) */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
            </div>

            <h3 className="text-3xl font-semibold text-center">
                What Our Clients Say
            </h3>

            <div className="w-full mt-8">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination"
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full !overflow-visible pb-10"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="h-auto !bg-transparent">

                            <div className="relative p-8 rounded-3xl 
                                            bg-gradient-to-br from-white/60 via-white/30 to-white/10
                                            dark:from-gray-800/60 dark:via-gray-800/30 dark:to-gray-900/20
                                            backdrop-blur-xl shadow-lg h-full flex flex-col justify-between
                                            hover:scale-[1.03] transition-all duration-300 overflow-hidden">

                                {/* ✨ THIS IS THE OPTIONAL GLOW LAYER */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10 opacity-40 pointer-events-none"></div>

                                {/* Soft inner glow (removes hard edges) */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4 relative z-10 text-yellow-400">
                                    ★★★★★
                                </div>

                                {/* Comment */}
                                <p className="text-base leading-relaxed mb-6 relative z-10">
                                    “{item.comment}”
                                </p>

                                {/* Verified badge + name */}
                                <div className="flex items-center gap-4 relative z-10">

                                    {/* Initial avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 
                                                    flex items-center justify-center text-white font-semibold">
                                        {item.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-sm">
                                            {item.name}
                                        </h4>
                                        <span className="text-xs opacity-70">
                                            Verified Client
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="custom-pagination mt-6 flex justify-center"></div>
            </div>

        </section>
    );
};

export default Testimonials;