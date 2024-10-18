import HeroBanner from "@/app/components/HeroBanner";
import HowItWork from "@/app/components/HowItWork";
import ChairmanMessage from "@/app/components/ChairmanMessage";
import AboutUs from "@/app/components/AboutUs";
import OurServices from "@/app/components/OurServices";
import SiteStats from "@/app/components/SiteStats";
import LatestNews from "@/app/components/LatestNews";

export default function LandingPage({t,lng}){
    return(
        <>
            <HeroBanner t={t} />
            <HowItWork />
            <ChairmanMessage />
            <AboutUs />
            <OurServices />
            <SiteStats />
            <LatestNews lng={lng} />
        </>
    )
}