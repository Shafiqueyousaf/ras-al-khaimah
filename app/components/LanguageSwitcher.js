'use client'

import { languages } from '@/app/i18n/settings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({lng}) {
    const pathname = usePathname();
    const lastSegment = pathname.split('/').pop();
    const isRoot = pathname == '/en' || pathname == '/ar';
    
    return(
        <>
            {languages.filter((l) => lng !==l).map((l) => {
                return (
                        <span key={l}>
                            <Link href={isRoot ? `/${l}` : `/${l}/${lastSegment}`} className={`h-9 w-9 rounded-full border border-white flex items-center justify-center text-white text-lg transition-all duration-100 hover:bg-white hover:text-slate-950`}>
                                {l}
                            </Link>
                        </span>
               
                    )
            })}
       </>
    )
}