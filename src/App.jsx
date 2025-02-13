import { useState } from 'react';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Modal from './components/Modal';
import { useDispatch } from 'react-redux';
import { fetchAllToDo } from './redux/toDoSlice';


function App() {
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem('id') || null
  });

  const dispatch = useDispatch();
  dispatch(fetchAllToDo())

  return (
    <>

      <Header />


      <Modal />

      <main>
        <AppRouter userId={userId} setUserId={setUserId}/>
      </main>

    </>
  )
}

export default App;
