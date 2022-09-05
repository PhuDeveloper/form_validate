import { useEffect, useState } from "react";
import InputSelect from "../shared/inputSelect";
import { InputSelectCityProps } from "./type";

export default function InputSelectCity(props: InputSelectCityProps) {
    const [listCity, setListCity] = useState<any>([]);

    useEffect(() => {
      fetch("https://api.aizalog.com/sale/area/province")
        .then((res) => res.json())
        .then((data) => setListCity(data));
    },[]);

  return (
    <InputSelect
      placeholder="Thành phố"
      control={props.control}
      name={props.name}
      menus={listCity.map((district: any) => {
        return {
          value: district.areaCode,
          content: district.name,
        };
      })}
    />
  );
}
