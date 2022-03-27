import React from 'react'
import Odometer from 'react-odometerjs';
import './style.scss'
import { useTranslation } from "react-i18next";

const CounterArea = ({ className, fullWidth }) => {
    const { t } = useTranslation();
    const counters = [
        { value: '95', title: t('tile_percent_won_cases'), level: '%' },
        { value: '863', title: t('tile_numberofclients') },
        { value: '11', title: t('tile_numberoflawyers') },
        { value: '25', title: t('tile_percent_dismissed_cases'), level: '%' },
    ];
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className={fullWidth ? "col-12" : "col-lg-6 col-12"}>
                        <div className="counterMainWrapper">
                            {counters.map((count, i) => (
                                <div key={i} className="counterWrap">
                                    <div className="count">
                                        <Odometer
                                            aoto={true}
                                            value={count.value} />
                                        {count.level && <span className="level">{count.level}</span>}
                                    </div>
                                    <p>{count.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterArea