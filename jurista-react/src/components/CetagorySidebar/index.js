import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { useTranslation } from "react-i18next";

const CetagorySidebar = ({ className, title }) => {
  const { t } = useTranslation();
  const cetagoryMenu = [
    { name: t("lawtype-family"), route: "/lawtype/1" },
    { name: t("lawtype-personalinjury"), route: "/lawtype/2" },
    { name: t("lawtype-business"), route: "/lawtype/3" },
    { name: t("lawtype-criminal"), route: "/lawtype/4" },
    { name: t("lawtype-education"), route: "/lawtype/5" },
    { name: t("lawtype-realestate"), route: "/lawtype/6" },
  ];
  return (
    <div className={className}>
      <h3 className="sidebarTitle">{title}</h3>
      <ul>
        {cetagoryMenu.map((cetagory, i) => (
          <li key={i}>
            <Link to={cetagory.route}>{cetagory.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CetagorySidebar;
