import AuthLayout from "../component/Layout/AuthLayout";
import FormRegister from '../component/Fragment/FormRegister';
import { Link } from "react-router-dom";


const RegisterPage = () => {
    return(
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;