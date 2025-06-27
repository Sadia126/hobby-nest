import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGroup from '../featuredGroups/featuredGroups';
import FaqSection from '../FaqSection/FaqSection';
import Testimonial from '../Testimonials/Testimonial';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <FeaturedGroup></FeaturedGroup>
           <FaqSection></FaqSection>
           <Testimonial></Testimonial>
           <Newsletter></Newsletter>
        </>
    );
};

export default Home;