import InputForm from "../Elements/Button/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/product';
  }
    return(
    <form onSubmit={handleLogin}>

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

      <Button className="bg-blue-500 w-full" type="submit">Login</Button>
    </form>
    )
}

export default FormLogin;