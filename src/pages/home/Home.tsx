import { Button } from "@mui/material";
import Layout from "../../components/layout/Layout";
import SearchForms from "../../components/searchForms/SearchForms";

import landingBgS from "../../assets/landing/landingbgS.jpg";
import landingBgM from "../../assets/landing/landingbgM.jpg";
import landingBgL from "../../assets/landing/landingbgL.jpg";

import burjKhalifa from "../../assets/destinations/Burjkhalifa.jpg";
import ginza from "../../assets/destinations/Ginza.jpg";
import niagaraFalls from "../../assets/destinations/NiagaraFalls.jpg";
import victoriaIsland from "../../assets/destinations/VictoriaIsland.jpeg";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Landing />
      <FeaturedPackages />
      <PopularDestinations />
    </Layout>
  );
}

function Landing() {
  return (
    <main className={styles.landing}>
      <img
        className={styles.img}
        src={landingBgS}
        srcSet={`${landingBgS} 640w, ${landingBgM} 1024w, ${landingBgL} 1440w`}
        alt=""
      />
      <h1>
        Experience the <span className={styles.exotic}>Exotic</span> Beauty!
      </h1>
      <p>
        Planning a trip for work or vacation? At Roam Tavel & Tours, we've got
        your back!
      </p>
      <Button variant="contained">See Packages</Button>
      <SearchForms />
    </main>
  );
}

function FeaturedPackages() {
  return (
    <section className={styles.featuredPackages}>
      <h1>Featured Packages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
        laborum?
      </p>
    </section>
  );
}

function PopularDestinations() {
  const popularDestinations = [
    {
      number: "01",
      place: "Burj Khalifa",
      location: "Dubai, AE",
      img: {
        src: burjKhalifa,
        creditURL:
          "https://www.google.com/maps/contrib/101815168333710207772/reviews/@6.5341,3.5370304,5z",
      },
    },
    {
      number: "02",
      place: "Victoria Island",
      location: "Lagos, NG",
      img: {
        src: victoriaIsland,
        creditURL: "https://x.com/funshographix/status/1742624206410412380",
      },
    },
    {
      number: "03",
      place: "Niagara Falls",
      location: "NY/CA",
      img: {
        src: niagaraFalls,
        creditURL:
          "https://www.iloveny.com/listing/niagara-falls-state-park/14731/",
      },
    },
    {
      number: "04",
      place: "Ginza",
      location: "Tokyo, JP",
      img: {
        src: ginza,
        creditURL:
          "https://commons.m.wikimedia.org/wiki/File:Ginza-WAKO_at_night.jpg#mw-jump-to-license",
      },
    },
  ];
  return (
    <section className={styles.popularDestinations}>
      <h1>Places to visit</h1>
      <p>These places are a must-see during your vacation.</p>
      <div className={styles.destinationContainer}>
        {popularDestinations.map((destination) => (
          <div className={styles.place} key={destination.number}>
            <div
              style={{ backgroundImage: `url(${destination.img.src})` }}
              className={styles.img}
            >
              <a href={destination.img.creditURL}>Image Credit</a>
            </div>
            <div className={styles.textGroup}>
              <span>{destination.number}</span>
              <h2>{destination.place}</h2>
              <p>{destination.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
