import useAuth from '../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { auth } = useAuth();
    const { setAuth } = useAuth();

    console.log("auth = ", auth);

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (auth?.user)
            setAuth({ user: null, pwd: null })
        else
            setAuth({ user: "user", pwd: "pwd" });
        //navigate(from, { replace: true });
    }

    return (

        <section>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value='fake data'/>
                
                <label>Password:</label>
                <input type="text" value='fake data'/>

                <button>{auth?.user ? 'enlever auth' : 'ajouter auth'} </button>
            </form>
        </section>

    )
}

export default Login
