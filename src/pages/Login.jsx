import logo from '../assets/app_logo.svg'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center flex-col">
                <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Welcome to Francis test ChatApp built using React, Vite.js, Express, Tailwind CSS and Firebase. 
                        This would make use of Google login for authentication
                    </p>
                    <button className="btn">Login with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login