// import { useSearchParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import SearchForms from "../../components/searchForms/SearchForms";
import { FlightItem } from "../../components/searchItems/SearchItem";

import styles from "./search.module.scss";

export default function Search() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   console.log(Object.fromEntries(searchParams));

  return (
    <Layout>
      <div className={styles.container}>
        <SearchForms />
        <section className={styles.list}>
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
        </section>
      </div>
    </Layout>
  );
}
