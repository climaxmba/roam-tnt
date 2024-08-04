import type React from "react";
import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";

import styles from "./searchForms.module.scss";

export default function SearchForms({
  setSearchParams,
}: {
  setSearchParams?: React.Dispatch<React.SetStateAction<SearchParams>>;
}) {
  const isInSearchPage = location.pathname.includes("search");
  const [params, setParams] = useSearchParams();
  const {
    searchDestination,
    searchLocation,
    searchDapartureDate,
    searchAdults,
  } = Object.fromEntries(params);
  const [queriedData, setQueriedData] = useState<SearchParams>({
    searchAdults,
    searchDapartureDate,
    searchDestination,
    searchLocation,
  });

  const handleSubmit = (e: FormEvent) => {
    const form = e.target;
    const data = Object.fromEntries(
      new FormData(form as HTMLFormElement)
    ) as unknown as SearchParams;
    if (isInSearchPage) {
      setQueriedData(data);
      e.preventDefault();
    }
  };

  useEffect(() => {
    isInSearchPage && setSearchParams && setSearchParams(queriedData);
    setParams({});
  }, [isInSearchPage, queriedData, setParams, setSearchParams]);

  return (
    <div className={styles.flightOffers}>
      <h2>Search Flight Offers</h2>
      <form action="/search" onSubmit={handleSubmit}>
        <TextField
          label="Location code"
          name="searchLocation"
          placeholder="Where are you?"
          variant="standard"
          defaultValue={searchLocation}
          required
        />
        <TextField
          label="Destination code"
          placeholder="Where to?"
          variant="standard"
          name="searchDestination"
          defaultValue={searchDestination}
          required
        />
        <DateField
          label="Departure date"
          name="searchDapartureDate"
          variant="standard"
          format="yyyy-MM-dd"
          defaultValue={
            searchDapartureDate ? new Date(searchDapartureDate) : new Date()
          }
          required
        />
        <TextField
          label="Adults"
          name="searchAdults"
          variant="standard"
          type="number"
          inputProps={{ max: 9 }}
          defaultValue={searchAdults || 1}
          required
        />

        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
