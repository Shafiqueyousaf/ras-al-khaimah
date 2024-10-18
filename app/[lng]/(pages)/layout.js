

import { languages, fallbackLng } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n';

import Header from "@/app/components/Header/HeaderBase";

export default async function PagesLayout({children,params: {lng}}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
    return (
      <>
      <Header t={t} lng={lng}/>
        <main>
            {children}
        </main>
      </>
    )
  }