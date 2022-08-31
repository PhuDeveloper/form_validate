import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Register2 from "../../components/register2";



export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
export default function RegisterPage2() {
  const handleFormSubmit = (value: any) => {
    console.log("value_form: ", value);
  };
  return (
    <Register2 handleFormSubmit={handleFormSubmit}/>
    // <Register1 handleFormSubmit={handleFormSubmit}/>
  );
}
