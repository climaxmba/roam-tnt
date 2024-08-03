import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import styles from "./searchForms.module.scss";
import { DateField } from "@mui/x-date-pickers";

interface SearchParams {
  searchDestination: string;
  searchLocation: string;
  searchDapartureDate: string;
  searchAdults: string;
}

export default function SearchForms() {
  const isInSearchPage = location.pathname.includes("search");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchDestination,
    searchLocation,
    searchDapartureDate,
    searchAdults,
  } = Object.fromEntries(searchParams);
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

  const search = (data: SearchParams) => {
    // Refresh List
    console.log(data);
  };

  useEffect(() => {
    search(queriedData);
    setSearchParams({});
  }, [queriedData, setSearchParams]);

  return (
    <div className={styles.flightOffers}>
      <h2>Search Flight Offers</h2>
      <form action="/search" onSubmit={handleSubmit}>
        <TextField
          label="Destination"
          placeholder="Where to?"
          variant="standard"
          name="searchDestination"
          defaultValue={searchDestination}
          required
        />
        <TextField
          label="Location"
          name="searchLocation"
          placeholder="Where are you?"
          variant="standard"
          defaultValue={searchLocation}
          required
        />
        <DateField
          label="Departure date"
          name="searchDapartureDate"
          variant="standard"
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
