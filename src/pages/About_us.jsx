import AboutHero from '../components/About/AboutHero';
import VisionAndValues from '../components/About/VisionAndValues';
import Team from '../components/About/Team';
import Package_Membership from '../components/About/Package_Membership';
import Schedules from '../components/About/Schedules';
import MessageFromChairman from '../components/About/Chairman';
import CouplesMem from '../components/About/CouplesMem';
import { Helmet } from 'react-helmet-async';
const About_us = () => {
    return (
       <div>
         <Helmet>
        <title>About Us - Multigym Premium</title>
        <meta name="description" content="Learn more about Multigym Premium, our mission, and our services." />
    </Helmet>
         <AboutHero />
        
         <VisionAndValues />
         <MessageFromChairman />
         {/* <Team /> */}
         <Schedules />
         <Package_Membership />
         <CouplesMem />
       </div>
    );
};

export default About_us;