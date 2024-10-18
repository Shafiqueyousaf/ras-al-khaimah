'use client'

import { useTranslation } from '@/app/i18n/client'
import { HeaderBase } from './HeaderBase';

export const Header = ({ lng, path }) => {
  const { t } = useTranslation(lng, 'header');
  return <HeaderBase t={t} lng={lng} path={path} />
}