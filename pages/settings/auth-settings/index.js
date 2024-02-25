import AuthSettings from "@/components/Settings/AuthSettings";
import FullLayout from "@/layouts/FullLayout";
import React from "react";

export default function authSettingsPage() {
  return (
    <AuthSettings/>
  );
}


authSettingsPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};


