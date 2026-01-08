import AuthLayout from "../component/Layout/AuthLayout";
import FormLogin from '../component/Fragment/FormLogin';
import { Link } from "react-router-dom";


const LoginPage = () => {
    return(
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;