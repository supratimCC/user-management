import Loader from "@/components/Common/Loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitial } from "@/store/slices/pagination";
import { allPerm, assignPerm } from "@/Services/PermissionServices";
import { resetComponent } from "@/store/slices/global";
import { findOne } from "@/Services/RoleServices";

export default function AssignPermission() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [reload, setreload] = useState(false);
  const { global, pagination } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  // FETCH ROLE & PERMISSION DATA
  const fetchData = async () => {
    const id = router.query.id;
    try {
      const RoleData = await findOne(id);
      const permData = await allPerm();
      const roleInfo = RoleData.data.permissions
        ? RoleData.data.permissions
        : [];
      setLoading(false);
      setRecords({ perm: permData.data, role: roleInfo });
      console.log(records.perm);
    } catch (error) {
      console.error("Error in component:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pagination.page, pagination.limit, global.componentRefresh, reload]);
  // pagination.page, pagination.limit, global.componentRefresh, reload
  // PAGE ROUTER
  const pageRouteHandeler = (path) => {
    if (path) {
      router.push(path);
    } else {
      router.back();
    }
  };

  const actionHandeler = async (permId) => {
    const roleId = router.query.id;
    console.log(roleId, permId);
    const resp = await assignPerm(roleId, permId);
    setreload(!reload)
    console.log(reload)
    // dispatch(resetComponent())
  };

  return (
    <div className="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div>Permission List</div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                pageRouteHandeler("permissions/add");
              }}
            >
              Add New
            </button>
          </div>
        </div>
        <div class="card-body table-responsive">
          {loading && <Loader />}
          <>
            <div className="container d-flex justify-content-end mb-2">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                />
              </div>
            </div>
            <div className="container">
              <table class="table table-borderless text-center">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {!loading && (
                  <tbody>
                    {records?.perm?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.name}</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <div className="m-2">
                                <div
                                  className="form-check form-switch"
                                  onClick={() => {
                                    actionHandeler(data._id);
                                  }}
                                >
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id={data._id}
                                    checked={
                                      records?.role.includes(data._id)
                                        ? true
                                        : false
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={data._id}
                                  >
                                    Checked switch checkbox input
                                  </label>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
            {/* <Pagination data={records.perm} /> */}
          </>
        </div>
      </div>
    </div>
  );
}
