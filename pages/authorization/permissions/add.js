import Add from "@/components/Authorization/Permissions/Add";
import FullLayout from "@/layouts/FullLayout";
import React from "react";

export default function addPage() {
  return (
    <div className="row">
      <Add />
    </div>
  );
}

addPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
