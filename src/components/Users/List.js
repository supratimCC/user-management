"use-client";
import React, { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";
import ProjectTables from "../dashboard/ProjectTable";
import { useRouter } from "next/router";
import { findAll } from "@/Services/UserServices";
import pagination from "@/store/slices/pagination";
import { useSelector } from "react-redux";
import moment from "moment";

export default function List() {
  const [records, setRecords] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter();
  const routeHandler = (path) => {
    router.push(path);
  };
  const { global, pagination } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findAll(pagination.page, pagination.limit);
        setLoading(false);
        console.log(data.data);
        setRecords(data.data);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div>
            <span>User List</span>
          </div>
          
          <div>
            <button
              onClick={() => {
                routeHandler("users/add");
              }}
              type="button"
              className="btn btn-primary"
            >
              Add new
            </button>
          </div>
        </div>
        <div class="card-body table-responsive">
          {/* {loading && <Loader />}  */}

          {/* {!props.isLoading && ( */}
          <>
            <div className="container d-flex justify-content-end mb-2">
              <div className="col-2">
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
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {records?.docs?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{`${data.first_name} ${data.last_name}`}</td>
                        <td>
                          {moment(data.createdAt).format(
                            "dddd, MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <div className="m-2">
                              <button type="button" className="btn btn-primary">
                                <i class="bi bi-plus-circle"></i>
                              </button>
                            </div>
                            <div className="m-2">
                              <button type="button" className="btn btn-warning">
                                <i class="bi bi-pencil-square"></i>
                              </button>
                            </div>
                            <div className="m-2">
                              <button type="button" className="btn btn-danger">
                                <i class="bi bi-eraser"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Pagination data={records} />
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
