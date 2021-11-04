import { useState } from "react";

const Login = () => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    const logIntoSystem = () => {

        if (username?.trim() === "cs" && password?.trim() === "123") {
            localStorage.setItem("UID", 1);
            window.location.reload(false);
        } else {
            setMessage("Login Failed...!!")
        }


    }

    return <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-4 h-50">
                <div className="card text-dark shadow" style={{ borderRadius: 20 }}>
                    <div className="card-header bg-primary text-center fw-bold text-white fs-3"
                        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, padding: 30 }}>
                        Login</div>
                    <div className="card-body" style={{ paddingTop: 40, paddingBottom: 20, paddingLeft: 60, paddingRight: 60 }}>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" value={username} onChange={(event) => { setMessage(""); setusername(event.target.value); }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(event) => { setMessage(""); setPassword(event.target.value); }} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <button type="button" className="btn btn-dark" onClick={logIntoSystem}>Login</button>
                            <label className="text-danger ps-3">{message}</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;
