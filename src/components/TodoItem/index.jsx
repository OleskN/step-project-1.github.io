import styles from './TodoItem.module.scss';
import DeleteSVG from '../../svg/DeleteSVG';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { removeNotes } from '../../redux/toDoSlice';


const NoteItem = ( props ) => {

    const { index, text, id, todo } = props;

    const dispatch = useDispatch();

    const [isDone, setIsDone] = useState(false);
    const handleCheckboxChange = () => {
        setIsDone(!isDone);
      };

    const handleRemoveNotes = () => {
        dispatch(removeNotes(id))
      };
    



    return (
      
        <li className={classNames(styles.root, { [styles.rootDone]: isDone })}>
            <div className={styles.input}>
                <input type='checkbox' className={styles.checkbox}
                checked={isDone}
                onChange={handleCheckboxChange}
              /> 
                {/* <span> { todo.text }. </span> */}
                <p className={styles.done}> { todo.text } </p>
            </div>

            <div className={styles.btnWrapper}>
                {/* <button className={styles.editButton}>Edit</button> */}
                <button className={styles.deleteButton} onClick={handleRemoveNotes} ><DeleteSVG/></button>
            </div>
            
        </li>
    );
}

NoteItem.proptypes = {
    
}

export default NoteItem;
