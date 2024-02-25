import List from "@/components/Users/List";
import FullLayout from "@/layouts/FullLayout";
import React from "react";

export default function UsersPage() {
  return (
    <>
      <List />
    </>
  );
}

UsersPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
