import React from 'react'
import './style.scss'
import LanguageSelect from '../../languageSelect';
import { useTranslation } from "react-i18next";

const HeaderTop = (props) => {
    const { t } = useTranslation();


    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 col-12 col-lg-10">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i>  0653938585</li>
                                <li><i className="fa fa-clock-o"></i> 8h - 16h</li>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Nusiceva 6</li>
                                {/* <li><i></i> <ReactCountryFlag countryCode="US" className="flag" onClick={languageClick}/></li>
                                <li><i></i> <ReactCountryFlag countryCode="SR" className="flag" onClick={languageClick}/></li> */}
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle btnStyle2 text-right">
                            <LanguageSelect />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop