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

interface FlightOffersResponse {
  meta?: {
    count: number;
    links: {
      self: string;
    };
  };
  data?: {
    type: "flight-offer";
    id: string;
    source: string;
    instantTicketingRequired: boolean;
    nonHomogeneous: boolean;
    oneWay: boolean;
    isUpsellOffer: boolean;
    lastTicketingDate: string;
    lastTicketingDateTime: string;
    numberOfBookableSeats: number;
    itineraries: {
      duration: string;
      segments: {
        departure: {
          iataCode: string;
          terminal: string;
          at: string;
        };
        arrival: {
          iataCode: string;
          terminal: string;
          at: string;
        };
        carrierCode: string;
        number: string;
        aircraft: {
          code: string;
        };
        operating: {
          carrierCode: string;
        };
        duration: string;
        id: string;
        numberOfStops: number;
        blacklistedInEU: boolean;
      }[];
    }[];
    price: {
      currency: string;
      total: string;
      base: string;
      fees: {
        amount: string;
        type: "SUPPLIER" | "TICKETING";
      }[];
      grandTotal: string;
    };
    pricingOptions: {
      fareType: [string];
      includedCheckedBagsOnly: boolean;
    };
    validatingAirlineCodes: [string];
    travelerPricings: [
      {
        travelerId: string;
        fareOption: string;
        travelerType: string;
        price: {
          currency: string;
          total: string;
          base: string;
        };
        fareDetailsBySegment: {
          segmentId: string;
          cabin: string;
          fareBasis: string;
          brandedFare: string;
          brandedFareLabel: string;
          class: string;
          includedCheckedBags: {
            quantity: number;
          };
          amenities: {
            description: string;
            isChargeable: boolean;
            amenityType: string;
            amenityProvider: {
              name: string;
            };
          }[];
        }[];
      }
    ];
  }[];
  dictionaries?: {
    locations: {
      [property: string]: {
        cityCode: string;
        countryCode: string;
      };
    };
    aircraft: {
      [property: string]: string;
    };
    currencies: {
      [property: string]: string;
    };
    carriers: {
      [property: string]: string;
    };
  };
  errors?: {
    status: number;
    code: number;
    title: string;
    detail?: string;
    source?: {
      parameter?: string;
      example?: string;
    };
  }[];
}

interface PackageItem {
  id: string;
  image: string;
  title: string;
  location: string;
  hotelNightsCount?: number | null;
  toursCount: number;
  price: number;
  currency: string;
}

interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  currency: string;
  rating: number;
  flight?: string;
  hotelNightsCount: number;
  hotel?: {
    title: string;
    ammenities: {
      breakfast: boolean;
      pool: boolean;
      spa: boolean;
      freeWifi: boolean
    }
  };
  tours?: {
    title: string;
    description: string;
  }[];
}
