import { Box, Button, debounce, Grid, Typography } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import FormControlLabelCustom from "../shared/formControlLable";
import InputPhone from "../shared/inputPhone";
import { yupResolver } from "@hookform/resolvers/yup";
import InputRadio from "../shared/inputRadio";
import InputSelect from "../shared/inputSelect";
import InputText from "../shared/inputText";
import { VaLidationRegister1Form } from "./validate";
import { useCallback, useEffect, useState } from "react";
import { Address, FormPropsInterface, ValueInputForm } from "./type";
import useListCity from "../hook/useListCity";




export default function Register1(props: FormPropsInterface) {
  const { handleFormSubmit } = props;
  const [isGender, setIsGender] = useState<boolean>(false);
  const [listCity, setListCity] = useState<Address[]>([]);
  const [listDistrict, setListDistrict] = useState<Address[]>([]);
  const [listWard, setListWard] = useState<Address[]>([]);


  const { control, handleSubmit,setValue } = useForm<ValueInputForm>({
    defaultValues: {
      userName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      genderOther: "",
      city: "",
      district: "",
      ward: "",
      gender: "0",
    },
    resolver: yupResolver(VaLidationRegister1Form({ isGender })),
  });

  const onSubmit = (value: ValueInputForm) => {
    const formValues: ValueInputForm = {
      userName: value.userName,
      email: value.email,
      phone: value.phone,
      password: value.password,
      rePassword: value.rePassword,
      genderOther: value.genderOther,
      city: value.city,
      district: value.district,
      ward: value.ward,
    };
    handleFormSubmit(formValues);
  };
  // useEffect(() => {
  //   fetch("https://api.aizalog.com/sale/area/province")
  //     .then((res) => res.json())
  //     .then((data) => setListCity(data));
  // }, []);

  const watchGender = useWatch({
    control,
    name: "gender",
  });

  const idCity = useWatch({
    control,
    name: "city",
  });

  const idDistrict = useWatch({
    control,
    name: "district",
  });

  const handleSearchDistrict = (e:any) => {

  };

  useEffect(() => {
    setValue('district','')
    setValue('ward','')
    if (idCity) {
      fetch(`https://api.aizalog.com/sale/area/province/${idCity}/district`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setListDistrict(data);
        });
    }
  }, [idCity]);
 
  useEffect(() => {
    // console.log('idDistrict',idDistrict)
    if (idDistrict) {
      fetch(`https://api.aizalog.com/sale/area/district/${idDistrict}/precinct`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setListWard(data);
        });
    } else {
      setListWard([]);
    }
  }, [idDistrict]);

  useEffect(() => {
    if (watchGender == "2") {
      setIsGender(true);
    } else {
      setIsGender(false);
    }
  }, [watchGender]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={2} paddingTop={2}>
        <Grid
          container
          sx={{
            gap: 2,
            columns: 3,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            marginBottom: 2,
          }}
        >
          <Grid item>
            <FormControlLabelCustom>User name</FormControlLabelCustom>
            <InputText
              control={control}
              name="userName"
              placeholder="Nhập user name"
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Email</FormControlLabelCustom>
            <InputText
              control={control}
              name="email"
              placeholder="Nhập email"
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Phone</FormControlLabelCustom>
            <InputPhone
              control={control}
              name="phone"
              placeholder="Nhập số điện thoại"
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Password</FormControlLabelCustom>
            <InputText
              control={control}
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>RePassword</FormControlLabelCustom>
            <InputText
              control={control}
              name="rePassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </Grid>

          <Grid item>
            {" "}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <InputRadio
                fontSize={14}
                name="gender"
                control={control}
                radioList={[
                  {
                    value: "0",
                    label: "Nam",
                  },
                  {
                    value: "1",
                    label: "Nữ",
                  },
                  {
                    value: "2",
                    label: "Khác",
                  },
                ]}
              />
            </Box>
            <Box>
              <InputText
                name="genderOther"
                control={control}
                disabled={!isGender}
                placeholder="Giới tính khác"
              />
            </Box>
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Thành phố</FormControlLabelCustom>
            <InputSelect
              placeholder="Thành phố"
              control={control}
              name="city"
              onChange={(e) => handleSearchDistrict(e)}
              menus={useListCity()}
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Quận huyện</FormControlLabelCustom>
            <InputSelect
              // onChange={handleSearchWard}
              placeholder="Quận huyện"
              control={control}
              name="district"
              menus={listDistrict.map((district) => {
                return {
                  value: district.areaCode,
                  content: district.name,
                };
              })}
            />
          </Grid>
          <Grid item>
            <FormControlLabelCustom>Phường xã</FormControlLabelCustom>
            <InputSelect
              placeholder="Phường xã"
              control={control}
              name="ward"
              menus={listWard.map((ward) => {
                return {
                  value: ward.areaCode,
                  content: ward.name,
                };
              })}
            />
          </Grid>
        </Grid>
        <Box>
          <Button variant="contained" type="submit">
            Lấy thông tin
          </Button>
        </Box>
      </Box>
    </form>
  );
}
