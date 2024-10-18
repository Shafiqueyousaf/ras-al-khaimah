"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ServiceCard from "@/app/components/ServiceCard";

export default function OurServices(){
    const serviceItems = [
        {
            image: "/service-img01.jpg",
            title: "Arbitration",
            heading: "Settlement of Commercial Dispute",
            paragraph: "Proin sit amet orci congue, facilisis msie auris sed, ultrices ante. In semper lobortis mesve ki eget elementum eros aliquet non."
        },
        {
            image: "/service-img02.jpg",
            title: "Request To",
            heading: "Settlement of Commercial Dispute",
            paragraph: "Proin sit amet orci congue, facilisis msie auris sed, ultrices ante. In semper lobortis mesve ki eget elementum eros aliquet non."
        },
        {
            image: "/service-img01.jpg",
            title: "Mediation",
            heading: "Settlement of Commercial Dispute",
            paragraph: "Proin sit amet orci congue, facilisis msie auris sed, ultrices ante. In semper lobortis mesve ki eget elementum eros aliquet non."
        },
        {
            image: "/service-img02.jpg",
            title: "Arbitration",
            heading: "Settlement of Commercial Dispute",
            paragraph: "Proin sit amet orci congue, facilisis msie auris sed, ultrices ante. In semper lobortis mesve ki eget elementum eros aliquet non."
        }
    ]

    return(
        <section className="our-services-section mt-24">
            <div className="our-services-inner py-16">
                <div className="container">
                    <div className="headings-wrap relative mb-12 before:bg-chairman-bg before:w-[330px] before:h-[337px] before:absolute before:left-[-140px] before:top-[-60px] before:bg-contain">
                        <h2 className="text-primary-300 text-40 font-semibold">Our Services</h2>
                    </div>
                    <div className="our-services-slider relative">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={false}
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="servicesSwiper"
                            >
                                {serviceItems.map((item,idx)=>{
                                    return(
                                        <SwiperSlide key={idx}>
                                            <ServiceCard image={item.image} title={item.title} heading={item.heading} paragraph={item.paragraph}/>
                                        </SwiperSlide>
                                    )
                                })}
                        </Swiper>
                    </div>
                    <div className="all-services text-center mt-10">
                        <button type="button" className="theme-blue-btn hover:bg-theme-blue">VIEW ALL SERVICES</button>
                    </div>
                </div>
            </div>    
        </section>
    )
}