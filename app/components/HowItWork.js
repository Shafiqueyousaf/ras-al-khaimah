

export default function HowItWork(){
    
    const howItWorkItems = [
        {
            image: "/building-ico.jpg",
            heading: "Our Vision",
            paragraph: "Xiorem ipsum dolor sit amet, coectetur adipci ng de elit. Pellentesque porttitor elit arcu, vitae mollis diam aliquam non otent oevnec qdfruis libero molestie."
        },
        {
            image: "/dart-mission-goal.jpg",
            heading: "Our Mission",
            paragraph: "Pellentesque porttitor elit arcu, vitae mollis dia mrvrs aliquam noniorem ipsum dolor sit amet, tetur ading elit. Suspendisse potent oevnec qdfruis libero molestie."
        },
        {
            image: "/values.jpg",
            heading: "Our Objectives",
            paragraph: "Pellentesque porttitor elit arcu, vitae mollis dia mrvrs aliquam noniorem ipsum dolor sit amet, tetur ading elit. Suspendisse potent oevnec qdfruis libero molestie."
        }
    ]
    return(
        <section className="how-it-work relative z-10 -mt-24">
            <div className="container">
                <div className="how-it-work-inner bg-white px-17 pt-5 pb-14 rounded-3xl shadow">
                    <div className="grid grid-cols-3 gap-17">
                        {
                            howItWorkItems.map((item, index)=>{
                                return(
                                    <div className="how-it-work-block" key={index}>
                                        <div className="ico w-[70px] h-[90px] relative flex items-center">
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                        <h3 className="text-black-300 text-2xl font-semibold my-3">{item.heading}</h3>
                                        <p>{item.paragraph}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}