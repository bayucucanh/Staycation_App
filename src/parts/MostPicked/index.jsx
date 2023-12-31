import { Button } from "elements";
import React from "react";

function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item?.price}
                  <span className="fw-light">/{item?.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item?.imageUrl}
                    alt={item?.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white text-decoration-none"
                    href={`/properties/${item?._id}`}
                  >
                    <h5>{item?.name}</h5>
                  </Button>
                  <span>
                    {item?.city}, {item?.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
