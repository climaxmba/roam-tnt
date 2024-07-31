import { KEY } from "../constants";

const travelsAPI = (() => {
  async function getFlights(): Promise<string[] | void> {
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
      const flights: string[] = await response.json();

      return flights;
    } catch (error) {
      console.log(error);
    }
  }
  async function getTravelPackages(): Promise<string[] | void> {
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
      const flights: string[] = await response.json();

      return flights;
    } catch (error) {
      console.log(error);
    }
  }

  return { getFlights, getTravelPackages };
})();

export default travelsAPI;
