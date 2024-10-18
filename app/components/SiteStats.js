import Image from "next/image";

export default function SiteStats(){
    const stats = [
        {
            ico: "/stat-icon01.svg",
            amount: "6.5B",
            paragraph: "The average value of registered disputes per year"
        },
        {
            ico: "/stat-icon02.svg",
            amount: "3.2k",
            paragraph: "Total registered cases"
        },
        {
            ico: "/stat-icon03.svg",
            amount: "200",
            paragraph: "Cases registered in 2023"
        },
        {
            ico: "/stat-icon04.svg",
            amount: "7.8 Billion",
            paragraph: "Total amount in dispute in 2022"
        }
    ]
    return(
        <section className="site-stats-section py-24 bg-stats-bg relative z-10 before:bg-stats-gradient before:absolute before:inset-0 before:-z-10">
            <div className="container">
                <div className="site-stats-inner">
                    <div className="grid grid-cols-4 gap-4">
                        {stats.map((item, ind)=>{
                            return(
                                <div className="stats-grid text-center text-white" key={ind}>
                                    <div className="ico">
                                        <Image src={item.ico} alt={item.ico} width={110} height={110} className="mx-auto" />
                                    </div>
                                    <h2 className="text-6xl font-light mt-5 mb-3">{item.amount}</h2>
                                    <p className="text-base font-normal">{item.paragraph}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}