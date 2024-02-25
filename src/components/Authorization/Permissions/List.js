"use-client";
import Loader from "@/components/Common/Loader";
import { useEffect, useState } from "react";
import { drop, findAll } from "@/Services/PermissionServices";
import { useDispatch, useSelector } from "react-redux";
import { resetComponent } from "@/store/slices/global";
import { setInitial } from "@/store/slices/pagination";
import { setEditData } from "@/store/slices/globalEdit";
import Pagination from "@/components/Common/Pagination";
// import { pageRouteHelper } from "@/helper/RouterHelper";
import Swal from "sweetalert2";
import * as moment from "moment";
import { useRouter } from "next/router";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const { global, pagination } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findAll(pagination.page, pagination.limit);
        setLoading(false);
        setRecords(data.data);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, [pagination.page, pagination.limit, global.componentRefresh]);

  // RESET PAGINATION
  useEffect(() => {
    return () => {
      dispatch(setInitial());
    };
  }, [global.componentRefresh]);

  // DELETE HANDELER
  const deleteHandeler = async (id, role) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const status = drop(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          }).then(() => {
            dispatch(resetComponent());
          });
        }
      });
    } catch (error) {
      console.error("Error in component:", error);
    }
  };

  // PAGE ROUTER
  const pageRouteHandeler = (path) => {
    if (path) {
      router.push(path);
    } else {
      router.back();
    }
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
              <table class="table table-borderless text-start">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {!loading && (
                  <tbody>
                    {records?.docs?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <tr>{index + 1}</tr>
                          <td>{data.name}</td>
                          <td>
                            {moment(data.createdAt).format(
                              "dddd, MMMM Do YYYY, h:mm:ss a"
                            )}
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="m-2">
                                <button
                                  type="button"
                                  className="btn btn-warning"
                                  onClick={() => {
                                    pageRouteHandeler(
                                      `permissions/${data._id}`
                                    );
                                  }}
                                >
                                  <i class="bi bi-pencil-square"></i>
                                </button>
                              </div>
                              <div className="m-2">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => {
                                    deleteHandeler(data._id, data.name);
                                  }}
                                >
                                  <i class="bi bi-eraser"></i>
                                </button>
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
            <Pagination data={records} />
          </>
        </div>
      </div>
    </div>
  );
};

export default List;
