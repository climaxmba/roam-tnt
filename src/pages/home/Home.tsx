import {
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
  Button,
} from "@mui/material";
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
      <h1>Experience the <span className={styles.exotic}>Exotic</span> Beauty!</h1>
      <p>
        Planning a trip for work or vacation?
        At Roam Tavel & Tours, we've got your back!
      </p>
      <Button variant="contained">See Packages</Button>
      {/* <Accordion>
        <AccordionSummary expandIcon="b">h</AccordionSummary>
        <AccordionDetails>d</AccordionDetails>
      </Accordion> */}
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
