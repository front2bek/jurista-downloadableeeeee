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
// import about from "../../../images/about/2.jpg";
import about from "../../../images/custom/aboutus2.jpg";
import signature from "../../../images/about/1.png";

// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";
import { useTranslation } from "react-i18next";

const HomePageOne = () => {
  const { t } = useTranslation();

  const aboutText = [
    {
      text: t("about-text1"),
    },
    {
      text: t("about-text2"),
    },
  ];

  const heroSliders = [
    {
      images: "slideWrapperOne",
      title: t("heroslide-title1"),
      subTitle: t("heroslide-subTitle1"),
      text: t("heroslide-text1"),
      button: t("heroslide-button1")
    },
    {
      images: "slideWrapperTwo",
      title: t("heroslide-title2"),
      subTitle: t("heroslide-subTitle2"),
      text: t("heroslide-text2"),
      button: t("heroslide-button2"),
    }
  ];

  const portfolioItem = [
    { images: portfolio1, title: t("portfolio-generalservice"), subtitle: t("portfolio-corporate") },
    { images: portfolio2, title: t("portfolio-personalissue"), subtitle: t("portfolio-general") },
    { images: portfolio3, title: t("portfolio-businessaccounting"), subtitle: t("portfolio-business") },
    { images: portfolio4, title: t("portfolio-accountingissue"), subtitle: t("portfolio-criminal") },
    {
      images: portfolio5,
      title: t("portfolio-businessaccounting"),
      subtitle: t("portfolio-familyissue"),
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
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      {/* <Service className="serviceArea" /> */}
      <About
        className="aboutArea"
        title={t("aboutus")}
        images={about}
        signature={signature}
        pragraphs={aboutText}
      />
      <ServiceArea
        className="ourServiceArea"
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
      <ContactArea className="contactArea" />
      <FooterArea />
    </Fragment>
  );
};
export default HomePageOne;
