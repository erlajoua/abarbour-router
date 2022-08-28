// import useAuth from "../hooks/useAuth";

const Register = () => {
    // const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label> Username: </label>
                <input type="text" value='fake data'/>

                <label> Password: </label>
                <input type="text" value='fake data'/>

                <label> Confirm Password: </label>
                <input type="text" value='fake data'/>
                <button>Sign Up</button>
            </form>
        </section>
    )
}

export default Register
