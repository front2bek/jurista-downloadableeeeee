import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
// images
import breadcumb from '../../../images/breadcumb/ratnica2.jpg'
// images
import portfolio1 from '../../../images/studies/tesla1.jpeg'
import portfolio2 from '../../../images/studies/tesla1.jpeg'
import portfolio3 from '../../../images/studies/tesla1.jpeg'
import portfolio4 from '../../../images/studies/tesla1.jpeg'
import portfolio5 from '../../../images/studies/tesla1.jpeg'
import { useTranslation } from "react-i18next";

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Resent Case Studies' }
]


const PortfolioPage = () => {
    const { t } = useTranslation();
    const portfolioItem = [
        { images: portfolio1, title: t("sports_arbitration"), subtitle: t("transfers")},
        { images: portfolio2, title: t("sports_arbitration"), subtitle: t("transfers") },
        { images: portfolio3, title: t("sports_arbitration"), subtitle: t("transfers")},
        { images: portfolio4, title: t("sports_arbitration"), subtitle: t("transfers") },
        { images: portfolio5, title: t("sports_arbitration"), subtitle: t("transfers") },
        { images: portfolio1, title: t("sports_arbitration"), subtitle: t("transfers")},
        { images: portfolio2, title: t("sports_arbitration"), subtitle: t("transfers") },
        { images: portfolio3, title: t("sports_arbitration"), subtitle: t("transfers") },
        { images: portfolio4, title: t("sports_arbitration"), subtitle: t("transfers") },
    ]
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton
                    className="headerBottomArea headerBottomAreaStyelTwo"
                />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Case Stadies"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <Portfolio
                title={t("best_work")}
                subTitle={t("some_of_ours")}
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleTwo"
            />

            {/* <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea />
        </Fragment>
    )
}
export default PortfolioPage