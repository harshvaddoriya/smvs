"use client";
import React from "react";
import EventCard from "../../../components/common/EventCard/EventCard";
import images from "../../../assets/images"; 

const NewsCard = () => {
  const cardData = [
    {
      title: "Our Vision",
      content:
        "We aim to inspire spiritual growth and community unity through service and wisdom.",
      image: images.founder1,
      bgColor: "#B38B59",
    },
    {
      title: "Our Mission",
      content:
        "To spread peace, love, and devotion through cultural and social initiatives worldwide.",
      image: images.founder2,
      bgColor: "#4A6FA5",
    },
    {
      title: "Our Values",
      content:
        "We uphold honesty, compassion, and dedication as our guiding principles in every endeavor.",
      image: images.founder3,
      bgColor: "#8B5FBF",
    },
  ];

  return <EventCard cards={cardData} />; // ✅ pass the array as `cards`
};

export default NewsCard;
