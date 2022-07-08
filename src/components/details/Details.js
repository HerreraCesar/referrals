import Contact from "../contact/Contact";
import { FiArrowUpCircle } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";
import { promotions } from "../../data.js";
import { useParams } from "react-router-dom";

const Details = () => {
  let quantity = [];
  for (let index = 0; index < 200; index++) {
    quantity.push(index);
  }
  const { promotionId } = useParams();
  const result = promotions.find((element) => element.id === promotionId);
  return (
    <div id="details">
      <div
        className="background"
        style={{ backgroundImage: `url(${result.background})` }}
      >
        <div className="shadow">
          <div className="promotion">
            <h1>{result.name}</h1>
            <p>{result.resume}</p>
            <h3>Steps:</h3>
            {result.steps.map((step, index) => (
              <div className="step" key={index}>
                <strong>{index + 1}) </strong><span>{step}</span>
              </div>
            ))}
            <h4>Fecha finalización de la promoción: undefined</h4>
          </div>
        </div>
      </div>

      <Link to="/#details" className="top" style={{ color: "black" }}>
        <FiArrowUpCircle />
      </Link>
      <Contact />
    </div>
  );
};

export default Details;
