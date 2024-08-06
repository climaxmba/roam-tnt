// import styles from "./details.module.scss";

import {
  AirplaneTicketOutlined,
  ArrowDropDown,
  HotelOutlined,
  TourOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
} from "@mui/material";

export default function Details() {
  return (
    <div>
      <img src="" alt="" />

      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum
          adipisci iusto necessitatibus architecto at alias blanditiis. Id,
          natus ea.
        </p>
      </div>

      <Rating value={4} size="small" readOnly />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <HotelOutlined /> Hotel
        </AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <TourOutlined /> Tour
        </AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          <AirplaneTicketOutlined /> Flight
        </AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>
    </div>
  );
}
