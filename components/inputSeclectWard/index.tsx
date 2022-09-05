import { useEffect, useState } from "react";
import InputSelect from "../shared/inputSelect";
import { InputSelectWardProps } from "./type";

export default function InputSelectWard(props: InputSelectWardProps) {
  const [listWard, setListWard] = useState<any>([]);
  useEffect(() => {

    if (props.idDistrict) {
      fetch(
        `https://api.aizalog.com/sale/area/district/${props.idDistrict}/precinct`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setListWard(data);
        })
        .catch((e) => console.log(e));
    }
  }, [props.idDistrict]);

  return (
    <InputSelect
      placeholder="Quận huyện"
      control={props.control}
      name={props.name}
      menus={listWard.map((district: any) => {
        return {
          value: district.areaCode,
          content: district.name,
        };
      })}
    />
  );
}
