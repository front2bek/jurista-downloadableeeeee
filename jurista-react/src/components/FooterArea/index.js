import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo2.png'
import './style.scss'
import { useTranslation } from "react-i18next";

const FooterArea = () => {
    const { t } = useTranslation();

    const footerLinks = [
        {
            title: t("quick_links"), menus: [
                { name: t("home"), route: ' ' },
                { name: t("practice"), route: 'practice' },
                { name: t("our_team"), route: 'attorneys' },
                { name: t("cases"), route: 'case-stadies' },
                { name: t("contact"), route: 'contact' }
            ]
        },
        {
            title: t("cases"), menus: [
                { name: t("family_law") },
                { name: t("criminal_law") },
                { name: t("personal_injury")},
                { name: t("real_estate_law") },
                { name: t("business_law")}
            ]
        },
        {
            title: t("Kontakt"), menus: [
                { name: 'Nusiceva 6', },
                { name: 'Beograd', },
                { name: 'Phone: 888 123-4587', },
                { name: 'Email: advokati_nusiceva@example.com', },
            ]
        },
    ]

    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>{t("footer_info")}</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link to={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row"  style={{float: 'right'}}>
                            {/* <div className="col-md-8 col-sm-10 col-12">
                                <span>Privacy Policy | © 2018 Barristar. All rights reserved</span>
                            </div> */}
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea