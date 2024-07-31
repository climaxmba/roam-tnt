import { Button } from "@mui/material";
import Layout from "../../components/layout/Layout";

import styles from "./home.module.scss";
import SearchForms from "../../components/searchForms/SearchForms";

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
  return (
    <section className={styles.popularDestinations}>
      <h1>Popular Destinations</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div></div>
    </section>
  );
}
