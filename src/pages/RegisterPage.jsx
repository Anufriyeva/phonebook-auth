import RegisterForm from "components/RegisterForm/RegisterForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registration = (params) => {


        dispatch(signUpUser(params))

    }
    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])

    return (

        <>
            <RegisterForm registration={registration} />
            <div>
					<Link to='/login'>Login</Link>
				</div>
            
        </>
    )
}

export default RegisterPage