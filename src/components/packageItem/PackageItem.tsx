import { useNavigate } from "react-router-dom";
import {
  HotelOutlined,
  LocationOnOutlined,
  TourOutlined,
} from "@mui/icons-material";
import { paths } from "../../_lib/constants";

import styles from "./packageItem.module.scss";

export default function PackageItem({
  id,
  image,
  title,
  location,
  hotelNightsCount = null,
  toursCount,
  price,
  currency,
}: PackageItem) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      role="button"
      title="Click to see details"
      onClick={() => navigate(`${paths.packages}/${id}`)}
    >
      <img src={image} alt="Package image" height={130} width={130} />
      <div>
        <h2>{title}</h2>
        <div className={styles.features}>
          <span>
            <LocationOnOutlined />
            {location}
          </span>
          <span>
            <TourOutlined /> {toursCount} {toursCount === 1 ? "Site" : "Sites"}
          </span>
          {hotelNightsCount !== null ? (
            <span>
              <HotelOutlined /> {hotelNightsCount}
              {hotelNightsCount === 1 ? " Night" : " Nights"}
            </span>
          ) : (
            ""
          )}
        </div>
        <p className={styles.price}>{price} {currency}</p>
      </div>
    </div>
  );
}
