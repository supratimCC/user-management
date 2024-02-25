import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/app",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-person-circle",
  },
  {
    title: "Roles",
    href: "/authorization/roles",
    icon: "bi bi-person-bounding-box",
  },
  {
    title: "Permissions",
    href: "/authorization/permissions",
    icon: "bi bi-building-lock",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "bi bi-hammer",
  },
  {
    title: "Help",
    href: "/help",
    icon: "bi bi-info-circle-fill",
  }
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <span
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </span>
              </Link>
            </NavItem>
          ))}
         {/* <Button
            color="secondary"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/monster-next-js-free-admin-template/"
          >
            Download Free
          </Button>
           <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://wrappixel.com/templates/monster-react-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
