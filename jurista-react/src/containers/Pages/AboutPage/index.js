import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
// import about from "../../../images/about/2.jpg";
import about from "../../../images/custom/aboutus2.jpg";
import breadcumb from "../../../images/breadcumb/ratnica2.jpg";
import { useTranslation } from "react-i18next";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  const { t } = useTranslation();

  const aboutText = [
    {
      text: t('about-text1'),
    },
    {
      text: t('about-text2'),
    },
  ];

  // const services = [
  //   {
  //     icon: "flaticon-parents",
  //     title: t("lawtype-family"),
  //     content: t("lawtype-family-desc"),
  //     url: "/lawtype/1"
  //   },
  //   {
  //     icon: "flaticon-wounded",
  //     title: t("lawtype-personalinjury"),
  //     content: t("lawtype-personalinjury-desc"),
  //     url: "/lawtype/2"
  //   },
  //   {
  //     icon: "flaticon-employee",
  //     title: t("lawtype-business"),
  //     content: t("lawtype-business-desc"),
  //     url: "/lawtype/3"
  //   },
  //   {
  //     icon: "flaticon-thief",
  //     title: t("lawtype-criminal"),
  //     content: t("lawtype-criminal-desc"),
  //     url: "/lawtype/4"
  //   },
  //   {
  //     icon: "flaticon-university-graduate-hat",
  //     title: t("lawtype-education"),
  //     content: t("lawtype-education-desc"),
  //     url: "/lawtype/5"
  //   },
  //   {
  //     icon: "flaticon-house",
  //     title: t("lawtype-realestate"),
  //     content: t("lawtype-realestate-desc"),
  //     url: "/lawtype/6"
  //   },
  // ];

  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title={t('aboutus')}
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      {/* <Service className="serviceArea mt-0" /> */}
      <About
        className="aboutArea aboutAreaStyleTwo"
        title={t("about-whyyouneedus")}
        subTitle={t("about-weareexperts")}
        images={about}
        orderLast="order-last"
        videoId="qP-7GNoDJ5c"
        pragraphs={aboutText}
      />
      {/* <ServiceArea
        className="ourServiceArea"
        title={t("servicearea-howcanwehelp")}
        subTitle={t("servicearea-areaofexpertise")}
        services={services}
      /> */}
      <Testmonial className="testmonialArea pt100" />
      {/* <CounterArea
        fullWidth={true}
        className="counterArea counterAreaStyleTwo"
      /> */}
      {/* <TeamMember
        title={t("qualified_attorneys")}
        subTitle={t("meet_our_experts")}
        className="teamArea"
        slider={true}
      /> */}
      {/* <BlogArea
        className="blogArea"
        title="Latest News"
        subTitle="From Our Blog
                "
      /> */}
      {/* <NewsLetter
                className="newsLetterArea"
            /> */}
      <FooterArea />
    </Fragment>
  );
};
export default AboutPage;
