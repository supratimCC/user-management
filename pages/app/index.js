import React from "react";
import FullLayout from "@/layouts/FullLayout";

import Head from "next/head";
import { Col, Row } from "reactstrap";
// import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "@/components/dashboard/Feeds";
import ProjectTables from "@/components/dashboard/ProjectTable";
import TopCards from "@/components/dashboard/TopCards";
import Blog from "@/components/dashboard/Blog";
import bg1 from "@/assets/images/bg/bg1.jpg";
import bg2 from "@/assets/images/bg/bg2.jpg";
import bg3 from "@/assets/images/bg/bg3.jpg";
import bg4 from "@/assets/images/bg/bg4.jpg";
import { useSession } from "next-auth/react";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

export default function Dashboard() {
  return (
    <div>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="12" lg="6" xl="7" xxl="8">
          {/* <SalesChart /> */}
          <Feeds />

        </Col>
        <Col sm="12" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12" sm="12">
          <ProjectTables />
        </Col>
      </Row>
    </div>
  );
}


Dashboard.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};