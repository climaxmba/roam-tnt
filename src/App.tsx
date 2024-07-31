import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import { paths } from "./_lib/constants";
import Home from "./pages/home/Home";
import Error from "./pages/404/Error";
import Login from "./pages/login/Login";
import Details from "./pages/packages/details/Details";
import Packages from "./pages/packages/Packages";
import Favourites from "./pages/favourites/Favourites";

import "./index.scss";

// declare module "@mui/material/styles" {
//   interface Theme {
//     color: {
//       accent: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     color?: {
//       accent?: string;
//     };
//   }
// }

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
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
        }
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
      path: paths.login,
      element: <Login />,
    },
    {
      path: paths.favourites,
      element: <Favourites />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
