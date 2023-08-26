import React, { useEffect } from "react";

import {
  ic_cities,
  ic_traveler,
  ic_treasure,
  imageHero,
  imageHeroFrame,
} from "assets/images";
import { Button } from "elements";
import { COLORS } from "constant";
import { numberFormat } from "constant/numberFormat";

function Hero(props) {

  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",

    })
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-auto pe-5" style={{ width: 530 }}>
          <h1 className="h1 fw-bold mb-3 ">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-3 fw-light w-75" style={{ color: COLORS.$gray500, lineHeight: "170%" }}>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>
        
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={ic_traveler} alt={`${props.data.travelers} Travelers`}>  
              </img>
              <h6 className="mt-3 fw-bold">
                {numberFormat(props?.data?.travelers)}{" "}
                <span className="fw-light" style={{ color: COLORS.$gray500 }}>
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }} >
              <img width="36" height="36" src={ic_treasure} alt={`${props.data.treasures} Treasures`}>  
              </img>
              <h6 className="mt-3 fw-bold">
                {numberFormat(props?.data?.treasures)}{" "}
                <span className="fw-light" style={{ color: COLORS.$gray500 }}>
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={ic_cities} alt={`${props.data.cities} Cities`}>  
              </img>
              <h6 className="mt-3 fw-bold">
                {numberFormat(props?.data?.cities)}{" "}
                <span className="fw-light" style={{ color: COLORS.$gray500 }}>
                  Cities
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 ps-5">
          <div style={{ width: 540, marginLeft: 150 }}>
            <img src={imageHero} width="520px" alt="Room with couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}/>
            <img src={imageHeroFrame} width="520px" alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0" }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
