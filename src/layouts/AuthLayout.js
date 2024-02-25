import store from "@/store";
import React from "react";
import { Provider } from "react-redux"; 
import { SessionProvider } from "next-auth/react";

export default function AuthLayout({ children }) {
  return (
   
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">
                Welcome to APP_NAME
              </h2>
              <div className="text-center mb-5 text-dark">TAG_LINE</div>
              <div className="card my-5">{children}</div>
            </div>
          </div>
        </div>
      </Provider>
  );
}
 