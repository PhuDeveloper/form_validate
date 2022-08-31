import { useTranslation } from "next-i18next";
import * as yup from "yup";

export function VaLidationRegister2Form() {
  // const checkGender = isGender;
  const { t } = useTranslation();
  const schema = yup.object().shape({
    registerInfo: yup.array().of(
      yup.object().shape({
        userName: yup.string().required(t("common:enterName")),
        phone: yup
          .string()
          .required("Nhập số đt")
          .matches(
            /((09|03|07|08|05|84)+([0-9]{8})\b)/g,
            "Số đt ko đúng định dạng"
          ),
        email: yup
          .string()
          .required("Nhập email")
          .email("Email ko đúng định dạng"),
        password: yup.string().required("Nhập mật khẩu"),
        rePassword: yup
          .string()
          .label("Nhập lại mật khẩu")
          .required()
          .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
      })
    ),
  });

  return schema;
}
