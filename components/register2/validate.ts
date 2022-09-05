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
          .required(t("common:enterPhoneNumber"))
          .matches(
            /((09|03|07|08|05|84)+([0-9]{8})\b)/g,
            (t("common:invalidatePhone"))
          ),
        email: yup
          .string()
          .required(t("common:enterEmail"))
          .email(t("common:invalidEmail")),
        password: yup.string().required(t("common:enterPassword")),
        rePassword: yup
          .string()
          .label(t("common:enterRePassword"))
          .required(t("common:enterRePassword"))
          .oneOf([yup.ref("password"), null], t("common:passwordDoesNotMatch")),
          city: yup.string().required(t("common:enterCity")),
          district: yup.string().required(t("common:enterDistrict")),
          ward: yup.string().required(t("common:enterWard")),
      })
    ),
  });

  return schema;
}
