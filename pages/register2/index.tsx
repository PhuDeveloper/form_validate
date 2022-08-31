import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Register2 from "../../components/register2";
import { RegisterInfoFomart, ValueInputForm } from "./type";



export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function RegisterPage2() {
  const handleFormSubmit = (value: RegisterInfoFomart) => {
    console.log("value_form: ", value);
  };
  return (
    <Register2 handleFormSubmit={handleFormSubmit}/>
  );
}
