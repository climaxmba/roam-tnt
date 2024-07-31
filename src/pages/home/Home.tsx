import { Button } from "@mui/material";
import Layout from "../../components/layout/Layout";

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
      <h1>Heading Text</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis suscipit
        incidunt reiciendis et nesciunt perspiciatis vero non molestias iste
        ullam.
      </p>
      <Button variant="contained">See Packages</Button>
      <div className={styles.flightOffers}>
        <h2>Search Flight Offers</h2>
        <form action="">
          <div className={styles.field}>
            <label htmlFor="search-destination">Destination</label>
            <input type="text" id="search-destination" />
          </div>
          <div className={styles.field}>
            <label htmlFor="search-location">Location</label>
            <input type="text" id="search-location" />
          </div>
          <div className={styles.field}>
            <label htmlFor="search-maxprice">Max Price (EUR)</label>
            <input type="number" id="search-maxprice" />
          </div>
          <div className={styles.field}>
            <label htmlFor="search-cabin">Cabin</label>
            <input type="text" id="search-cabin" />
          </div>

          <Button variant="outlined" type="submit">
            Search
          </Button>
        </form>
      </div>
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
  return (
    <section className={styles.popularDestinations}>
      <h1>Popular Destinations</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div></div>
    </section>
  );
}
