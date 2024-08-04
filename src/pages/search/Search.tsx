import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchForms from "../../components/searchForms/SearchForms";
import { FlightItem } from "../../components/searchItems/SearchItem";

import styles from "./search.module.scss";
import travelsAPI from "../../_lib/modules/travelsAPI";

export default function Search() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchAdults: "",
    searchDapartureDate: "",
    searchDestination: "",
    searchLocation: "",
  });
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [flightOffers, setFlightOffers] = useState<FlightOffer[] | []>([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await travelsAPI.getFlights(searchParams);
        data && setFlightOffers(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      }
    })();
  }, [searchParams]);

  return (
    <Layout>
      <div className={styles.container}>
        <SearchForms setSearchParams={setSearchParams} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <section className={styles.list}>
            {flightOffers.map((offer) => (
              <FlightItem {...offer} key={offer.id} />
            ))}
          </section>
        )}
      </div>
    </Layout>
  );
}
