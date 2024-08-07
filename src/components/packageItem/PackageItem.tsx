import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import {
  HotelOutlined,
  LocationOnOutlined,
  TourOutlined,
} from "@mui/icons-material";
import { paths } from "../../_lib/constants";

import styles from "./packageItem.module.scss";

interface PackageItemProps {
  id: string;
  image: string;
  title: string;
  location: string;
  hotelNightsCount?: number | null;
  toursCount: number;
  rating: number;
}

export default function PackageItem({
  id,
  image,
  title,
  location,
  hotelNightsCount = null,
  toursCount,
  rating,
}: PackageItemProps) {
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
        <Rating value={rating} size="small" readOnly />
      </div>
    </div>
  );
}
