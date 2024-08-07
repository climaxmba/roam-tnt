import { useParams } from "react-router-dom";
import {
  AirplaneTicketOutlined,
  ArrowDropDown,
  HotelOutlined,
  StarBorderOutlined,
  TourOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Rating,
} from "@mui/material";
import { type SetStateAction, useEffect, useState } from "react";
import travelsAPI from "../../../_lib/modules/travelsAPI";

import styles from "./details.module.scss";
import Loading, { LoadingError } from "../../../components/loading/loading";

export default function Details() {
  const { packageId } = useParams();
  const [packages, setPackages] = useState<TravelPackage[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
            {packageRequested?.description}
            <div className={styles.ctaButtons}>
              <Button variant="outlined" startIcon={<StarBorderOutlined />}>
                Add to Favourites
              </Button>
              <Button variant="contained">Book Now</Button>
            </div>
          </p>

          {packageRequested?.hotel ? (
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <span className={styles.accordionTitle}>
                  <HotelOutlined /> Hotel
                </span>
              </AccordionSummary>
              <AccordionDetails>
                {packageRequested?.hotel.title}
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
                {packageRequested.tours[0].title}
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
            <AccordionDetails>{packageRequested?.flight || "None"}</AccordionDetails>
          </Accordion>

          <Rating value={packageRequested?.rating} size="small" readOnly />
        </section>
      )}
    </>
  );
}
