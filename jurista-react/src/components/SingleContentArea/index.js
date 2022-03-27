import React from "react";
import avatarImg from "../../images/practice/4.jpg";
import imageFamilyLaw from "../../images/custom/familylaw.PNG";
import imageCriminalLaw from "../../images/custom/criminallaw.PNG";
import imageBusinessLaw from "../../images/custom/businesslaw.PNG";
import imagePersonalInjuryLaw from "../../images/custom/personalinjurylaw.PNG";
import imageRealEstateLaw from "../../images/custom/realestatelaw.PNG";
import imageEducationLaw from "../../images/custom/educationlaw.PNG";

import "./style.scss";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

// const listItem = [
//     'The master-builder of human happiness.',
//     'Occasionally circumstances occur in which toil and pain',
//     'Avoids pleasure itself, because it is pleasure',
//     'who do not know how to pursue pleasure',
//     'To take a trivial example, which of us ever undertakes',
// ]

const SingleContentArea = ({ className, avatar, image }) => {
  const { t } = useTranslation();
  const params = useParams();
  const { lawtypeid } = params;
  let name = "";
  let header = "";
  let desc = "";
  
const lawtypefamily = {
    id: 1,
    name: t("lawtype-family"),
    header: t("lawtype-detailfamily-header"),
    desc: t("lawtype-detailfamily-desc"),
    image: imageFamilyLaw,
  };
  const lawtypepersonalinjury = {
    id: 2,
    name: t("lawtype-personalinjury"),
    header: t("lawtype-detailpersonalinjury-header"),
    desc: t("lawtype-detailpersonalinjury-desc"),
    image: imagePersonalInjuryLaw,
  };
  const lawtypebusiness = {
    id: 3,
    name: t("lawtype-business"),
    header: t("lawtype-detailbusiness-header"),
    desc: t("lawtype-detailbusiness-desc"),
    image: imageBusinessLaw,
  };
  const lawtypecriminal = {
    id: 4,
    name: t("lawtype-criminal"),
    header: t("lawtype-detailcriminal-header"),
    desc: t("lawtype-detailcriminal-desc"),
    image: imageCriminalLaw,
  };
  const lawtypeeducation = {
    id: 5,
    name: t("lawtype-education"),
    header: t("lawtype-detaileducation-header"),
    desc: t("lawtype-detaileducation-desc"),
    image: imageEducationLaw,
  };
  const lawtyperealestate = {
    id: 6,
    name: t("lawtype-realestate"),
    header: t("lawtype-detailrealestate-header"),
    desc: t("lawtype-detailrealestate-desc"),
    image: imageRealEstateLaw,
  };
  

  switch (lawtypeid) {
    case "1":
      name = lawtypefamily.name;
      header = lawtypefamily.header;
      desc = lawtypefamily.desc;
      image = lawtypefamily.image;
      break;
    case "2":
      name = lawtypepersonalinjury.name;
      header = lawtypepersonalinjury.header;
      desc = lawtypepersonalinjury.desc;
      image = lawtypepersonalinjury.image;
      break;
    case "3":
      name = lawtypebusiness.name;
      header = lawtypebusiness.header;
      desc = lawtypebusiness.desc;
      image = lawtypebusiness.image;
      break;
    case "4":
      name = lawtypecriminal.name;
      header = lawtypecriminal.header;
      desc = lawtypecriminal.desc;
      image = lawtypecriminal.image;
      break;
    case "5":
      name = lawtypeeducation.name;
      header = lawtypeeducation.header;
      desc = lawtypeeducation.desc;
      image = lawtypeeducation.image;
      break;
    case "6":
      name = lawtyperealestate.name;
      header = lawtyperealestate.header;
      desc = lawtyperealestate.desc;
      image = lawtyperealestate.image;
      break;
    default:
      // Must throw here
      throw new Error(`Invalid : Page does not exist`);
  }

  return (
    <div className={className}>
      <div className="singleContentImg">
        <img src={image} alt="" />
      </div>
      <div className="singleContentWrap">
        <h3>{name}</h3>
        <h5>
          {header}
        </h5>
        <p>
          {desc}
        </p>
        {/* {avatar && (
                    <div className="avatarWra">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={avatarImg} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h4>Family Law Organizations</h4>
                                <ul>
                                    {listItem.map(list => (
                                        <li key={list}>{list}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                )} */}
      </div>
    </div>
  );
};
export default SingleContentArea;
