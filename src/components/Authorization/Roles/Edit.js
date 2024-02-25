import Loader from "@/components/Common/Loader";
import React, { useEffect, useState } from "react";

import { RoleAddValidationSchema } from "@/validator/RoleValidation";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { create, edit } from "@/Services/RoleServices";
import { reSetEditData } from "@/store/slices/globalEdit";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
export default function Edit({ role }) {
  console.log("role", role);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const roleId = router.query.id;
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
      role: role.data.name,
    },
    validationSchema: RoleAddValidationSchema,
    onSubmit: async (values) => {
      try {
        setisLoading(true);
        // CALL EDIT
        const resp = await edit(roleId, values.role);
        if (resp.success) {
          Swal.fire({
            title: "Success",
            text: "Record updated sucessfully.",
            icon: "success",
          }).then(() => {
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
        <div class="card-header">Edit Roles</div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Role
              </label>
              <input
                placeholder="Please enter role name. "
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                className="form-control"
                id="Role"
                name="role"
                aria-describedby="role"
              />
              {touched.role && errors.role && (
                <div id="role" className="form-text text-danger">
                  {errors.role}
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
