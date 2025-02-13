import { useState } from 'react';
import styles from './LoginSignup.module.scss';
import user_icon from '../../assets/user_icon.png';
import password_icon from '../../assets/password_icon.png';
// import './LoginSignup.module.scss';


const LoginSignup = () => {

    const [action, setAction] = useState('Sign Up');


    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.text}>{action}</div>
            <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
            <div className={styles.input}>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Login'/>    
            </div>
            <div className={styles.input}>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password'/>    
            </div>
            </div> 
            <div className={styles.sumbitContainer}>
                {/* <div className={action==='Login'? styles.submit : styles.submit}>Sign Up</div>
                <div className={action==='Sign Up'? styles.submit : styles.submit}>Login</div> */}
             <div className={`${styles.submit} ${action === 'Login' ? styles.gray : styles.submit}`} onClick={() => {setAction('Sign Up')}} >Sign Up</div>
             <div className={`${styles.submit} ${action === 'Sign Up' ? styles.gray : styles.submit}`} onClick={() => {setAction('Login')}} >Login</div>
                </div>   
        </div>
    )
}

export default LoginSignup