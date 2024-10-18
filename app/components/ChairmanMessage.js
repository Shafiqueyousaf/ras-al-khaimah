import Image from "next/image";
import Link from "next/link";

export default function ChairmanMessage(){

    return(
        <section className="chairman-section mt-24">
            <div className="container">
                <div className="grid grid-cols-7">
                    <div className="grid col-span-4">
                        <div className="chairman-message flex flex-col gap-4">
                            <div className="headings-wrap leading-none">
                                <h6 className="text-theme-orange mb-2">Chairman Message</h6>
                                <h2 className="text-primary-300 text-40 font-semibold">Trusted Arbitration Centre</h2>
                            </div>
                            <p className="text-black-300 text-1xl">Our team of highly skilled and experienced arbitration lawyers in the UAE is dedicated to providing top-notch legal assistance.</p>
                            <p className="text-base">Xiorem ipsum dolor sit amet, coectetur adipci ng de elit. Pellentesque porttitor elit arcu, vitae mollis diam aliquam non otent oevnec qdfruis libero molestie. Sed ut purus vel est pulvinar eleife ellensque eget arcu in enim condimentum pellentesque ornare id enim aecenas.</p>
                            <ul className="*:font-bold flex flex-col gap-3 mb-2 *:before:bg-primary-300 *:before:h-2 *:before:w-2 *:before:inline-block *:before:mr-3 *:before:rotate-45">
                                <li>Sed ut purus vel est pulvinar eleifend.</li>
                                <li>Pellentesque eget arcu in enim condimentum pellentesque ornare id enim.</li>
                                <li>Maecenas vitae dui quis lorem semper gravida ac sollicitudin sapien.</li>
                                <li>Maecenas iaculis tortor eu erat mattis suscipit.</li>
                            </ul>
                            <Link href="#" className="theme-blue-btn hover:bg-theme-blue">Read More</Link>
                        </div>  
                    </div>
                    <div className="grid col-span-3">
                        <div className="chairman-img bg-chairman-bg bg-no-repeat bg-[left_3.5rem_top_1rem]">
                            <Image src="/chairman-img.png" className="ml-auto" width={476} height={413} alt="chairman image" />
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}