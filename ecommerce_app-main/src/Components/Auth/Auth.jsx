import { useState } from "react";

function Auth({ onsubmit }) {
    const [formDetails, setFormDetails] = useState({ username: '', email: '', password: '' });

    function updateUsername(name) {
        setFormDetails({ ...formDetails, username: name });
    }

    function updatePassword(pwd) {
        setFormDetails({ ...formDetails, password: pwd });
    }

    function updateEmail(email) {
        setFormDetails({ ...formDetails, email: email });
    }

    function handleSubmitForm() {
      
        onsubmit(formDetails);
    }

    return (
        <>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="loginUsername"
                    onChange={(event) => updateUsername(event.target.value)}
                />
            </div>
            <div className="input-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="lemail"
                    onChange={(event) => updateEmail(event.target.value)}
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="loginPassword"
                    onChange={(event) => updatePassword(event.target.value)}
                />
            </div>
            <div className="input-group">
                <button onClick={handleSubmitForm} className="form-control btn btn-primary">Submit</button>
            </div>
        </>
    );
}

export default Auth;
