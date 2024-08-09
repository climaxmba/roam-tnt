import type React from "react";
import { type SetStateAction, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import PackageItem from "../packageItem/PackageItem";
// import { useSelector } from "react-redux";

import styles from "./packageList.module.scss";
import Loading, { LoadingError } from "../loading/loading";

/** Requires container style: `{container: package-sectn / inline-size;}` */
export default function PackageList({
  getProducts,
  hasPackageId = false,
}: {
  getProducts: () => Promise<unknown>;
  hasPackageId: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState<TravelPackage[] | []>([]);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setPackages(
          (await getProducts()) as SetStateAction<TravelPackage[] | []>
        );
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [getProducts]);

  const filteredPackage = searchQuery
    ? packages.filter((pkg) =>
        pkg.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      )
    : packages;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <LoadingError />
      ) : (
        <div
          className={
            hasPackageId ? styles.collapsablePackages : styles.packages
          }
        >
          <h1>Travel packages</h1>
          <SearchAndFilter query={searchQuery} setQuery={setSearchQuery} />
          {filteredPackage.length ? filteredPackage.map((pkg) => (
            <PackageItem
              key={pkg.id}
              id={pkg.id}
              image={pkg.image}
              title={pkg.title}
              location={pkg.location}
              hotelNightsCount={pkg.hotelNightsCount}
              toursCount={pkg.tours?.length || 0}
              price={pkg.price}
              currency={pkg.currency}
            />
          )) : <p>No results!</p>}
        </div>
      )}
    </>
  );
}

function SearchAndFilter({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={styles.searchAndFilter}>
      <TextField
        variant="filled"
        label="Search Packages"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {/* <Button
        sx={{
          textTransform: "uppercase",
          color: "darkorange",
          ":hover": { bgcolor: "#ffeee8" },
        }}
      >
        Filters
      </Button> */}
    </div>
  );
}
