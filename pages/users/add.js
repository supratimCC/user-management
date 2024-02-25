import UsersAdd from "@/components/Users/Add";
import FullLayout from "@/layouts/FullLayout";
import React from "react";

export default function UserAddPage() {
  return (
    <>
      <UsersAdd />
    </>
  );
}

UserAddPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
