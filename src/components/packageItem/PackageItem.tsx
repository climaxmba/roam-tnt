import { Rating } from "@mui/material";
import styles from "./packageItem.module.scss";
import {
  HotelOutlined,
  LocationOnOutlined,
  TourOutlined,
} from "@mui/icons-material";

interface PackageItemProps {
  image: string;
  title: string;
  location: string;
  hotelNightsCount?: number | null;
  toursCount: number;
  rating: number;
}

export default function PackageItem({
  image,
  title,
  location,
  hotelNightsCount = null,
  toursCount,
  rating,
}: PackageItemProps) {
  return (
    <div className={styles.container}>
      <img src={image} alt="" height={130} width={130} />
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
        <Rating value={rating} size="small" readOnly />
      </div>
    </div>
  );
}
