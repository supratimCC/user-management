import React from "react";

export default function Add() {
  return (
    <>
      <div className="col-12">
        <div className="card">
          <div className="card-header">Add user</div>
          <div className="card-body">
            {/* START APP SETTINGS  */}
            <form className="">
              <div className="row">
                {/* START APP NAME  */}
                <div className="col-md-4 col-sm-12">
                  <label htmlFor="validationServer01">First name</label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    placeholder="First name"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                {/* END APP NAME  */}
                {/* START FOOTER TEXT */}
                <div className="col-md-4 col-sm-12">
                  <div>
                    <label htmlFor="validationServer04">State</label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      id="validationServer04"
                      placeholder="State"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                </div>
                {/* END FOOTER TEXT  */}
                {/* START DESCRIPTION */}
                <div className="col-md-12 col-sm-12 mt-3">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Example textarea
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                {/* END DESCRIPTION */}
              </div>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
            {/* END APP SETTINGS  */}
          </div>
        </div>
      </div>
    </>
  );
}
