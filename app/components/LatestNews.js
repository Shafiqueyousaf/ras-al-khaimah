
"use client"

import Image from "next/image";
import Link from "next/link";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";

export default function LatestNews({lng }) {
    const params = useParams(); 
    const slug = params?.slug; 
    const news = [
        {
            image: "/news-img01.png",
            date_category: "Fri jun 19 2023 | Category",
            heading: "Egyptian general authority for investment",
            paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
            link: "detail"
        },
        {
            image: "/news-img02.png",
            date_category: "Fri jun 19 2023 | Category",
            heading: "Strategic Alliance Formed",
            paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
            link: "detail"
        },
        {
            image: "/news-img03.png",
            date_category: "Fri jun 19 2023 | Category",
            heading: "Mauris molestie imperdiet nis nec auctor",
            paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
            link: "detail"
        },
        {
            image: "/news-img04.png",
            date_category: "Fri jun 19 2023 | Category",
            heading: "Etiam facilisis molestie sempe urus metus",
            paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
            link: "detail"
        }
    ]

    const createSlug = (heading) => {
        return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    };
    
    // Filter news based on slug if provided
    const filteredNews = slug ? news.filter((item) => createSlug(item.heading) === slug) : news;

    return(
        <section className="news-section py-24 bg-white">
        <div className="container">
          <h2 className="text-primary-300 text-40 font-semibold mb-12">Latest News</h2>
          <div className="news-inner">
            <div className="grid grid-cols-2 gap-6">
              {filteredNews.map((item, ind) => {
                const generatedSlug = createSlug(item.heading); 
                return (
                  <div className="news-grid" key={ind}>
                    <Link href={`/${lng}/news-detail/${generatedSlug}`} className="group transition-all">
                      <div className="news-grid-inner flex gap-7 bg-[#f7f7f7] rounded-lg overflow-hidden">
                        <div className="image grow shrink-0 basis-auto">
                          <Image
                            src={item.image}
                            alt={item.image}
                            className="h-full object-cover"
                            width={290}
                            height={265}
                          />
                        </div>
                        <div className="news-detail py-6 pr-9 flex flex-col">
                          <h6 className="text-theme-orange mb-2">{item.date_category}</h6>
                          <h3 className="text-black-300 text-2xl font-semibold mb-3 group-hover:text-primary-300">
                            {item.heading}
                          </h3>
                          <p className="text-base font-normal mb-9 flex-grow flex-shrink basis-0">
                            {item.paragraph}
                          </p>
                          <span className="text-primary-300 capitalize font-medium flex items-center gap-1 ml-auto group-hover:text-theme-orange">
                            {item.link}
                            <ArrowLongRightIcon className="size-6" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    )
}