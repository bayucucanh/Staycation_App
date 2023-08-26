import React, { useEffect } from "react";
import { Button } from "elements";
import IconText from "pages/IcontText";
import { useLocation } from "react-router-dom";

function Headers({ props }) {
  const location = useLocation();

  const getNavLinkClass = (currentPath, linkPath) => {
    return currentPath === linkPath ? " active" : "";
  };

  useEffect(() => {
    console.log("props", props);
  }, []);

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand navbar-light">
          <div className="container-fluid">
            <IconText />

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item${getNavLinkClass(
                    location.pathname,
                    "/"
                  )}`}
                >
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li
                  className={`nav-item${getNavLinkClass(
                    location.pathname,
                    "/browse-by"
                  )}`}
                >
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li
                  className={`nav-item${getNavLinkClass(
                    location.pathname,
                    "/stories"
                  )}`}
                >
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li
                  className={`nav-item${getNavLinkClass(
                    location.pathname,
                    "/agents"
                  )}`}
                >
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Headers;
