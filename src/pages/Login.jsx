import { useEffect } from 'react';
import logo from '../assets/app_logo.svg'
import { UserAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { currentUser, signInWithGoogle } = UserAuth();

    const handleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch(error) {
            console.log(error)
        }
    }

    // If Logged In, Navigate to Chat Page
    useEffect(() => {
        if (currentUser) {
            navigate("/chat")
        }
    }, [currentUser, navigate])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center flex-col">
                <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Welcome to Francis test ChatApp built using React, Vite.js, Tailwind CSS and Firebase. 
                        This utilizes Google login for authentication. Click the button below to get started.
                    </p>
                    <button onClick={handleLogin} className="btn">Login with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login