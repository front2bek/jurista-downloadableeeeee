import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import './style.scss'
import { NavLink } from 'react-router-dom'

// images
import teamMember1 from '../../images/expert/rsz_bircevic.jpg'
import teamMember2 from '../../images/expert/rsz_zagorac.jpg'
import teamMember3 from '../../images/expert/rsz_gagic.jpg'
import teamMember4 from '../../images/expert/rsz_musli.jpg'
import teamMember5 from '../../images/expert/rsz_cakarevic.jpg'
import teamMember6 from '../../images/expert/rsz_vrabac.jpg'
import { useTranslation } from "react-i18next";



const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const TeamMember = ({ className, title, subTitle, slider, noGutters }) => {
    const { t } = useTranslation();
    const teams = [
        {
            name: 'Bircevic', level: t("criminal_law"), url: '/bircevic', image: teamMember1, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
        {
            name: 'Rade Zagorac', level: t("family_law"), url: '/zagorac', image: teamMember2, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
        {
            name: 'Djordje Gagic', level: t("criminal_law"), url: '/gagic', image: teamMember3, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
        {
            name: 'Dejan Musli', level: t("real_estate_law"), url: '/musli', image: teamMember4, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
        {
            name: 'Marko Cakarevic', level: t("real_estate_law"), url: '/cakarevic', image: teamMember5, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
        {
            name: 'Edin Vrabac', level: t("criminal_law"), url: '/vrabac', image: teamMember6, socialMedia: [
                'facebook', 'twitter', 'linkedin'
            ]
        },
    ]
    return (
        <div className={className}>
            <div className="container">
                <div className={!noGutters ? 'row' : 'row no-gutters'}>
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {slider ? (
                        <div className="col-12">
                            <Slider className="teamSlideArea" {...settings}>
                                {teams.map((team, i) => (
                                    
                                    <div key={i} className="teamWrapper">
                                        <div className="teamImage">
                                        <NavLink exact to={team.url}>
                                            <div>
                                            <img src={team.image} alt="" />
                                            </div>
                                            </NavLink>
                                        </div>
                                        <div className="teamContent">
                                            <h3>{team.name}</h3>
                                            <span>{team.level}</span>
                                            <ul>
                                                {team.socialMedia.map(social => (
                                                    <li key={social}><a href="#"><i className={`fa fa-${social}`} aria-hidden="true"></i></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    )
                                )}
                            </Slider>
                        </div>
                    ) : (
                            <Fragment>
                                {teams.map((team, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-12">
                                        <div className="teamWrapper">
                                            <div className="teamImage">
                                            <NavLink exact to={team.url}>
                                            <div>
                                            <img src={team.image} alt="" />
                                            </div>
                                            </NavLink>
                                            </div>
                                            <div className="teamContent">
                                                <h3>{team.name}</h3>
                                                <span>{team.level}</span>
                                                <ul>
                                                    {team.socialMedia.map(social => (
                                                        <li key={social}><a href="#"><i className={`fa fa-${social}`} aria-hidden="true"></i></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        )}
                </div>
            </div>
        </div>
    )
}
export default TeamMember