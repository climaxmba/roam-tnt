type Favourites = PackageItem[] | [];

interface User {
  userName: string;
  email: string;
  phone: string;
}

const storage = (() => {
  function getUser(): User {
    try {
      return (
        JSON.parse(localStorage.getItem("user") as string) || {
          userName: "",
          email: "",
          phone: "",
        }
      );
    } catch (error) {
      console.log(error);
      return {
        userName: "",
        email: "",
        phone: "",
      };
    }
  }

  function setUser(userObj: User) {
    localStorage.setItem("user", JSON.stringify(userObj));
  }

  function getBooking(): PackageItem | undefined {
    try {
      return JSON.parse(localStorage.getItem("booking") as string);
    } catch (error) {
      console.log(error);
    }
  }

  function setBooking(booking: PackageItem) {
    localStorage.setItem("booking", JSON.stringify(booking));
  }

  function clearBooking() {
    localStorage.removeItem("booking");
  }

  function getFavourites(): Favourites {
    try {
      return JSON.parse(localStorage.getItem("favourites") as string) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  function setFavourites(favArr: Favourites) {
    localStorage.setItem("favourites", JSON.stringify(favArr));
  }

  return {
    getUser,
    setUser,
    getBooking,
    setBooking,
    clearBooking,
    getFavourites,
    setFavourites,
  };
})();

export default storage;
