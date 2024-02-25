import React from "react";
import { Container } from "reactstrap";
import Header from "./header/Header";
import Sidebar from "./sidebars/vertical/Sidebar";
import Breadcrumb from "./breadcrumb/AppBreadcrumb";
import { Provider } from "react-redux";
import store from "@/store";

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Provider store={store}>
        <main>
          <div className="pageWrapper d-md-block d-lg-flex">
            {/******** Sidebar **********/}
            <aside
              className={`sidebarArea shadow bg-white ${
                !open ? "" : "showSidebar"
              }`}
            >
              <Sidebar showMobilemenu={() => showMobilemenu()} />
            </aside>
            {/********Content Area**********/}
            <div className="contentArea">
              {/********header**********/}
              <Header showMobmenu={() => showMobilemenu()} />
              {/********Middle Content**********/}
              <Breadcrumb />
              {/* <Container className="p-4 wrapper" fluid> */}
              <Container className=" p-4" fluid>
                <div>{children}</div>
              </Container>
              {/* <span>Footer</span> */}
            </div>
          </div>
        </main>
      </Provider>
    </>
  );
};

export default FullLayout;
