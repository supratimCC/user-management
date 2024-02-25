"use-client";
import React from "react";
import { useDispatch } from "react-redux";
import { nextPage, prevPage, setRec, setPage } from "@/store/slices/pagination";
export default function Pagination(props) {
  // const dispatch = useDispatch();
  // const { totalDocs, hasNextPage, hasPrevPage, totalPages, page, limit } =
  //   props?.data;

  // // Calculate the start and end indices for displaying records
  // const startIndex = (page - 1) * limit + 1;
  // const endIndex = Math.min(page * limit, totalDocs);

  // // NEXT PAGE HANDELER
  // const next = () => {
  //   dispatch(nextPage());
  // };
  // // PREV PAGE HANDELER
  // const prev = () => {
  //   dispatch(prevPage());
  // };
  // // RECORDS HANDELER
  // const rec = (e) => {
  //   dispatch(setRec(e.target.value));
  // };

  // // PAGE HANDELER
  // const pageHandeler = (e) => {
  //   dispatch(setPage(e.target.value));
  // };

  return (
  //   <div className="row" style={{ marginTop: "2%" }}>
  //     <div className="container d-flex">
  //       <div className="col-3 text-center">
  //         <label className="p-2" for="pageSelect">
  //           Records :
  //         </label>
  //         <select
  //           class="form-control-sm bg-transparent  h-50 "
  //           id="pageSelect"
  //           onChange={rec}
  //         >
  //           <option value="5" selected={true}>
  //             5
  //           </option>
  //           <option value="10">10</option>
  //           <option value="15">15</option>
  //         </select>
  //       </div>
  //       <div className="col-5 text-center">
  //         <span>
  //           Showing {startIndex} to {endIndex} of {totalDocs} records
  //         </span>
  //       </div>
  //       <div className="col-4 text-center">
  //         <div class="d-flex text-gray-600 small cursor-pointer">
  //           {hasPrevPage && (
  //             <p class="border h-25 border-end px-3 py-1" onClick={prev}>
  //               {"<<"}
  //             </p>
  //           )}
  //           <select
  //             name="cars"
  //             class="form-control-sm bg-transparent  h-50"
  //             onChange={pageHandeler}
  //           >
  //             {(() => {
  //               const arr = [];
  //               for (let i = 1; i <= totalPages; i++) {
  //                 arr.push(
  //                   <option
  //                     key={i}
  //                     value={i}
  //                     selected={page == i ? true : false}
  //                   >
  //                     {i}
  //                   </option>
  //                 );
  //               }
  //               return arr;
  //             })()}
  //           </select>
  //           {hasNextPage && (
  //             <p class="border h-24 border-start px-3 py-1" onClick={next}>
  //               {">>"}
  //             </p>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  <></>
  );
}
