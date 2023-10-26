import RegisterForm from "components/RegisterForm/RegisterForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getToken } from "store/selectors";
import { signUp } from "store/thunk";

const RegisterPage = () => {
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registration = (params) => {
        dispatch(signUp(params))
    }
    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])
    return (
        <>
        <RegisterForm registration={registration} />
            <div>
				{/* <Link to='/login'>Login</Link> */}
			</div>         
        </>
    )
}

export default RegisterPage