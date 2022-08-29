import Register1 from "../../components/register1";

export default function RegisterPage1(){
    const handleFormSubmit=(value:any)=>{
       console.log('vluuu',value)
    }
    return (
        <Register1 handleFormSubmit={handleFormSubmit}/>
    )
}