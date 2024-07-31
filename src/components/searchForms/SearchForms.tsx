import Button from "@mui/material/Button";

import styles from "./searchForms.module.scss";
import { TextField } from "@mui/material";

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
        />
        <TextField
          label="Location"
          placeholder="Where are you?"
          variant="standard"
          name="searchLocation"
        />
        <TextField
          label="Max Price (EUR)"
          name="searchMaxPrice"
          variant="standard"
        />
        <TextField label="Cabin" name="searchCabin" variant="standard" />

        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
