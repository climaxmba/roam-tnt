import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import PackageItem from "../../components/packageItem/PackageItem";

import styles from "./favourites.module.scss";

export default function Favourites() {
  const favourites = useSelector(
    (state: { user: { favourites: PackageItem[] } }) => state.user.favourites
  );

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Favourite Packages</h1>

        <div className={styles.favouritesContainer}>
          {favourites.map((item) => (
            <PackageItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              hotelNightsCount={item.hotelNightsCount}
              toursCount={item.toursCount}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
