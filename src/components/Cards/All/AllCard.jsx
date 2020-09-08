import React from "react";
import CardsData from "../CardsData.json";
import VisitSiteIcon from "../../../img/visit_site.svg";
import '../styles/style.css';

const AllCard = () => {
  return (
    <section id="colection__resource">   
      <div className="container">
        <div className="d-flex">
          {CardsData.map(site => (
            <div id="site__card" key={site.id}>
              <div id="site__card__icon">
                <img src={site.icon} alt="site icon" />
              </div>
              
              <div
                id="site__card__title"
                className="d-flex"
                style={{ justifyContent: "flex-start", alignItems: "center" }}
              >
                <h3>{site.name}</h3>
                <a href={site.link} target="_blank" rel="noopener noreferrer">
                  <img src={VisitSiteIcon} alt="visit site" width="50" />
                </a>
              </div>

              <div id="site__card__about">
                <p>{site.about}</p>
              </div>

              <div
                id="site__card__category"
                style={{
                  backgroundColor: site.category_color,
                  color: site.text_color,
                  maxWidth: site.background_width
                }}
              >
                <p>{site.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCard;
