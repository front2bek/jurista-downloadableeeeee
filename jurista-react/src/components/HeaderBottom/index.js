import React, { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import logo1 from '../../images/logo/logo.jpeg'
import logo2 from '../../images/logo/logo2.png'
import './style.scss'
import { useTranslation } from "react-i18next";
import { yellow } from '@material-ui/core/colors'

const HeaderBottom = props => {
    const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const { t } = useTranslation();

    const submitHandler = e => {
        e.preventDefault()
        console.log(search)
    }
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerBottomMainWrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-6 col-8">
                            <div className="logo">
                                <NavLink to="/">
                                    <img className="logoImg" src={logo2} alt="" />
                                </NavLink>
                                <span style={{color: "#c0b596"}}> Adv kanc Pantelic-Djordjevic</span>
                            </div>
                        </div>
                        <div className={responsive ? "col-lg-8 responsiveWrapper active" : "col-lg-8 responsiveWrapper"}>
                            <ul className="mainMenuWrap">
                                <li><NavLink exact to='/'>{t("home")}</NavLink>
                                    {/* <ul className="subMenu">
                                        <li><NavLink exact to='/'>Home One</NavLink></li>
                                        <li><NavLink exact to='/home-two'>Home Two</NavLink></li>
                                        <li><NavLink exact to='/home-three'>Home Three</NavLink></li>
                                    </ul> */}
                                </li>
                                <li><NavLink exact to='/about'>{t("about")}</NavLink></li>
                                <li><NavLink exact to='/practice'>{t("practice")}</NavLink>
                                    {/* <ul className="subMenu">
                                        <li><NavLink exact to='/practice'>{t("practice_areas")}</NavLink></li>
                                        <li><NavLink exact to='/practice-details'>Practice areas single</NavLink></li>
                                    </ul> */}
                                </li>

                                <li><NavLink exact to='/case-stadies'>{t("cases")}</NavLink>
                                    {/* <ul className="subMenu">
                                        <li><NavLink exact to='/case-stadies'>Cases</NavLink></li>
                                        <li><NavLink exact to='/case-stadies-details'>Case single</NavLink></li>
                                    </ul> */}
                                </li>
                                {/* <li><NavLink exact to='/blog-left'>{t("news")}</NavLink>
                                    <ul className="subMenu">
                                        <li><NavLink exact to='/blog-left'>Blog left sidebar</NavLink></li>
                                        <li><NavLink exact to='/blog-right'>Blog Right sidebar</NavLink></li>
                                        <li><NavLink exact to='/blog-fullwidth'>Blog FullWidth</NavLink></li>
                                    </ul>
                                </li> */}
                                <li><NavLink exact to='/attorneys'>{t("attorneys")}</NavLink>
                                    {/* <ul className="subMenu">
                                        <li><NavLink exact to='/attorneys'>Attorneys</NavLink></li>
                                        <li><NavLink exact to='/attorneys-single'>Attorneys single</NavLink></li>
                                    </ul> */}
                                </li>
                                <li><NavLink exact to='/contact'>{t("contact")}</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                            <div className="searchMenuWrapper">

                                <div onClick={responsiveHandler} className="responsiveTrigger">
                                    <span className="first"></span>
                                    <span className="second"></span>
                                    <span className="third"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottom