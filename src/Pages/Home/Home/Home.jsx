import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGroup from '../featuredGroups/featuredGroups';
import FaqSection from '../FaqSection/FaqSection';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <FeaturedGroup></FeaturedGroup>
           <FaqSection></FaqSection>
           <Testimonial></Testimonial>
        </>
    );
};

export default Home;