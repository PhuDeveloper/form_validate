import Register1 from "../../components/register1";
import { ValueInputForm } from "./type";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getStaticProps({ locale }: any) {
    return {
      props: {
        ...(await serverSideTranslations(locale)),
      },
    };
  }
  

export default function RegisterPage1(){
    const handleFormSubmit=(value:ValueInputForm)=>{
       console.log('value_form: ',value)
    }
    return (
        <Register1 handleFormSubmit={handleFormSubmit}/>
    )
}