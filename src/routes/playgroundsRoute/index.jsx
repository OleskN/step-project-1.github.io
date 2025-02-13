import styles from './PlaygroundsRoute.module.scss';
import AddNote from '../../components/AddNote';
import TodoContainer from '../../components/TodoContainer';
import { useEffect } from 'react';
import Posts from '../../components/PostsContainer';

const PlaygroundsRoute = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:5173/';
    }

    return (

        <>
            <button className={styles.logout} onClick={logout} >Logout</button>

            <section className={styles.notesContainer}>
                <AddNote />

                {/* Posts section realized with redux */}
                <TodoContainer />
            </section>

            <section>
            {/* Posts section realized with react */}
                <Posts />
            </section>
        </>
    )

};

export default PlaygroundsRoute;