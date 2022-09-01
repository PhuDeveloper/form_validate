import { useEffect, useState } from "react";
import { Address, IdCity } from "./type";
const useListDistrict = (props: IdCity) => {
  const { areaCode } = props;
  const [listDistrict, setListDistrict] = useState<Address[]>([]);

  useEffect(() => {
    fetch(`https://api.aizalog.com/sale/area/province/${areaCode}/district`)
      .then((res) => res.json())
      .then((data) => setListDistrict(data));
  }, [areaCode]);

  const dataDistrict = listDistrict.map((district) => {
    return {
      value: district.areaCode,
      content: district.name,
    };
  });

  return dataDistrict;
};

export default useListDistrict;
