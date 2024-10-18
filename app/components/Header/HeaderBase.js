


// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from "next/link";
import LanguageSwitcher from '../LanguageSwitcher';

export default function HeaderBase({ t, lng }) {

    const eServiceMenuItems = [t("header.service-one"), t("header.service-two"), t("header.service-three")];
    const aboutUsMenuItems = [t("header.about-us-one"), t("header.about-us-two"), t("header.about-us-three")];
    const serviceMenuItems = ["Service One", "Service Two", "Service Three"];

    return (
        <>
            <header className="absolute left-0 right-0 py-5 z-10">
                <div className="container mx-auto">
                    <div className="header-inner flex justify-between items-center">
                        <div className="logo">
                            <Link href={`/${lng}`}><Image src="/logo-white.png" width={88} height={76} alt="logo white" /></Link>
                        </div>
                        <div className="nav-menu flex ">
                            <nav>
                                <Link href="#" className="text-white py-1.5 px-3 rounded-md hover:bg-gray-700">{t('header.home')}</Link>
                                

                                <Link href="#" className="text-white py-1.5 px-3 rounded-md hover:bg-gray-700">{t("header.media-center")}</Link>

                                <Link href="#" className="text-white py-1.5 px-3 rounded-md hover:bg-gray-700">{t("header.contact-us")}</Link>
                            </nav>

                            <div className="other-nav-links flex [.english_&]:ml-5 [.arabic_&]:mr-5">
                                <LanguageSwitcher lng={lng}/>
                                <Link href={`/${lng}/sign-in`} className="h-9 w-9 rounded-full border border-white flex items-center justify-center text-white text-base mx-3 transition-all duration-100 hover:bg-white hover:text-slate-950">
                                    <UserIcon className="size-5" />
                                </Link>
                                <button type="button" className="h-9 w-9 rounded-full border border-white flex items-center justify-center text-white text-lg transition-all duration-100 hover:bg-white hover:text-slate-950">
                                    <Bars3Icon className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

