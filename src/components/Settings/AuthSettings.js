import React from "react";

export default function AuthSettings() {
  return (
    <div className="col-12">
      <div class="card">
        <div class="card-header">Auth Settings</div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th className="text-center">Last</th>
                <th className="text-center">Credentials</th>
                <th className="text-center">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>
                  {" "}
                  <h1>
                    <i class="bi bi-google"></i>
                  </h1>{" "}
                </td>
                <td>
                  {" "}
                  <span className="">
                    <i class="bi bi-pencil"></i>
                  </span>{" "}
                </td>
                <td>
                  <div className="form-check form-switch text-center">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  {" "}
                  <h1>
                    <i class="bi bi-facebook"></i>
                  </h1>{" "}
                </td>
                <td>
                  {" "}
                  <span className="">
                    <i class="bi bi-pencil"></i>
                  </span>{" "}
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  {" "}
                  <h1>
                    <i class="bi bi-github"></i>
                  </h1>{" "}
                </td>
                <td>
                  {" "}
                  <span className="">
                    <i class="bi bi-pencil"></i>
                  </span>{" "}
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
