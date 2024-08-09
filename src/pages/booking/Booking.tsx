import { Navigate } from "react-router-dom";
import { type FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField } from "@mui/material";
import Layout from "../../components/layout/Layout";
import PackageItem from "../../components/packageItem/PackageItem";
import ModalCheckout from "../../components/modalCheckout/ModalCheckout";
import { clearBooking, RootState, setUserDetails } from "../../_lib/redux/store";
import { paths } from "../../_lib/constants";

import styles from "./booking.module.scss";

export default function Booking() {
  const [modalOpen, setModalOpen] = useState(false);
  const booking = useSelector((state: RootState) => state.user.booking);
  const userDetails = useSelector((state: RootState) => state.user.details);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { bookingName, bookingEmail, bookingPhone } = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    setModalOpen(true);
    dispatch(
      setUserDetails({
        userName: bookingName as string,
        email: bookingEmail as string,
        phone: bookingPhone as string,
      })
    );
    dispatch(clearBooking())
    e.preventDefault();
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Booking</h1>
        {booking ? (
          <>
            <div
              style={{ display: "grid", width: "clamp(200px, 100%, 800px)" }}
            >
              <PackageItem
                id={booking.id}
                image={booking.image}
                title={booking.title}
                location={booking.location}
                hotelNightsCount={booking.hotelNightsCount}
                toursCount={booking.toursCount}
                rating={booking.rating}
              />
            </div>

            <form action="" onSubmit={handleSubmit} className={styles.form}>
              <p
                style={{ fontWeight: 500, fontSize: "large", margin: "10px 0" }}
              >
                Please fill in your details to book this package.
              </p>
              <TextField
                label="Name"
                variant="standard"
                name="bookingName"
                defaultValue={userDetails.userName}
                required
              />
              <TextField
                label="Email"
                variant="standard"
                name="bookingEmail"
                type="email"
                defaultValue={userDetails.email}
                required
              />
              <TextField
                label="Phone"
                variant="standard"
                name="bookingPhone"
                type="number"
                defaultValue={userDetails.phone}
                required
              />
              <Button type="submit" variant="contained">
                Book Package
              </Button>
            </form>

            <ModalCheckout open={modalOpen} />
          </>
        ) : (
          <Navigate to={paths.packages} />
        )}
      </div>
    </Layout>
  );
}
