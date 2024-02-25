import Loader from "@/components/Common/Loader";
import React, { useState } from "react";

import { PermAddValidationSchema } from "@/validator/PermissionValidation";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { create } from "@/Services/PermissionServices";
import { useRouter } from "next/router";
import { successHelper } from "@/helper/RouterHelper";
import Swal from "sweetalert2";
export default function Add() {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
    values,
  } = useFormik({
    initialValues: {
      perm: "",
    },
    validationSchema: PermAddValidationSchema,
    onSubmit: async (values) => {
      try {
        setisLoading(true);
        const resp = await create(values.perm);
        if (resp.success) {
          successHelper().then(() => {
            resetForm();
            setisLoading(false);
            router.back();
          });
        } else {
          Swal.fire({
            title: "Error",
            text: resp.message,
            icon: "error",
          }).then(() => {
            setisLoading(false);
            console.log(resp.message);
          });
        }
      } catch (error) {
        setisLoading(false);
        console.log("Something went wrong. ", error.message);
      }
    },
  });

  // PAGE ROUTER
  const pageRouteHandeler = () => {
    router.back();
  };

  return (
    <div className="col-4">
      <div class="card">
        <div class="card-header">Add permission</div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="perm" className="form-label">
                Permission
              </label>
              <input
                placeholder="Please enter permission name. "
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.perm}
                className="form-control"
                id="perm"
                name="perm"
                aria-describedby="perm"
              />
              {touched.perm && errors.perm && (
                <div id="perm" className="form-text text-danger">
                  {errors.perm}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              {isLoading && (
                <>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  &nbsp;
                  <span class="sr-only">Loading...</span>
                </>
              )}
              {!isLoading && <span class="sr-only">Save</span>}
            </button>

            <button
              type="button"
              className="btn btn-danger m-sm-1"
              onClick={() => {
                pageRouteHandeler();
              }}
            >
              <span class="sr-only">Cancel</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
