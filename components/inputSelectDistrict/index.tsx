import { useEffect, useState } from "react";
import InputSelect from "../shared/inputSelect";
import { InputSelectDistrictProps } from "./type";

export default function InputSelectDistrict(props: InputSelectDistrictProps) {
  const [listDistrict, setListDistrict] = useState<any>([]);

  useEffect(() => {
    if (props.idCity) {
    //   props.setValue("district", "");
    //   props.setValue("ward", "");
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
      menus={listDistrict.map((district: any) => {
        return {
          value: district.areaCode,
          content: district.name,
        };
      })}
    />
  );
}
