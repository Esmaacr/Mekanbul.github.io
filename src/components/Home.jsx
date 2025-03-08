import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import Header from "./Header";
import React from "react";
const Home = () => {
   //Şimdilik veri statik. Backend bitince Rest API'den gelecek.
  const venues = [
    {
      _id: 1,
      name: "Bilgisayar Mühendisliği",
      rating: 5,
      distance: 1,
      address: "SDÜ",
      foodanddrink: ["Web", "Yazılım", "ASY"],
    },
    {
      _id: 2,
      name: "iyaş",
      rating: 4,
      distance: 1,
      address: "Çarşı",
      foodanddrink: ["AVM", "Titans", "Arabica"],
    },
  ];
  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        type="text"
        isFocused
        onInputChange={() => null}
        value={" "}
      />
      <hr />
      <div className="row">
        <VenueList venues={venues} />
      </div>
    </div>
  );
};

export default Home;
