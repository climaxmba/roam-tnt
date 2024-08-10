import { type SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  AirplaneTicketOutlined,
  ArrowDropDown,
  BreakfastDiningTwoTone,
  HotelOutlined,
  PoolTwoTone,
  SpaTwoTone,
  StarBorderOutlined,
  TourOutlined,
  WifiTwoTone,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Rating,
} from "@mui/material";
import Loading, { LoadingError } from "../../../components/loading/loading";
import travelsAPI from "../../../_lib/modules/travelsAPI";
import {
  addToFavourites,
  removeFromFavourites,
  RootState,
  setBooking,
} from "../../../_lib/redux/store";
import { paths } from "../../../_lib/constants";

import styles from "./details.module.scss";

export default function Details() {
  const { packageId } = useParams();
  const [packages, setPackages] = useState<TravelPackage[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const favourites = useSelector((state: RootState) => state.favourites.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setPackages(
          (await travelsAPI.getTravelPackages()) as SetStateAction<
            TravelPackage[] | []
          >
        );
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [packageId]);

  const packageRequested = packages.find((pkg) => pkg.id === packageId);
  const isInFavourites = favourites.find(
    (item) => item.id === packageRequested?.id
  )
    ? true
    : false;

  const handleFavouritesButtonClick = () => {
    if (isInFavourites) {
      packageRequested && dispatch(removeFromFavourites(packageRequested?.id));
    } else
      packageRequested &&
        dispatch(addToFavourites(packageRequested as unknown as PackageItem));
  };

  const handleBooking = () => {
    dispatch(setBooking(packageRequested as unknown as PackageItem));
    navigate(paths.booking);
  };

  // Go back to parent page if package id is invalid
  if (!packageRequested) navigate(paths.packages);

  return (
    <>
      {error ? (
        <LoadingError />
      ) : loading ? (
        <Loading />
      ) : (
        <section>
          <h1
            className={styles.heading}
            style={{ backgroundImage: `url(${packageRequested?.image})` }}
          >
            {packageRequested?.title}
          </h1>
          <p className={styles.description}>
            <h2>Description</h2>
            {packageRequested?.description}
            <div className={styles.price}>
              <h3>Price:</h3>
              {packageRequested?.price.toLocaleString()} {packageRequested?.currency}
            </div>
            <span className={styles.ctaButtons}>
              <Button
                variant="outlined"
                startIcon={<StarBorderOutlined />}
                onClick={handleFavouritesButtonClick}
              >
                {isInFavourites ? "Remove" : "Add to Favourites"}
              </Button>
              <Button variant="contained" onClick={handleBooking}>
                Book Now
              </Button>
            </span>
          </p>

          {packageRequested?.hotel ? (
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <span className={styles.accordionTitle}>
                  <HotelOutlined /> Hotel
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    fontWeight: 500,
                    textAlign: "center",
                    fontSize: "large",
                  }}
                >
                  {packageRequested.hotel.title}
                </div>
                <div className={styles.ammenities}>
                  {packageRequested.hotel.ammenities.breakfast ? (
                    <div>
                      <BreakfastDiningTwoTone
                        sx={{ fontSize: 50, color: "orange" }}
                      />
                      Breakfast
                    </div>
                  ) : (
                    <></>
                  )}
                  {packageRequested.hotel.ammenities.freeWifi ? (
                    <div>
                      <WifiTwoTone sx={{ fontSize: 50, color: "dimgrey" }} />
                      Free Wifi
                    </div>
                  ) : (
                    <></>
                  )}
                  {packageRequested.hotel.ammenities.pool ? (
                    <div>
                      <PoolTwoTone sx={{ fontSize: 50, color: "royalblue" }} />
                      Pool
                    </div>
                  ) : (
                    <></>
                  )}
                  {packageRequested.hotel.ammenities.spa ? (
                    <div>
                      <SpaTwoTone sx={{ fontSize: 50, color: "salmon" }} />
                      Spa
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          ) : (
            <></>
          )}

          {packageRequested?.tours ? (
            <Accordion>
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <span className={styles.accordionTitle}>
                  <TourOutlined /> Tours
                </span>
              </AccordionSummary>
              <AccordionDetails>
                {packageRequested.tours.map((tour, i) => (
                  <Accordion key={i}>
                    <AccordionSummary expandIcon={<ArrowDropDown />}>
                      <span style={{ fontWeight: 500 }}>{tour.title}</span>
                    </AccordionSummary>
                    <AccordionDetails>{tour.description}</AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <></>
          )}

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown />}>
              <span className={styles.accordionTitle}>
                <AirplaneTicketOutlined /> Flight
              </span>
            </AccordionSummary>
            <AccordionDetails>
              {packageRequested?.flight || "None"}
            </AccordionDetails>
          </Accordion>

          <div className={styles.ratingContainer}>
            <h2>Package Rating</h2>
            <Rating value={packageRequested?.rating} size="small" readOnly />
          </div>
        </section>
      )}
    </>
  );
}
