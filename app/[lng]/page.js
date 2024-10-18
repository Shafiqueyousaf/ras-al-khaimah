
import LandingPage from "@/app/[lng]/(pages)/landing-page/page";
import Header from "@/app/components/Header/HeaderBase";

import { languages, fallbackLng } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n';

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return { title: t('title') }
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return (
    <>
      <Header t={t} lng={lng}/>
      <LandingPage t={t} lng={lng} />
    </>
  );
}
