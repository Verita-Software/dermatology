// src/components/Breadcrumbs.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split pathname by "/" and filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index}>
            {" > "}
            {isLast ? (
              <span className="breadcrumb-current">{formatName(name)}</span>
            ) : (
              <Link to={routeTo}>{formatName(name)}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

// Utility: format URL segment like "cosmetic-dermatology" => "Cosmetic Dermatology"
const formatName = (str) => {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};

export default Breadcrumbs;
