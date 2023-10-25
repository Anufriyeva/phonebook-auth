import LoginForm from "components/LoginForm/LoginForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();

    const loginUser = (params) => {
        dispatch(signInUser(params))
    }

    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])

    return (
        <> <LoginForm loginUser={loginUser} />  
        <div>
					<Link to='/register'>Sign Up</Link>
				</div>    
        </>

    )
}

export default LoginPage