import assets from "../assets/assets";
import Title from "./Title";

const OurWork = () => {
    const workData = [
        {
            title: 'E-commerce Growth Campaign',
            description: 'Increased online sales through targeted Meta ads and optimized landing pages.',
            image: assets.work_mobile_app
        },
        {
            title: 'Business Dashboard System',
            description: 'Built a conversion-focused dashboard to help teams track leads and performance.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness Brand Client Growth',
            description: 'Helped a fitness brand attract and convert new clients using paid social campaigns.',
            image: assets.work_fitness_app
        },
    ];

    return (
        <div id='our-work' className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <Title 
                title='Results we’ve delivered'
                description='We don’t just build things — we help businesses grow, convert, and scale online.'
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">

                {
                    workData.map((work, idx) => (
                        <div
                            key={idx}
                            className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    className="w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    src={work.image}
                                    alt=""
                                />
                            </div>

                            <h3 className="mt-3 mb-2 text-lg font-semibold">
                                {work.title}
                            </h3>

                            <p className="text-sm opacity-70 w-5/6">
                                {work.description}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default OurWork;