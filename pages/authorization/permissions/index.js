import Add from "@/components/Authorization/Roles/Add";
import List from "@/components/Authorization/Permissions/List";
import FullLayout from "@/layouts/FullLayout";
import React from "react";

export default function PermissionPage() {
  return (
    <div className="row">
      <List />
    </div>
  );
}

PermissionPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
