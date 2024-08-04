import { Flight } from "@mui/icons-material";
import { Button } from "@mui/material";

import styles from "./searchItems.module.scss";

export function FlightItem({
  airline,
  departure,
  arrival,
  duration,
  price,
  currency,
  stops,
  cabin,
}: FlightOffer) {
  return (
    <div className={styles.flightItemContainer}>
      <h2>{airline}</h2>

      <div className={styles.pathContainer}>
        <div className={styles.pathGroup}>
          <span>{departure.date}</span>
          <span>{departure.location}</span>
          <span>{departure.time}</span>
        </div>
        <Flight sx={{ transform: "rotate(90deg)" }} />
        <div className={styles.pathGroup}>
          <span>{arrival.date}</span>
          <span>{arrival.location}</span>
          <span>{arrival.time}</span>
        </div>
      </div>

      <div className={styles.durationContainer}>
        <span>Duration: {duration}</span>
        <span>Stops: {stops}</span>
      </div>

      <div>
        <span className={styles.cabinClass}>{cabin}</span>
        <span className={styles.price}>
          {price} {currency}
        </span>
      </div>

      <Button variant="contained">Book Now</Button>
    </div>
  );
}
