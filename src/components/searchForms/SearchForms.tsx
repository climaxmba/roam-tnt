import { Button, TextField } from "@mui/material";

import styles from "./searchForms.module.scss";

export default function SearchForms() {
  return (
    <div className={styles.flightOffers}>
      <h2>Search Flight Offers</h2>
      <form action="">
        <TextField
          label="Destination"
          placeholder="Where to?"
          variant="standard"
          name="searchDestination"
          required
        />
        <TextField
          label="Location"
          placeholder="Where are you?"
          variant="standard"
          name="searchLocation"
          required
        />
        <TextField
          label="Departure date"
          name="searchDapartureDate"
          variant="standard"
          required
        />
        <TextField
          label="Adults"
          name="searchAdults"
          variant="standard"
          type="number"
          inputProps={{ max: 9 }}
          defaultValue={1}
          required
        />

        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
