import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
export default function LoginForm() {
  const color = useSelector((state) => state.appSettings.colorCode);

  const router = useRouter();
  const routeHandler = (path) => {
    router.push(path);
  };

  return (
    <>
      <form className="card-body cardbody-color p-lg-5">
        <div className="text-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
            className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
            width="200px"
            alt="profile"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="Username"
            aria-describedby="emailHelp"
            placeholder="User Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary px-5 mb-5 w-100 "
            onClick={() => {
              routeHandler("/app");
            }}
          >
            Login
          </button>
        </div>
        <div id="emailHelp" className="form-text text-center mb-5 text-dark">
          Not Registered?{" "}
          <a href="#" className="text-dark fw-bold">
            {" "}
            Create an Account
          </a>
        </div>
      </form>
    </>
  );
}
