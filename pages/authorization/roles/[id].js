"use-client";
import { findOne } from "@/Services/RoleServices";
import Add from "@/components/Authorization/Roles/Add";
import Edit from "@/components/Authorization/Roles/Edit";
import FullLayout from "@/layouts/FullLayout";
import axios from "axios";
import React from "react";
import { api } from "@/axios/axios";
export default function editPage({ roleData }) {
  return (
    <div className="row">
      <Edit role={roleData} />
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const id = params.id;
  const res = await api.get(`${process.env.API_URL}role/find-one/${id}`);
  const roleData = res.data;
  return { props: { roleData } };
}

editPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
