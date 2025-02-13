import styles from './Modal.module.scss';
import { closeModal } from '../../redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/counterSlice';


const Modal = () => {

    const isOpen = useSelector(state => state.modal.isOpen);
    const { title, subtitle, actions } = useSelector(state => state.modal);

    const dispatch = useDispatch();

    if (!isOpen) {
        return false
    }


    return (
        <div className={styles.root}>
            <div className={styles.background} onClick={() => { dispatch(closeModal()) }} />

            <div className={styles.contentContainer} >

                <h2> { title } </h2>
                <p> { subtitle } </p>

                <button onClick={ () => {  // не мій варінт
                    if (actions === 'reset'){
                        dispatch(reset());
                    }
                    dispatch(closeModal())

                }} > Yes </button>
                <button onClick={() => { dispatch(closeModal()) 

                }} > No </button>

                {/* <button onClick={() => { // мій варіант коли в модалці все напряму 
                    dispatch(reset())
                    dispatch(closeModal())
                }}
                >
                    Ok
                </button>
                <button onClick={() => { dispatch(closeModal()) }} >Cancel</button> */}



            </div>
        </div>
    );
}

export default Modal;
