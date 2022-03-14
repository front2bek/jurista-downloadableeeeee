import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

import { useTranslation } from "react-i18next";

// images
import testmonial from '../../images/custom/review.jpg'
import testmonial2 from '../../images/custom/birca.png'


const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const Testmonial = ({ className }) => {
    const { t } = useTranslation();

    const sliders = [
        {
            text: 'Usluga i ljudi na izuzetnom nivou!',
            images: testmonial2,
            title: 'Djordje Gagic',
            subTitle: 'Bivsi MVP Partizana'
        },
        {
            text: 'Odlicno iskustvo za svaku preporuku!',
            images: testmonial2,
            title: 'Brajan Skalabrini',
            subTitle: 'Bivsi MVP NBA'
        }
    ]

    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonialImages">
                            <img src={testmonial} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-6">
                        <div className="testimonialContent">
                            <span>{t('testemonial-feedback-title')}</span>
                            <h2>{t('testemonial-feedback-header')}</h2>
                            <Slider className="testmonialSlider" {...settings}>
                                {sliders.map((slider, i) => (
                                    <div key={i} className="slideItem">
                                        <p>{slider.text}</p>
                                        <div className="thumbWrap">
                                            <div className="thumbImg">
                                                <img src={slider.images} alt="" />
                                            </div>
                                            <div className="imgContent">
                                                <h4>{slider.title}</h4>
                                                <span>{slider.subTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testmonial