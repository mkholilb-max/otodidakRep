import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/darkmode";
import Button from "../Elements/Button";

const AuthLayout = (props) => {
  const {children, title, type} = props
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  console.log(isDarkMode)
    return(
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className='w-full max-w-xs '>
        <Button className={`absolute top-4 right-4 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-300 text-black"}`} onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <h1 className='text-blue-600 text-3xl font-bold'>{title}</h1>
        <p className='text-slate-500 font-medium mb-8'>Please enter your details</p>  
        {children}
        <Navigation type={type}/>
      </div>
    </div>
    )
}

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm m-2 text-center">
        Don't have any account ? {" "}
        <Link className=" text-blue-400 hover:text-blue-600" to="/register">
          Register now!
        </Link>
      </p>
    )
  } else {
    return (
      <p className="text-sm m-2 text-center"> 
        Already have an account ? {" "}
        <Link className=" text-blue-400 hover:text-blue-600" to="/login">
          Login now!
        </Link>
      </p>
    )
  }
}
export default AuthLayout;