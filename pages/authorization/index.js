import FullLayout from "@/layouts/FullLayout";
import Link from "next/link";
import React from "react";

export default function authorizationPage() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&rsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success  mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&rsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&rsquo;s content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&rsquo;s content.
            </p>
            <Link href={"authorization/roles"} class="btn btn-primary">
              Permissions
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card text-white bg-info mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&rsquo;s content.
            </p>
            <Link href={"authorization/roles"} class="btn btn-primary">
              Roles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

authorizationPage.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};
