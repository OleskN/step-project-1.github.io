import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegistrationRoute = ({ setUserId = () => {} }) => {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = (e) => { // обробник
        e.preventDefault();
    
        const payload = {
            username: login,
            password: password
        }
    
        fetch(
            'http://localhost:3000/auth/register',
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
            localStorage.setItem('id', data.id)
            setUserId(data.id)
            navigate('/playgrounds')
            console.log(data)
        })

        // додати щоб інпут чистився
    } 
    
    
        return (
            <>
                <h1>Registration Page</h1>
    
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter yor login here" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input type="text" placeholder="Enter your password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }


export default RegistrationRoute;