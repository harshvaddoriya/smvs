import React from "react";
import images from "../../../assets/images";
import styles from "./Founder.module.scss";



const founders = [
  { name: "Shree Swaminarayan Bhagwan", image: images.founder1 },
  { name: "H.H. 1008 Shree Acharya Shree Raghuvirji Maharaj", image:  images.founder2 },
  { name: "H.H. 1008 Shree Acharya Shree Bhagvatprasadji Maharaj", image:  images.founder3 },
  { name: "H.H. 1008 Shree Acharya Shree Viharilalji Maharaj", image:  images.founder4 },
  { name: "H.H. 1008 Shree Acharya Shree Shripatiprasadji Maharaj", image:  images.founder5  },
  { name: "H.H. 1008 Shree Acharya Shree Anandprasadji Maharaj", image:  images.founder6  },
  { name: "H.H. 1008 Shree Acharya Shree Narendraprasadji Maharaj", image:  images.founder7 },
  { name: "H.H. 1008 Acharya Shree Ajendraprasadji Maharaj", image:  images.founder8 },
  { name: "H.H. 108 Shree Lalji Shree Nrigendraprasadji Maharaj", image:  images.founder9 },
];

const Founder = () => {
  return (
    <section className={styles.main}>
    <div className={styles.founderSection}>
      <h2>Shree Swaminarayan Sampraday The Acharya Parampara- Vadtal Gadi</h2>

      <div className={styles.gridContainer}>
        {founders.map((founder, index) => (
          <div key={index} className={styles.founderCard}>
            <img src={founder.image} alt={founder.name} />
            <h3>{founder.name}</h3>
          </div>
        ))}
      </div>

      <div className={styles.description}>
        <p>
          Bhagwan Shree Swaminarayan, following the age old tradition of Sanatan Vaidik dharma i.e. Guru Shishya Parampara, accepted Shree Ramanand Swami [Uddhavavtar] as His Guru in Samvat year 1857, Prabodhini Ekadashi and thereafter, became ‘The Acharya’ a Supreme head of Shree Swaminarayan Religion in Samvat year 1858 Prabodhini Ekadashi. He engrossed and attract the large number of communities of all the caste and creed in most of India by his divine preaching’s. He also established number of Temples in Gujarat, India.
        </p>
        <p>For purpose of administration of these temples and entire sect, He divided India in two parts namely Shree NarNarayan Dev Gadi-Northern dioceses having head seat at Ahmedabad and Shree LaxmiNarayan Dev Gadi-southern Dioceses with Head seat at Vadtal, by stretching an Imaginary line between Kolkata [East] to Dwarka [West]. For the administration purpose of religious and administrative affairs, He executed ‘Desh Vibhag Lekh’ and ‘Shikshapatri’ as governing scripture.</p>
        <p>He adopted and installed his two nephews namely H. H. Acharya Shree Ayodhyaprasadji Maharaj and H. H. Acharya Shree RaghuvirprasadJi Maharaj as The Acharyas in Northern and Southern Dioceses, respectively. Thus, Shree Swaminarayan Sampraday, under the present Headship of H.H. Acharya Shree Ajendraprasadji Maharaj (the 8th descendant of Bhagwan Shree Swaminarayan), gradually and constantly made progress and flourished in India and abroad.</p>
      </div></div>
    </section>
  );
};

export default Founder;
