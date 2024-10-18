import Image from "next/image";
import Link from "next/link";

export default function AboutUs(){

    return(
        <section className="about-us-section mt-24 shadow-top flex">
            <div className="about-us-inner py-16 bg-white w-90">
                <div className="container">
                    <div className="grid grid-cols-7">
                        <div className="grid col-span-4 order-2">
                            <div className="chairman-message flex flex-col gap-4">
                                <div className="headings-wrap leading-none">
                                    <h6 className="text-theme-orange mb-2">About</h6>
                                    <h2 className="text-primary-300 text-40 font-semibold">RAK Mediation & Arbitration</h2>
                                </div>
                                <p className="text-base">Xiorem ipsum dolor sit amet, coectetur adipci ng de elit. Pellentesque porttitor elit arcu, vitae mollis diam aliquam non otent oevnec qdfruis libero molestie. Sed ut purus vel est pulvinar eleife ellensque eget arcu in enim condimentum pellentesque ornare id enim aecenas.</p>
                                <p className="text-base">Ultrices ante. In semper lobortis metus, eget elementum eros aliquet non. Integer leo ipsum, dignissim et interdum et, malesuada a velit. In et nisi viverra, suscipit tortor a, faucibus neque. Aenean vel augue enim. Aliquam augue odio, aliquam ornare tincidunt et, fringilla sed Mauris molestie imperdiet nisl, nec auctor mi sceleri vitae eros quis ligula facilisis posuere.</p>
                            
                                <Link href="#" className="theme-blue-btn hover:bg-theme-blue">Read More</Link>
                            </div>  
                        </div>
                        <div className="grid col-span-3 order-1">
                            <div className="chairman-img bg-chairman-bg bg-no-repeat bg-[left_3.5rem_top_1rem]">
                                <Image src="/event-building.jpg" className="rounded-2xl" width={460} height={380} alt="chairman image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div className="slogun relative w-10 overflow-hidden flex items-center">
                <Image src="/slogun.png" className="max-w-max ml-6" width={390} height={415} alt="slogun" />
            </div> 
        </section>
    )
}