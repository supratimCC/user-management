import { useRouter } from "next/router";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function AppBreadcrumb() {
  const router = useRouter();
  const pathList = router.asPath.split("/");
  const a = pathList.splice(1);
  return (
    <div className="container m-2">
      <nav ariaLabel="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </div>
  );
}
