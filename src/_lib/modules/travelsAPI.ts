import { KEY, SECRET } from "../constants";

const travelsAPI = (() => {
  const _token: { value: string; expired: boolean } = {
    value: "",
    expired: true,
  };

  async function _getAuthorization(): Promise<string> {
    if (_token.value && !_token.expired) return _token.value;

    const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
    const data = {
      grant_type: "client_credentials",
      client_id: KEY,
      client_secret: SECRET,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(`Error fetching token: ${response.statusText}`);

      const jsonResponse: {
        type: string;
        username: string;
        application_name: string;
        client_id: string;
        token_type: "Bearer";
        access_token: string;
        expires_in: number;
        state: "approved" | "expired";
        scope: string;
      } = await response.json();

      _token.expired = false;
      _token.value = jsonResponse["access_token"];

      setTimeout(() => {
        _token.expired = true;
      }, jsonResponse["expires_in"] * 1000);

      return _token.value;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throw the error for further handling
    }
  }

  async function getFlights(
    params: SearchParams
  ): Promise<FlightOffer[] | void> {
    try {
      const authorization = await _getAuthorization();
      const response = await fetch(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${params.searchLocation}&destinationLocationCode=${params.searchDestination}&departureDate=${params.searchDapartureDate}&adults=${params.searchAdults}&nonStop=false&max=15`,
        {
          headers: {
            accept: "application/vnd.amadeus+json",
            Authorization: `Bearer ${authorization}`,
          },
        }
      );
      const flights: FlightOffersResponse = await response.json();

      if (flights.errors) throw new Error(flights.errors[0].title);
      else
        return flights.data?.map((flight) => {
          const departureDate =
              flight.itineraries[0].segments[0].departure.at.split("T"),
            lastIteneraryIndex = flight.itineraries.length - 1,
            lastSegmentIndex =
              flight.itineraries[lastIteneraryIndex].segments.length - 1,
            arrivalDate =
              flight.itineraries[lastIteneraryIndex].segments[
                lastSegmentIndex
              ].arrival.at.split("T");
          return {
            id: flight.id,
            airline:
              flights.dictionaries?.carriers[
                flight.itineraries[0].segments[0].carrierCode
              ],
            departure: {
              date: departureDate[0],
              location: flight.itineraries[0].segments[0].departure.iataCode,
              time: departureDate[1],
            },
            arrival: {
              date: arrivalDate[0],
              location:
                flight.itineraries[lastIteneraryIndex].segments[
                  lastSegmentIndex
                ].arrival.iataCode,
              time: arrivalDate[1],
            },
            duration: flight.itineraries[0].duration,
            stops: flight.itineraries
              .flatMap((itnerary) => itnerary.segments)
              .reduce((prev, segment) => prev + segment.numberOfStops, 0),
            price: flight.price.total,
            currency: flight.price.currency,
            cabin: flight.travelerPricings[0].fareDetailsBySegment[0].cabin,
          } as unknown as FlightOffer;
        });
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }
  async function getTravelPackages(): Promise<FlightOffer[] | void> {
    try {
      const response = await fetch("/travelPackages.json");
      const flights = await response.json();

      return flights;
    } catch (error) {
      console.log(error);
    }
  }

  return { getFlights, getTravelPackages };
})();

export default travelsAPI;
