import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/1.jpg";

// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";

import { useTranslation } from "react-i18next";

const HomePageTwo = () => {
  const { t } = useTranslation();

  const aboutText = [
    {
      text: t("about-text1"),
    },
    {
      text: t("about-text2"),
    },
  ];

  // const heroSliders = [
  //   {
  //     images: "slideWrapperThree",
  //     title: "Title 3",
  //     subTitle: "Sub title 3",
  //     text: "text 3",
  //     button: "Contact us now",
  //   },
  //   {
  //     images: "slideWrapperFour",
  //     title: "Title 4",
  //     subTitle: "Sub title 4",
  //     text: "text 4",
  //     button: "Contact us now",
  //   },
  // ];

  const heroSliders = [
    {
      images: "slideWrapperThree",
      title: t("heroslide-title3"),
      subTitle: t("heroslide-subTitle3"),
      text: t("heroslide-text3"),
      button: t("heroslide-button3")
    },
    {
      images: "slideWrapperFour",
      title: t("heroslide-title4"),
      subTitle: t("heroslide-subTitle4"),
      text: t("heroslide-text4"),
      button: t("heroslide-button4"),
    }
  ];

  const services = [
    {
      icon: "flaticon-parents",
      title: t("lawtype-family"),
      content: t("lawtype-family-desc"),
      url: "/lawtype/1"
    },
    {
      icon: "flaticon-wounded",
      title: t("lawtype-personalinjury"),
      content: t("lawtype-personalinjury-desc"),
      url: "/lawtype/2"
    },
    {
      icon: "flaticon-employee",
      title: t("lawtype-business"),
      content: t("lawtype-business-desc"),
      url: "/lawtype/3"
    },
    {
      icon: "flaticon-thief",
      title: t("lawtype-criminal"),
      content: t("lawtype-criminal-desc"),
      url: "/lawtype/4"
    },
    {
      icon: "flaticon-university-graduate-hat",
      title: t("lawtype-education"),
      content: t("lawtype-education-desc"),
      url: "/lawtype/5"
    },
    {
      icon: "flaticon-house",
      title: t("lawtype-realestate"),
      content: t("lawtype-realestate-desc"),
      url: "/lawtype/6"
    },
  ];

  const portfolioItem = [
    {
      images: portfolio1,
      title: t("portfolio-generalservice"),
      subtitle: t("portfolio-corporate"),
    },
    {
      images: portfolio2,
      title: t("portfolio-personalissue"),
      subtitle: t("portfolio-general"),
    },
    {
      images: portfolio3,
      title: t("portfolio-businessaccounting"),
      subtitle: t("portfolio-business"),
    },
    {
      images: portfolio4,
      title: t("portfolio-accountingissue"),
      subtitle: t("portfolio-criminal"),
    },
    {
      images: portfolio5,
      title: t("portfolio-businessaccounting"),
      subtitle: t("portfolio-familyissue"),
    },
  ];

  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <HeroSlider
        sliders={heroSliders}
        className="heroSliderArea heroSliderAreaStyleTwo"
      />
      {/* <Service className="serviceArea serviceAreaStyleTwo" /> */}
      <About
        className="aboutArea aboutAreaStyleTwo"
        title={t("about-whyyouneedus")}
        subTitle={t("about-weareexperts")}
        images={about}
        orderLast="order-last"
        videoId="XxVg_s8xAms"
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleTwo"
        title={t("servicearea-howcanwehelp")}
        subTitle={t("servicearea-areaofexpertise")}
        services={services}
      />
      <Portfolio
        className="portfolioArea"
        title={t("portfolioarea-recentcasestudies")}
        subTitle={t("portfolioarea-hereoutbestwork")}
        portfolioItem={portfolioItem}
      />
      <Testmonial className="testmonialArea" />
      <ContactArea className="contactArea" />
      <TeamMember
        title={t("qualified_attorneys")}
        subTitle={t("meet_our_experts")}
        className="teamArea"
        slider={true}
      />
      <CounterArea className="counterArea" />
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
export default HomePageTwo;
