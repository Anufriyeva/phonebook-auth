import LoginForm from "components/LoginForm/LoginForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { getToken } from "store/selectors";
import { signIn } from "store/thunk";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();

    const loginUser = (params) => {
        dispatch(signIn(params))
    }

    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])

    return (
        <>
            <LoginForm loginUser={loginUser} />  
        <div>
			{/* <Link to='/register'>Sign Up</Link> */}
		</div>    
        </>

    )
}

export default LoginPage