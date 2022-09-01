import { useEffect, useState } from "react";
import { Address } from "./type";
const useListCity = () => {
  const [listCity, setListCity] = useState<Address[]>([]);

  useEffect(() => {
    fetch("https://api.aizalog.com/sale/area/province")
      .then((res) => res.json())
      .then((data) => setListCity(data));
  },[]);

  const dataCity = listCity.map((city) => {
    return {
      value: city.areaCode,
      content: city.name,
    };
  });

  return dataCity;
};

export default useListCity;
