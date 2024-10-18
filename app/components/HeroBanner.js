import Image from "next/image";

export default function HeroBanner({t}){
    return(
        <section className="hero-banner bg-hero-banner bg-cover bg-center min-h-[985px] relative">
            <div className="container">
                <div className="inner-container relative">
                    <div className="hero-banner-content min-h-[985px]">
                        <div className="translate-y-[280px]">
                            <iframe src="https://lottie.host/embed/9f3da71b-2aa0-4eb5-b4a4-db2a6f1ec84a/Bc4NwcJOt1.json" className="absolute -top-14 left-0 right-0 mx-auto w-[455px] h-[455px]"></iframe>
                            <h1 className="text-white text-center text-[11.5vw] font-bold text-shadow">{t("banner-heading")}</h1>
                        </div>
                        <Image src="/above-banner.png" className="absolute left-0 right-0 translate-x-[50px] top-[190px] mx-auto" width={165} height={626} alt="building" />
                    </div>
                </div>
            </div>
        </section>
    )
}