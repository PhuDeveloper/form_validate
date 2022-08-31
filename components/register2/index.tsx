import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import FormControlLabelCustom from "../shared/formControlLable";
import InputPhone from "../shared/inputPhone";
import InputRadio from "../shared/inputRadio";
import InputSelect from "../shared/inputSelect";
import InputText from "../shared/inputText";
import { VaLidationRegister2Form } from "./validate";
import {
  FormPropsInterface,
  ListInfoRegisterInterface,
  RegisterInfoFomart,
  RegisterInfoInterface,
} from "./type";

export default function Register2(props: FormPropsInterface) {
  const { handleFormSubmit } = props;
  const [isGender, setIsGender] = useState<boolean>(false);

  const { control, handleSubmit, register, setValue } = useForm<any>({
    defaultValues: {
      registerInfo: [
        {
          userName: "",
          email: "",
          phone: "",
          password: "",
          rePassword: "",
          genderOther: "",
          gender: "0",
        },
      ],
    },
    resolver: yupResolver(VaLidationRegister2Form()),
  });

  const onSubmit = (value: RegisterInfoFomart) => {
    
    const formValues: RegisterInfoFomart = {
      registerInfo: value?.registerInfo.map((value, index) => {
        return {
          userName: value.userName,
          email: value.email,
          phone: value.phone,
          password: value.password,
          rePassword: value.rePassword,
          gender: value.gender,
          genderOther: value.genderOther,
        };
      }),
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

  const watchGender = useWatch({
    control,
    name: "registerInfo",
  });

  useEffect(() => {
    watchGender.map((val: RegisterInfoInterface) => {
      if (val.gender === "2") {
        setIsGender(true);
      } else {
        setIsGender(false);
      }
    });
  }, [watchGender]);

  const handleAddRegister = () => {
    registerAppend({
      userName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      gender: "0",
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
          <Box px={2} key={field.id} paddingTop={2}>
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
                  name={`registerInfo.${index}.userName`}
                  placeholder="Nhập user name"
                />
              </Grid>

              <Grid item>
                <FormControlLabelCustom>Email</FormControlLabelCustom>
                <InputText
                  control={control}
                  name={`registerInfo.${index}.email`}
                  placeholder="Nhập email"
                />
              </Grid>

              <Grid item>
                <FormControlLabelCustom>Phone</FormControlLabelCustom>
                <InputPhone
                  control={control}
                  name={`registerInfo.${index}.phone`}
                  placeholder="Nhập số điện thoại"
                />
              </Grid>

              <Grid item>
                <FormControlLabelCustom>Password</FormControlLabelCustom>
                <InputText
                  control={control}
                  name={`registerInfo.${index}.password`}
                  type="password"
                  placeholder="Nhập mật khẩu"
                />
              </Grid>

              <Grid item>
                <FormControlLabelCustom>RePassword</FormControlLabelCustom>
                <InputText
                  control={control}
                  name={`registerInfo.${index}.rePassword`}
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
              </Grid>

              <Grid item>
                {" "}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InputRadio
                    fontSize={14}
                    name={`registerInfo.${index}.gender`}
                    control={control}
                    // onClick={() => {console.log('index', index)}}
                    // onChange={(e) => console.log(e.target.value)}
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
                    name={`registerInfo.${index}.genderOther`}
                    control={control}
                    disabled={!(watchGender[index]?.gender === '2')}
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
