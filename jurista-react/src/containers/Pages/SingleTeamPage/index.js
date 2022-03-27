import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import FooterArea from "../../../components/FooterArea";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

// images
import breadcumb from '../../../images/breadcumb/ratnica2.jpg'
import photoBircevic from '../../../images/expert/rsz_bircevic.jpg'
import photoCakarevic from '../../../images/expert/rsz_cakarevic.jpg'
import photoGagic from '../../../images/expert/rsz_gagic.jpg'
import photoMusli from '../../../images/expert/rsz_musli.jpg'
import photoVrabac from '../../../images/expert/rsz_vrabac.jpg'
import photoZagorac from '../../../images/expert/rsz_zagorac.jpg'

import "./style.scss";

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/attorneys' },
    { name: 'Attorneys Details' }
]

const SingleTeamPage =() => {
    const { t } = useTranslation();
    const params = useParams();
    const { attorneyName } = params;
    let name = ''
    let teamContents = ['KK Div Basket',
    'KK Partizan',
    'KK Radnicki']
    let teamMembarInfo = [{ level: t("position"), text: 'Siniour Lawyer' },
    { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: t("experience")+ ": ", text: '10 Years' },
    { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
    { level: t("phone") + ": ", text: '0800.123.456' },
    { level: 'Email: ', text: 'youremail@gmail.com' },
    { level: 'Fax: ', text: ' 6985231456' }]
    let photo = ''
    const BircevicInfo = {
        teamContents : [
            'KK Div Basket',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Bircevic",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoBircevic
    }

    const CakarevicInfo = {
        teamContents : [
            'KK Div Basket Cakarevic',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Cakarevic",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoCakarevic
    }

    const GagicInfo = {
        teamContents : [
            'KK Div Basket',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Gagic",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoGagic
    }

    const MusliInfo = {
        teamContents : [
            'KK Div Basket',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Musli",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoMusli
    }

    const VrabacInfo = {
        teamContents : [
            'KK Div Basket',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Vrabac",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoVrabac
    }

    const ZagoracInfo = {
        teamContents : [
            'KK Div Basket',
            'KK Partizan',
            'KK Radnicki',
        ],
        name: "Zagorac",
        teamMembarInfo : [
            { level: t("position"), text: 'Siniour Lawyer' },
            { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
            { level: t("experience")+ ": ", text: '10 Years' },
            { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
            { level: t("phone") + ": ", text: '0800.123.456' },
            { level: 'Email: ', text: 'youremail@gmail.com' },
            { level: 'Fax: ', text: ' 6985231456' },
        ],
        photo : photoZagorac
    }

    console.log(attorneyName);
    switch (attorneyName) {
        
      case "1":
        teamContents = BircevicInfo.teamContents;
        teamMembarInfo = BircevicInfo.teamMembarInfo
        name = BircevicInfo.name;
        photo = BircevicInfo.photo;
        break;
      case "2":
        teamContents = CakarevicInfo.teamContents;
        teamMembarInfo = CakarevicInfo.teamMembarInfo
        name = CakarevicInfo.name;
        photo = CakarevicInfo.photo;
        break;
        case "3":
            teamContents = GagicInfo.teamContents;
            teamMembarInfo = GagicInfo.teamMembarInfo
            name = GagicInfo.name;
            photo = GagicInfo.photo;
            break;
        case "4":
                teamContents = MusliInfo.teamContents;
                teamMembarInfo = MusliInfo.teamMembarInfo
                name = MusliInfo.name;
                photo = MusliInfo.photo;
                break;
        case "5":
                    teamContents = VrabacInfo.teamContents;
                    teamMembarInfo = VrabacInfo.teamMembarInfo
                    name = VrabacInfo.name;
                    photo = VrabacInfo.photo;
                    break;
        case "6":
                        teamContents = ZagoracInfo.teamContents;
                        teamMembarInfo = ZagoracInfo.teamMembarInfo
                        name = ZagoracInfo.name;
                        photo = ZagoracInfo.photo;
                        break;
      default:
        // Must throw here
        throw new Error(`Invalid : Page does not exist`);
    }

    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={photo} alt="" />
                                        </div>
                                        <h4>{name}</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>{t("informations")}</h4>
                                        <ul className="teamMembarInfo">
                                            {teamMembarInfo.map((teamInfo, i) => (
                                                <li key={i}>
                                                    <span>{teamInfo.level}</span>
                                                    {teamInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>{t("experience")}</h3>
                                        <p>{t("single_experience1")}</p>
                                        <p>{t("single_experience2")}</p>
                                        <h5>{t("education")}</h5>
                                        <ul>
                                            {teamContents.map(teamContent => (
                                                <li key={teamContent}>{teamContent}</li>
                                            ))}
                                        </ul>
                                        <h5>{t("languages")}</h5>
                                        <span>French(fluent), English (fluent), Greek , chinese.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            {/* <ContactArea
                className="contactArea"
            />
            <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea />
        </Fragment>
    )

    // console.log(param.attorneyName);
    // switch(param.attorneyName){
    //     case 'bircevic':
    //         return <Bircevic/>;
    //     case 'zagorac':
    //         return <Zagorac/>;
    //     case 'gagic':
    //         return <Gagic/>;
    //     case 'Musli':
    //         return <Musli/>;
    //     case 'cakarevic':
    //         return <Cakarevic/>;
    //     case 'vrabac':
    //         return <Vrabac/>;
    //         default:
    //         return <Bircevic/>;
    // }
}

export default SingleTeamPage;
