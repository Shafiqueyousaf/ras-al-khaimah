"use client";

import { useParams } from "next/navigation";
import Image from "next/image";


const news = [
  {
    image: "/news-img01.png",
    date_category: "Fri jun 19 2023 | Category",
    heading: "Egyptian general authority for investment",
    paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
    link: "detail",
  },
  {
    image: "/news-img02.png",
    date_category: "Fri jun 19 2023 | Category",
    heading: "Strategic Alliance Formed",
    paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
    link: "detail",
  },
  {
    image: "/news-img03.png",
    date_category: "Fri jun 19 2023 | Category",
    heading: "Mauris molestie imperdiet nis nec auctor",
    paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
    link: "detail",
  },
  {
    image: "/news-img04.png",
    date_category: "Fri jun 19 2023 | Category",
    heading: "Etiam facilisis molestie sempe urus metus",
    paragraph: "It's a good idea to consider multiple lose sources and for patterns in the feedback.",
    link: "detail",
  },
];

// Function to create slug from heading
const createSlug = (heading) => {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

export default function NewsDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Find the news item based on the slug
  const newsItem = news.find((item) => createSlug(item.heading) == slug);
   
  return (
    <section className="news-detail-section py-24 bg-white">
      <div className="container">
        <div className="news-detail-inner flex gap-7 bg-[#f7f7f7] rounded-lg overflow-hidden">
          <div className="image grow shrink-0 basis-auto">
            <Image
              src={newsItem.image}
              alt={newsItem.heading}
              className="h-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="news-detail-content py-6 pr-9 flex flex-col">
            <h6 className="text-theme-orange mb-2">{newsItem.date_category}</h6>
            <h3 className="text-black-300 text-3xl font-semibold mb-3">
              {newsItem.heading}
            </h3>
            <p className="text-base font-normal mb-9 flex-grow flex-shrink basis-0">
              {newsItem.paragraph}
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
