import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <main className="App">
            <h1>home</h1>
            
            <Link to="/login">Sign in Page</Link>
            <Link to="/register">Sign up Page</Link>
            <Link to="/linkpage">Link Page</Link>
            <Outlet />
        </main>
    )
}

export default Layout
