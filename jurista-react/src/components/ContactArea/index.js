import React from "react";
import Form from "../Form";
import "./style.scss";
import { useTranslation } from "react-i18next";

const ContactArea = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="contactInfo">
              <span>{t('contactarea-atyourservice')}</span>
              <h2>{t('contactarea-contactus')}</h2>
              <h6>{t('contactarea-callusorfilltheform')}</h6>
              <p>
                {t('contactarea-contactusdesc')}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
