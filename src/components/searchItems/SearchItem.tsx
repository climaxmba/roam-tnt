import { Flight } from "@mui/icons-material";
import { Button } from "@mui/material";

import styles from "./searchItems.module.scss";

export function FlightItem() {
  return (
    <div className={styles.flightItemContainer}>
      <h2>British Airlines</h2>

      <div className={styles.pathContainer}>
        <div className={styles.pathGroup}>
          <span>DD-MM-YYYY</span>
          <span>SYD</span>
          <span>13:00</span>
        </div>
        <Flight sx={{ transform: "rotate(90deg)" }} />
        <div className={styles.pathGroup}>
          <span>DD-MM-YYYY</span>
          <span>SYD</span>
          <span>13:00</span>
        </div>
      </div>

      <div className={styles.durationContainer}>
        <span>Duration: 15h 5mins</span>
        <span>Stops: 2</span>
      </div>

      <div>
        <span className={styles.cabinClass}>ECONOMY</span>
        <span className={styles.price}>850 USD</span>
      </div>

      <Button variant="contained">Book Now</Button>
    </div>
  );
}
