import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import landingBgS from "../../assets/landing/landingbgS.jpg";
import landingBgM from "../../assets/landing/landingbgM.jpg";
import landingBgL from "../../assets/landing/landingbgL.jpg";
import burjKhalifa from "../../assets/destinations/Burjkhalifa.jpg";
import ginza from "../../assets/destinations/Ginza.jpg";
import niagaraFalls from "../../assets/destinations/NiagaraFalls.jpg";
import victoriaIsland from "../../assets/destinations/VictoriaIsland.jpeg";

import { Button, Rating } from "@mui/material";
import travelsAPI from "../../_lib/modules/travelsAPI";
import Layout from "../../components/layout/Layout";
import SearchForms from "../../components/searchForms/SearchForms";
import { paths } from "../../_lib/constants";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
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
  const navigate = useNavigate();

  return (
    <main className={styles.landing}>
      <img
        className={styles.img}
        src={landingBgS}
        srcSet={`${landingBgS} 640w, ${landingBgM} 1024w, ${landingBgL} 1440w`}
        alt=""
      />
      <h1>
        Experience the <span className={styles.exotic}>Exotic</span> Lifestyle!
      </h1>
      <p>
        Planning a trip for work or vacation? At Roam Tavel & Tours, we've got
        your back!
      </p>
      <Button variant="contained" onClick={() => navigate(paths.packages)}>
        See Packages
      </Button>
      <SearchForms />
    </main>
  );
}

function FeaturedPackages() {
  const [packages, setPackages] = useState<TravelPackage[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPackages(
          (await travelsAPI.getTravelPackages()) as SetStateAction<
            TravelPackage[] | []
          >
        );
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.featuredPackages}>
      <h1>Featured Packages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
        laborum?
      </p>

      {error ? (
        <p>Add error occured</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel
          autoPlay
          infinite
          autoPlaySpeed={6000}
          responsive={responsive}
          className={styles.carousel}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className={styles.package}>
              <img src={pkg.image} alt="" />
              <h2>{pkg.title}</h2>
              <Rating value={pkg.rating} />
            </div>
          ))}
        </Carousel>
      )}
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
