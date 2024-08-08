import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import Home from "./pages/home/Home";
import Error from "./pages/404/Error";
import Details from "./pages/packages/details/Details";
import Packages from "./pages/packages/Packages";
import Favourites from "./pages/favourites/Favourites";
import Search from "./pages/search/Search";
import Booking from "./pages/booking/Booking";

import { paths } from "./_lib/constants";
import { store } from "./_lib/redux/store";

import "./index.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          ":focus": {
            outline: "none",
          },
        },
        contained: {
          backgroundColor: "darkcyan",
          ":hover": {
            backgroundColor: "#006e6e",
          },
        },
        outlined: {
          borderColor: "darkcyan",
          color: "darkcyan",
          ":hover": {
            backgroundColor: "#effaf",
            borderColor: "darkcyan",
          },
        },
      },
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      path: paths.root,
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: paths.packages,
      element: <Packages />,
      children: [
        {
          path: paths.details,
          element: <Details />,
        },
      ],
    },
    {
      path: paths.favourites,
      element: <Favourites />,
    },
    {
      path: paths.search,
      element: <Search />,
    },
    {
      path: paths.booking,
      element: <Booking />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
