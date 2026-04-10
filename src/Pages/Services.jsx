import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {
    const servicesData = [
        {
            title: 'Meta Ads That Convert',
            description: 'We run targeted Facebook & Instagram ads that bring real customers to your business.',
            icon: assets.ads_icon
        },

        {
            title: 'High-Converting Websites',
            description: 'We build fast, modern websites designed to turn visitors into paying customers.',
            icon: assets.content_icon
        },

        {
            title: 'Growth & Social Media',
            description: 'We help you stay visible online with content and strategies that attract and retain customers.',
            icon: assets.social_icon
        }
    ];

    return (
        <div id='services' className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">

            <img className="absolute -top-110 -left-70 -z-1 dark:hidden" src={assets.bgImage2} alt="" />

            <Title 
                title='What we deliver'
                description='We build systems that turn attention into paying customers.'
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
                {
                    servicesData.map((service, idx) => (
                        <ServiceCard key={idx} idx={idx} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;