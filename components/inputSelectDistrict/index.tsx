import { useEffect, useState } from "react";
import InputSelect from "../shared/inputSelect";
import { Address, InputSelectDistrictProps } from "./type";

export default function InputSelectDistrict(props: InputSelectDistrictProps) {
  const [listDistrict, setListDistrict] = useState<Address[]>([]);

  useEffect(() => {
    props.setValue("district", "");
    props.setValue("ward", "");
    if (props.idCity) {
      fetch(
        `https://api.aizalog.com/sale/area/province/${props.idCity}/district`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setListDistrict(data);
        })
        .catch((e) => console.log(e));
    }
  }, [props.idCity]);

  return (
    <InputSelect
      placeholder="Quận huyện"
      control={props.control}
      name={props.name}
      menus={listDistrict.map((district) => {
        return {
          value: district.areaCode,
          content: district.name,
        };
      })}
    />
  );
}
