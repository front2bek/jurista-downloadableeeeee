import React, { Fragment, useEffect, useState } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import Portfolio from "../../../components/Portfolio";
import ContactArea from "../../../components/ContactArea";
import { useTranslation } from "react-i18next";
import { Route, useParams } from "react-router";

// images
import breadcumb from "../../../images/breadcumb/ratnica2.jpg";
import pictureBircevic from "../../../images/expert/rsz_bircevic.jpg";
import pictureCakarevic from "../../../images/expert/rsz_cakarevic.jpg";
import pictureGagic from "../../../images/expert/rsz_gagic.jpg";
import pictureMusli from "../../../images/expert/rsz_musli.jpg";
import pictureVrabac from "../../../images/expert/rsz_vrabac.jpg";
import pictureZagorac from "../../../images/expert/rsz_zagorac.jpg";
import Bircevic from './bircevic';
import Cakarevic from './cakarevic';
import Gagic from './gagic';
import Musli from './musli';
import Vrabac from './vrabac';
import Zagorac from './zagorac';

import "./style.scss";

const breadcumbMenu = [
  { name: "Home", route: "/" },
  { name: "Attorneys", route: "/attorneys" },
  { name: "Attorneys Details" },
];

const teamContentsBircevic = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];
const teamContentsCakarevic = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];
const teamContentsGagic = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];
const teamContentsMusli = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];
const teamContentsVrabac = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];
const teamContentsZagorac = [
  "KK Div Basket",
  "KK Vizura",
  "KK Radnicki",
  "KK Partizan",
];

// const portfolioItem = [
//     { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
//     { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
//     { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
// ]

const SingleTeamPage = () => {
  const { t } = useTranslation();
  const params = useParams();
  const { attorneyName } = params;
// console.log(attorneyName);


const renderAdvokat =(param) => {
    // console.log(param.attorneyName);
    switch(param.attorneyName){
        case 'bircevic':
            return <Bircevic/>;
        case 'zagorac':
            return <Zagorac/>;
        case 'gagic':
            return <Gagic/>;
        case 'Musli':
            return <Musli/>;
        case 'cakarevic':
            return <Cakarevic/>;
        case 'vrabac':
            return <Vrabac/>;
            default:
            return <Vrabac/>;
    }
}


  return (
    renderAdvokat({attorneyName})

  );
};
export default SingleTeamPage;
