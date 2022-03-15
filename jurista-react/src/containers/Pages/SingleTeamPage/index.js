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

import Bircevic from './bircevic';
import Cakarevic from './cakarevic';
import Gagic from './gagic';
import Musli from './musli';
import Vrabac from './vrabac';
import Zagorac from './zagorac';

import "./style.scss";


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
            return <Bircevic/>;
    }
}


  return (
    renderAdvokat({attorneyName})

  );
};
export default SingleTeamPage;
