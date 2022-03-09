import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'
import { useTranslation } from "react-i18next";

// images
import breadcumb from '../../../images/breadcumb/ratnica2.jpg'
import team from '../../../images/expert/rsz_bircevic.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/attorneys' },
    { name: 'Attorneys Details' }
]

const teamContents = [
    'KK Div Basket',
    'KK Partizan',
    'KK Radnicki',
    'KK Partizan',
]

// const portfolioItem = [
//     { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
//     { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
//     { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
// ]

const SingleTeamPage = () => {
    const { t } = useTranslation();

    const teamMembarInfo = [
        { level: t("position"), text: 'Siniour Lawyer' },
        { level: t("practice_area")+ ": ", text: 'Family Lawyer, Criminal Defence, Personal Injury' },
        { level: t("experience")+ ": ", text: '10 Years' },
        { level: t("address")+ ": ", text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
        { level: t("phone") + ": ", text: '0800.123.456' },
        { level: 'Email: ', text: 'youremail@gmail.com' },
        { level: 'Fax: ', text: ' 6985231456' },
    ]

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
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>Bircevic</h4>
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
}
export default SingleTeamPage