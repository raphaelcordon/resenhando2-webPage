import { useState } from "react";
import ButtonSubmitDefault from "../../components/buttons/buttonSubmitDefault.jsx";
import {Create} from "../../axios/userAxios.js"
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        // Check if passwords match
        if (password !== rePassword) {
            setError('Passwords do not match.');
            setIsLoading(false);
            return;
        }

        const userData = { firstName, lastName ,email, password };

        try {
            setError('');
            // Registration
            const res = await Create(userData);
            if (res.succeeded === true) {
                setSuccess("Registration successful!<br>Redirecting to login...");
                setError('');
                // Delay navigation to login page
                setTimeout(() => {
                    navigate("/login")
                    setSuccess("")
                }, 3000);
            } else {
                setError("This email is already registered");
            }
            
            
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
                console.log(error.response.data.message);
            } else {
                setError("This email is already registered");
            }
            setSuccess('');
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-start pt-6 items-center min-h-[60vh]">
            <ToastContainer />
            <div className="max-w-lg w-[95vw] p-6 bg-gray-300 rounded-lg shadow-lg">

                <h2 className="font-semibold text-center mt-4 mb-4">Register and write your own reviews</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block mb-2 text-sm text-accent-content">
                            First Name
                        </label>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block mb-2 text-sm text-accent-content">
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
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
                        <label htmlFor="password" className="block text-sm text-accent-content">
                            Password
                        </label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            value={password}
                            placeholder="(5 characters, 1 special, 1 uppercase)"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="rePassword" className="block mb-2 text-sm text-accent-content">
                            Confirm Password
                        </label>
                        <input
                            name="rePassword"
                            id="rePassword"
                            type="password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                    </div>

                    <div className="text-center">
                        {error?.password && <p>{error.password}</p>}
                        <ButtonSubmitDefault
                            buttonName={isLoading ? "Registering..." : "Register"}
                            type="submit"
                            disabled={isLoading || email === ""
                            || firstName === "" || lastName === ""
                            || password === "" || rePassword === ""} />
                    </div>
                    
                </form>
                <div className="text-center">
                    {error && <p className="text-error text-sm text-red-800 mt-2">{error}</p>}
                    {success && (
                        <p
                            className="textarea-success text-sm text-green-800 mt-2"
                            dangerouslySetInnerHTML={{__html: success}}
                        ></p>
                    )}
                </div>
            </div>
        </div>
    );
};