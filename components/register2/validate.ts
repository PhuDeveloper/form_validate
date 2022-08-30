import { useTranslation } from "next-i18next";
import * as yup from "yup";


export function VaLidationRegister2Form(isGender: any) {

  const checkGender = isGender;
  const { t } = useTranslation();
  const schema = yup.object().shape({
    userName: yup.string().required(t("common:enterName")),
    phone: yup.string().required("Nhập số đt"),
    email: yup.string().required("Nhập email").email("Email ko đúng định dạng"),
    password: yup.string().required("Nhập mật khẩu"),
    rePassword: yup
      .string()
      .label("Nhập lại mật khẩu")
      .required()
      .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
    genderOther: checkGender
      ? yup.string().required("Nhập giới tính khác")
      : yup.string(),
    
  });

  return schema;
}
