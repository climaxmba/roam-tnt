interface SearchParams {
  searchDestination: string;
  searchLocation: string;
  searchDapartureDate: string;
  searchAdults: string;
}

interface FlightOffer {
  id: string;
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
