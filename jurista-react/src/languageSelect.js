import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ReactCountryFlag from "react-country-flag"
import srbFlag from "./assets/flags/serbiasvg.png";
import ukFlag from "./assets/flags/uk.png";

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();


  const languageClickEn = () => {
    i18next.changeLanguage('en');
  }
  const languageClickSrb = () => {
    i18next.changeLanguage('srb');
  }

  return (
    <Fragment>
            <ul> 
            <li><img className="flag" onClick={languageClickSrb} src={srbFlag} alt="Srb" style={{height: "10px", width: "15px"}}/></li>
            <li><img className="flag" onClick={languageClickEn} src={ukFlag} alt="Uk" style={{height: "10px", width: "15px"}}/></li>
                                {/* <li><i></i> <ReactCountryFlag countryCode="Fr" className="flag" onClick={languageClickFr}/></li> */}

                                {/* <li><img className="fa fa-map-marker" aria-hidden="true" src={srbFlag} alt="Srb" style={{height: "10px", width: "15px"}}/></li> */}

                                </ul>
    <div className="d-flex justify-content-end align-items-center language-select-root">

      {/* <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selected].label}
        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover> */}
    </div>
    </Fragment>
  );
};

export default LanguageSelect;
