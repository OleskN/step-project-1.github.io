import styles from './AddNote.module.scss';
import { useDispatch } from 'react-redux';
import { addNotes } from '../../redux/toDoSlice';
import { useState } from 'react';

const AddNote = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch(addNotes(value));
        setValue('');
    }

    return (
        <>
            <div className={styles.mainContainer}>

                <input
                    className={styles.input}
                    type="text"
                    placeholder='Enter note here'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />

                <button className={styles.button} onClick={ handleAddNote } >Add Note</button>
            </div>
        </>
    );
}

export default AddNote;
