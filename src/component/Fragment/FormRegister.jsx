import InputForm from "../Elements/Button/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return(
    <form action="">
      <InputForm 
      label="Fullname" 
      name="fullname" 
      type="text" 
      placeholder="insert name..." />

      <InputForm 
      label="Email" 
      name="email" 
      type="email" 
      placeholder="Enter your email" />

      <InputForm 
      label="Password" 
      name="password" 
      type="password" 
      placeholder="**********" />

      <InputForm 
      label="Confirm Password" 
      name="ConfirmPassword" 
      type="password" 
      placeholder="**********" />

      <Button className="bg-blue-500 w-full">Register</Button>
    </form>
    )
}

export default FormRegister;