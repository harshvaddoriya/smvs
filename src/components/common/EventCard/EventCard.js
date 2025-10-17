"use client";
import React from "react";
import "./EventCard.module.scss";

const EventCard = ({ cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="cardSection">
      {cards.map((card, index) => (
        <div className={`card ${index % 2 !== 0 ? "reverse" : ""}`} key={index} style={{ backgroundColor: card.bgColor }}>
          <div className="card__image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card__content">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventCard;
