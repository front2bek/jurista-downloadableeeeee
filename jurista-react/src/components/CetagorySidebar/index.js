import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { useTranslation } from "react-i18next";

const CetagorySidebar = ({ className, title }) => {
  const { t } = useTranslation();
  const cetagoryMenu = [
    { name: t("lawtype-family"), route: "case-stadies-details" },
    { name: t("lawtype-criminal"), route: "case-stadies-details" },
    { name: t("lawtype-business"), route: "case-stadies-details" },
    { name: t("lawtype-personalinjury"), route: "case-stadies-details" },
    { name: t("lawtype-education"), route: "case-stadies-details" },
    { name: t("lawtype-drugscrime"), route: "case-stadies-details" },
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
