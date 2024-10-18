

import { Poppins, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

import { dir } from 'i18next'
import { languages, fallbackLng } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n';


const Notosans = Noto_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: '--font-Notosans',
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return {
    title: t('title'),
    description: "Judgement and tailored decision-making",
  }
}

export default async function RootLayout({children,params: {lng}}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  
  return (
    <html lang={lng} dir={dir(lng)} className={lng=="en" ? "english" : "arabic"}>
      <body className={lng=="en" ? poppins.className : Notosans.className}>
        {children}
      </body>
    </html>
  );
}
