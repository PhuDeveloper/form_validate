import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useFieldArray, useForm } from "react-hook-form";
import FormControlLabelCustom from "../shared/formControlLable";
import InputPhone from "../shared/inputPhone";
import InputRadio from "../shared/inputRadio";
import InputSelect from "../shared/inputSelect";
import InputText from "../shared/inputText";
import { VaLidationRegister2Form } from "./validate";
import { RegisterInfoInterface } from "./type";

export default function Register2(props: any) {
  const { handleFormSubmit } = props;
  const [isGender, setIsGender] = useState<boolean>(false);
  const { control, handleSubmit, setValue } = useForm<any>({
    defaultValues: {
      userName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      genderOther: "",
      gender: "0",
    },
    resolver: yupResolver(VaLidationRegister2Form({ isGender })),
  });
  const onSubmit = (value: RegisterInfoInterface) => {
    const formValues: RegisterInfoInterface = {
      userName: value.userName,
      email: value.email,
      phone: value.phone,
      password: value.password,
      rePassword: value.rePassword,
      genderOther: value.genderOther,
    };
    handleFormSubmit(formValues);
  };
  const {
    fields: registerField,
    append: registerAppend,
    remove: registerRemove,
  } = useFieldArray({
    control,
    name: "registerInfo",
  });
  const handleAddRegister = () => {
    registerAppend({
      useName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      gender: "",
      genderOther: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={2} paddingTop={2}>
        <AddCircleOutlineIcon onClick={handleAddRegister} />
      </Box>
      {registerField.map((field, index) => {
        return (
          <Box px={2} paddingTop={2}>
            {registerField.length > 1 && (
              <RemoveCircleOutlineOutlined
                onClick={() => registerRemove(index)}
              />
            )}
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
                    // disabled={!isGender}
                    placeholder="Giới tính khác"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}

      <Box px={2} paddingTop={2}>
        <Button variant="contained" type="submit">
          Lấy thông tin
        </Button>
      </Box>
    </form>
  );
}
