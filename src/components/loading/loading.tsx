import { Button } from "@mui/material";
import styles from "./loading.module.scss";
import { CrisisAlertOutlined } from "@mui/icons-material";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.ringsContainer}>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
        <div className={styles.rings}></div>
      </div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}

export function LoadingError({ message = "An Error Occured!" }) {
  return (
    <div className={styles.errorContainer}>
      <CrisisAlertOutlined />
      <p className={styles.errorMessage}>{message}</p>
      <Button onClick={() => location.reload()}
        sx={{
          color: "blueviolet",
          ":hover": { bgcolor: "#8a2be21f" },
          ":focus": { outline: "none" },
        }}
      >
        Refresh
      </Button>
    </div>
  );
}
