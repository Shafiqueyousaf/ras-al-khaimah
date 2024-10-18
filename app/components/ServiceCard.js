import Image from "next/image";
import Link from "next/link";
import {ArrowLongRightIcon} from '@heroicons/react/24/outline';

export default function ServiceCard({image, title, heading, paragraph}){

    return(
        <div className="service-card relative">
            <Image src={image} className="rounded-2xl w-full" width={460} height={380} alt={image} />
            <div className="service-content bg-white rounded-md p-6 w-90 mx-auto absolute -bottom-36 left-0 right-0 flex flex-col shadow">
                <h6 className="text-theme-orange">{title}</h6>
                <h3 className="text-black-300 text-2xl font-semibold mb-2">{heading}</h3>
                <p className="text-base mb-4">{paragraph}</p>
                <Link href="#" className="text-primary-300 hover:text-theme-blue font-semibold self-end inline-flex items-center gap-2">Details <ArrowLongRightIcon className="size-6" /></Link>
            </div>
        </div> 
    )
}