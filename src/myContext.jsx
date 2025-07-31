import { createContext } from "react";


 const myContext = createContext({
    TrueSub : Boolean,
    SetTrueSub : ()=>{} ,
    DeleteFaq : Boolean,
    SetDeleteFaq : ()=>{}
})    

export default myContext