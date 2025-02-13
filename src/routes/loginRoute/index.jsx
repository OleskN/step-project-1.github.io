import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const LoginRoute = ({ setUserId = () => {} }) => {

    const navigate = useNavigate();
    console.log(navigate);


    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = async (e) => { // обробник
        e.preventDefault();
    
        const payload = {
            username: login,
            password: password
        }
    
        console.log(payload)
    
        fetch(
            'http://localhost:3000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.ok) {
                localStorage.setItem('id', data.id)
                console.log(data.id)
                setUserId(data.id)
                navigate('/playgrounds')
            }
            
            console.log(data)
        })
        .catch(error => console.warn('Login failed', error));
    } 
    
    
        return (
            <>
                <h1>Login Page</h1>
    
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input type="text" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
LoginRoute.propTypes = {
    setUserId: PropTypes.func.isRequired
}

export default LoginRoute;
