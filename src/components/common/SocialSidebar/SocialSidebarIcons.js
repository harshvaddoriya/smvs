"use client";
import React from "react";
import styles from "./SocialSidebarIcons.module.scss";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socialLinks = [
    { icon: <FaYoutube />, url: "https://www.youtube.com/SwaminarayanVadtalGadiOfficial?sub_confirmation=1" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/lndym_balvibhag/" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/swaminarayanvadtalgadi/" },
    { icon: <FaXTwitter />, url: "https://x.com/vadtalgadi" },
];

const SocialSidebarIcons = () => {
    return (
        <div className={styles.sidebar}>
            {socialLinks.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconWrapper}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialSidebarIcons;
