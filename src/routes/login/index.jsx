import { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { authenticateUser, error } = useAuth();
    const navigate = useNavigate();

    const getSubmitData = async (e) => {
        e.preventDefault();
        setAuthError(null);
        setIsLoading(true);
        try {
            const data = { email, password };
            await authenticateUser(data);
            navigate("/");
        } catch (error) {
            setAuthError(error.message || "Failed to login. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-start pt-6 items-center min-h-80vh bg-gray-100">
            <div className="max-w-lg w-full p-6 bg-base-100 rounded-lg shadow-lg">
                <h4 className="text-start text-sm mt-1 mb-4">
                    <span>Don't have an account yet? </span>
                    <span className="navlink-style font-semibold">
                        <NavLink to="/register">Register here</NavLink>
                    </span>
                </h4>
                <h2 className="text-2xl font-semibold text-center mt-4 mb-2">Login</h2>
                <form onSubmit={getSubmitData}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-accent-content">
                            E-mail
                        </label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block mb-2 text-sm text-accent-content">
                            Password
                        </label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <h4 className="text-start text-xs mb-4">
                            <span className="navlink-style">
                                <NavLink to="/">I don't remember my password</NavLink>
                            </span>
                        </h4>
                    </div>
                    <div className="text-center">
                        {authError && <p className="text-error text-sm mt-2">{authError}</p>}
                        <Button
                            type="submit"
                            disabled={isLoading || email === "" || password === ""}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </div>
                </form>
                {error && <p className="text-error text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
