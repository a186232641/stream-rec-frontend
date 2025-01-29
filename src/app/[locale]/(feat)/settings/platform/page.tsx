import PlatformFormSuspense from "@/src/app/[locale]/(feat)/settings/platform/platform-form-suspense";
import { getTranslations } from "next-intl/server";
import { SettingsPage } from "@/src/app/[locale]/(feat)/settings/components/pages";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title')
  };
}

export default function SettingsPlatformPage() {

  return (
    <SettingsPage>
      <PlatformFormSuspense />
    </SettingsPage>
  )
}