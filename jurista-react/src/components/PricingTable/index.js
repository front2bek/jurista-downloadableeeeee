import React from 'react'
import SectionTitle from '../Title'
import './style.scss'
import { useTranslation } from "react-i18next";

const PricingTable = ({ className, title, subTitle }) => {
    const { t } = useTranslation();

    const pricingpanel = [
        {
            icon: 'flaticon-scale',
            title: t('pricing-basicpackage'),
            text: t('pricing-basicpackage-desc'),
            price: '$120',
        },
        {
            icon: 'flaticon-scale',
            title: t('pricing-advancedpackage'),
            text: t('pricing-advancedpackage-desc'),
            price: '$150',
        },
        {
            icon: 'flaticon-scale',
            title: t('pricing-premiumpackage'),
            text: t('pricing-premiumpackage-desc'),
            price: '$180',
        },
    ];

    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {pricingpanel.map((pricing,i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-12">
                            <div className="pricingWrapper">
                                <i className={`fi ${pricing.icon}`}></i>
                                <h3>{pricing.title}</h3>
                                <h2>{pricing.price}</h2>
                                <p>{pricing.text}</p>
                                <div className="btnStyle">
                                    <button>{t('pricing-getstarted-button')}</button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PricingTable