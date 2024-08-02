import { Alarm, Flight } from "@mui/icons-material";
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
        <div>
          <Alarm />
          <span>15h 5mins</span>
        </div>
        <div>
          <span>Stops</span>
          <span>2</span>
        </div>
      </div>

      <div>
        <span>ECONOMY</span>
        <span>850USD</span>
      </div>

      <Button sx={{textTransform: "uppercase"}}>Book Now</Button>
    </div>
  );
}
