import InputForm from "../Elements/Button/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = '/product';
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data , (status, res) =>{
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/product';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }


  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

    return(
    <form onSubmit={handleLogin}>
      <InputForm 
      label="username" 
      name="username" 
      type="text" 
      placeholder="John Doe" 
      ref={usernameRef} />

      <InputForm
      label="Password" 
      name="password" 
      type="password" 
      placeholder="**********" 
      autoComplete="current-password"
/>

      <Button className="bg-blue-500 w-full" type="submit">Login</Button>
      {loginFailed && <p className="text-red-500 m-4 text-center">{loginFailed}</p>}
    </form>
    )
}

export default FormLogin;