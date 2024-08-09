import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import PackageItem from "../../components/packageItem/PackageItem";
import { RootState } from "../../_lib/redux/store";

import styles from "./favourites.module.scss";

export default function Favourites() {
  const favourites = useSelector(
    (state: RootState ) => state.favourites.value
  );

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Favourite Packages</h1>

        <div className={styles.favouritesContainer}>
          {favourites.length ? favourites.map((item) => (
            <PackageItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              hotelNightsCount={item.hotelNightsCount}
              toursCount={item.toursCount}
              price={item.price}
              currency={item.currency}
            />
          )) : <p style={{fontStyle: "italic"}}>Noting's here</p>}
        </div>
      </div>
    </Layout>
  );
}
