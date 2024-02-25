import AppSettings from '@/components/Settings/AppSettings';
import FullLayout from '@/layouts/FullLayout';
import React from 'react'

export default function appSteingsPage() {

  return (
    <>
      <AppSettings/>
    </>
  )
}

appSteingsPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
