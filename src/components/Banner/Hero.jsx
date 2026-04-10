import assets from "../../assets/assets";

const Hero = () => {

    return (
        <div
        id="hero"
        className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
        >
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
            <p className="text-xs font-medium">
            Helping businesses grow online
            </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
            We build systems that bring you{" "}
            <span className="bg-gradient-to-r from-[#F527C5] to-[#4d8cea] bg-clip-text text-transparent">
            customers
            </span>
            .
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
            We build high-converting websites and run targeted Meta ads that bring real
            customers.
        </p>

        {/* Hero Image */}
        <div className="relative">
            <img className="w-full max-w-6xl" src={assets.hero_img} alt="" />
            <img
            className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
            src={assets.bgImage1}
            alt=""
            />
        </div>
        </div>
    );
};

export default Hero;