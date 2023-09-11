import React, { useState } from "react";
import Googlemap from "../../components/Googleaddress/Address";
import Googlecategory from "../../components/Googleaddress/Category";
import Googleemail from "../../components/Googleaddress/Email";
import Googleconnect from "../../components/Googleaddress/Connect";
const DynamicForm = () => {
  const [step, setstep] = useState("1");

  const changeStep = (id) => {
    setstep(id);
  };
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Claim New Address NFTs</h3>
        <p>
          You can select up to five addresses below to create an Address NFT
          bundle.
        </p>
        <div className="claim-content-wrapper">
          <div>
            {step == "1" ? (
              <Googlemap changeStep={() => changeStep(2)} />
            ) : step == "2" ? (
              <Googlecategory changeStep={() => changeStep(4)} />
            ) : step == "3" ? (
              <Googleemail changeStep={() => changeStep(4)} />
            ) : (
              <Googleconnect />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
