// import { reset } from '../../redux/counterSlice';
// import { closeModal, openModal, setModalActions, setModalText } from '../../redux/modalSlice';
// import styles from './ResetRoute.module.scss';
// import { useSelector, useDispatch } from 'react-redux';

// const ResetRoute = () => {

//     const counterValue = useSelector(state => state.counter.value);
//     const dispatch = useDispatch();

//     return (
//         <div className={styles.resetContainer}>
//             <h1 className={ styles.title }
//              >
//                 { counterValue }
//              </h1>

//             <button onClick={ () => {
//                 dispatch(setModalText({title: 'Reset Counter', subtitle: 'Do really want to reset counter?'})); 
//                 dispatch(setModalActions('reset')); // не мій варіант 
//                 dispatch(openModal());
//                 } }>Reset counter</button>
//         </div>
//     );
// }

// export default ResetRoute;
