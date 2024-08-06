import { SetStateAction, useEffect, useState } from "react";
import PackageItem from "../packageItem/PackageItem";
// import { useSelector } from "react-redux";

import styles from "./packageList.module.scss";
import { Button, TextField } from "@mui/material";

/** Requires container style: `{container: package-sectn / inline-size;}` */
export default function PackageList({
  getProducts,
  hasPackageId = false,
}: {
  getProducts: () => Promise<unknown>;
  hasPackageId: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPackages((await getProducts()) as SetStateAction<never[]>);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [getProducts]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <div
          className={
            hasPackageId ? styles.collapsablePackages : styles.packages
          }
        >
          <h1>Travel packages</h1>
          <SearchAndFilter />
          {packages.map((_, i) => (
            <PackageItem
              image="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate."
              location="Paris, FR"
              hotelNightsCount={8}
              toursCount={2}
              rating={3}
              key={i}
            />
          ))}
        </div>
      )}
    </>
  );
}

function SearchAndFilter() {
  return (
    <div className={styles.searchAndFilter}>
      <TextField variant="filled" label="Search Packages" />
      <Button
        sx={{
          textTransform: "uppercase",
          color: "darkorange",
          ":hover": { bgcolor: "#ffeee8" },
        }}
      >
        Filters
      </Button>
    </div>
  );
}
