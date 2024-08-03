import { KEY } from "../constants";

interface FlightOffer {
  airline: string;
  departure: {
    date: string;
    time: string;
    location: string;
  };
  arrival: {
    date: string;
    time: string;
    location: string;
  };
  duration: string;
  stops: number;
  price: string;
  currency: string;
  cabin: "ECONOMY" | "PREMIUM ECONOMY" | "BUSINESS" | "FIRST";
}

const travelsAPI = (() => {
  async function getFlights(): Promise<FlightOffer[] | void> {
    try {
      const response = await fetch(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-08-02&adults=1&nonStop=false&max=3",
        {
          headers: {
            accept: "application/vnd.amadeus+json",
            Authorization: `Bearer ${KEY}`,
          },
        }
      );
      const flights = await response.json();
      console.log(flights);

      return [
        {
          airline: "Test Airlines",
          departure: {
            date: "12-09-2024",
            time: "06:00",
            location: "SYD",
          },
          arrival: {
            date: "12-09-2024",
            time: "18:00",
            location: "BKK",
          },
          duration: "2h, 45m",
          stops: 2,
          price: "980",
          currency: "USD",
          cabin: "PREMIUM ECONOMY",
        },
        {
          airline: "Test Airlines",
          departure: {
            date: "12-09-2024",
            time: "06:00",
            location: "SYD",
          },
          arrival: {
            date: "12-09-2024",
            time: "18:00",
            location: "BKK",
          },
          duration: "2h, 45m",
          stops: 2,
          price: "680",
          currency: "USD",
          cabin: "BUSINESS",
        },
      ];
    } catch (error) {
      console.log(error);
    }
  }
  async function getTravelPackages(): Promise<FlightOffer[] | void> {
    try {
      const response = await fetch(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-08-02&adults=1&nonStop=false&max=3",
        {
          headers: {
            accept: "application/vnd.amadeus+json",
            Authorization: `Bearer ${KEY}`,
          },
        }
      );
      const flights = await response.json();

      return flights;
    } catch (error) {
      console.log(error);
    }
  }

  return { getFlights, getTravelPackages };
})();

export default travelsAPI;
