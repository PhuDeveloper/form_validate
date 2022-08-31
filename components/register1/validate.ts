import * as yup from "yup";
import { IsCheckGender } from "./type";
import { useTranslation } from "next-i18next";
export function VaLidationRegister1Form(isGender: IsCheckGender) {
  const checkGender = isGender.isGender;
  const { t } = useTranslation();
  const schema = yup.object().shape({
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
      .email(t("common:invalidateEmail")),
    password: yup.string().required(t("common:enterPassword")),
    rePassword: yup
      .string()
      .label(t("common:enterRePassword"))
      .required()
      .oneOf([yup.ref("password"), null], t("common:passwordDoesNotMatch")),
    genderOther: checkGender
      ? yup.string().required(t("common:enterGender"))
      : yup.string(),
    city: yup.string().required(t("common:enterCity")),
    district: yup.string().required(t("common:enterDistrict")),
    ward: yup.string().required(t("common:enterWard")),
  });

  return schema;
}
