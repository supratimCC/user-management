"use-client";
import { findOne } from "@/Services/PermissionServices";
import Add from "@/components/Authorization/Permissions/Add";
import Edit from "@/components/Authorization/Permissions/Edit";
import FullLayout from "@/layouts/FullLayout";
import React from "react";
import { api } from "@/axios/axios";
export default function editPage({ permData }) {
  return (
    <div className="row">
      <Edit perm={permData} />
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const id = params.id;
  const res = await api.get(`${process.env.API_URL}permissions/find-one/${id}`);
  const permData = res.data;
  return { props: { permData } };
}

editPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
