import { useEffect, useState } from "react";
import InputSelect from "../shared/inputSelect";
import { Address, InputSelectWardProps } from "./type";

export default function InputSelectWard(props: InputSelectWardProps) {
  const [listWard, setListWard] = useState<Address[]>([]);

  useEffect(() => {
    props.setValue(`registerInfo.${props.index}.ward`, "");
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
  }, [props.idDistrict, props.idCity]);

  return (
    <InputSelect
      placeholder="Phường xã"
      control={props.control}
      name={props.name}
      menus={listWard.map((district) => {
        return {
          value: district.areaCode,
          content: district.name,
        };
      })}
    />
  );
}
