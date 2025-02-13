import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import TodoItem from '../TodoItem';
import styles from './TodoContainer.module.scss';
import PropTypes from 'prop-types';



const TodoContainer = () => {

    const [text, setText] = useState("");


    const todo = useSelector(state => state.todo.data);
    const isLoading = useSelector(state => state.todo.isLoading);
    const isError = useSelector(state => state.todo.isError);


    // if (!todo) return <p style={{ fontSize: 24 }} >There is no any notes yet &#128532; </p>

    if(isLoading) {
        return(
            <div className={styles.loader}>
               

                {/*  */}
            </div>
        )
    }

    if(isError) {
        return(
            <div className={styles.errorCOntainer}>
               <h2 className={styles.errorText}> Shhhh, I gues server is sleeping :/</h2>

                {/*  */}
            </div>
        )
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="New todo" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <ul className={styles.list}>
                {todo.map((todo, index) => <TodoItem todo={todo} key={index} />)}
            </ul>


        </div>
    );
}

TodoContainer.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
}


export default TodoContainer;
