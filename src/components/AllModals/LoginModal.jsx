import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginModal = () => {
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('XXXXXXXX')
    const navigate = useNavigate();


    const loginHandler = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === 'XXXXXXXX') {
            navigate('/dashboard')
            toast('Login Successfully')
        }
    }


    return (
        <div>
            <div className="bg-base-100">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-xl font-bold">Admin Login</h1>
                        <form onSubmit={loginHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" value={email} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" value={password} required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;