import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import PricingTable from "../../../components/PricingTable";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import breadcumb from "../../../images/breadcumb/ratnica2.jpg";

import "./style.scss";

import { useTranslation } from "react-i18next";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Practice area" }];

const PracticePage = () => {
  const { t } = useTranslation();

  const aboutText = [
    {
      text: t("about-text1"),
    },
    {
      text: t("about-text2"),
    },
  ];

  const services = [
    {
      icon: "flaticon-parents",
      title: t("lawtype-family"),
      content: t("lawtype-family-desc"),
    },
    {
      icon: "flaticon-wounded",
      title: t("lawtype-personalinjury"),
      content: t("lawtype-personalinjury-desc"),
    },
    {
      icon: "flaticon-employee",
      title: t("lawtype-business"),
      content: t("lawtype-business-desc"),
    },
    {
      icon: "flaticon-thief",
      title: t("lawtype-criminal"),
      content: t("lawtype-criminal-desc"),
    },
    {
      icon: "flaticon-university-graduate-hat",
      title: t("lawtype-education"),
      content: t("lawtype-education-desc"),
    },
    {
      icon: "flaticon-house",
      title: t("lawtype-readestate"),
      content: t("lawtype-readestate-desc"),
    },
  ];
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Practice Area"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      {/* <Service className="serviceArea mt-0" /> */}
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleThree bgFFF"
        title={t("servicearea-howcanwehelp")}
        subTitle={t("servicearea-areaofexpertise")}
        services={services}
      />
      <PricingTable
        className="pricingTableArea"
        title={t("pricingtable-pricingtable")}
        subTitle={t("pricingtable-pricingplan")}
      />
      {/* <Testmonial className="testmonialArea pt100" /> */}
      {/* <NewsLetter
                className="newsLetterArea"
            /> */}
      <FooterArea />
    </Fragment>
  );
};
export default PracticePage;
