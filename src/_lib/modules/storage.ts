type Favourites = PackageItem[] | [];
interface User {
  userName: string;
  email: string;
  phone: string;
}

const storage = (() => {
  function getUser(): User | void {
    try {
      return (
        JSON.parse(localStorage.getItem("user") || "") || {
          userName: "",
          email: "",
          phone: "",
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  function setUser(userObj: User) {
    localStorage.setItem("user", JSON.stringify(userObj));
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
    getFavourites,
    setFavourites,
  };
})();

export default storage;
