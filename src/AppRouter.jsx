import { Routes, Route, Navigate } from 'react-router-dom';
import MainRoute from './routes/mainRoute';
import PlaygroundsRoute from './routes/playgroundsRoute';
import LoginRoute from './routes/loginRoute';
import RegistrationRoute from './routes/registrationRoute';
import PropTypes from 'prop-types';
import LoginSignupRoute from './routes/LoginSignupRoute';


const AppRouter = ({ userId = null, setUserId = () => {} }) => {

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainRoute/> } />
                <Route path='/playgrounds' element={ userId ? <PlaygroundsRoute /> : <Navigate to='/registration' />} />
                <Route path='/about' element={ <h1>ABOUT SECTION</h1>  } />
                <Route path='/login' element={ <LoginRoute setUserId={setUserId}/> } />
                <Route path='/registration' element={ <RegistrationRoute setUserId={setUserId}/> } />
                <Route path='/loginsignup' element={ <LoginSignupRoute /> } />


                <Route path='*' element={ <h1>404 - PAGE NOT FOUND</h1> } />
            </Routes>
        </>
    );
}

AppRouter.propTypes = {
    userId: PropTypes.string,
    setUserId: PropTypes.func
}

export default AppRouter;
