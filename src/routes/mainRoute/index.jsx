import styles from './MainRoute.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { increment, decrement } from '../../redux/counterSlice';
import Post from "../../components/PostItem";
import Posts from "../../components/PostsContainer";
import TodoContainer from '../../components/TodoContainer';


const CounterRoute = () => {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [posted, setPosted] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [posted]);

    const id = localStorage.getItem('id');

    // const submitHandler = e => {
    //     e.preventDefault();

    //     fetch(
    //         'http://localhost:3000/posts',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 "user": id,
    //                 "text": text
    //             }),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }
    //     ).then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setPosted(posted + 1)
    //     })
    // }
    return (
        <>
        <h1>Main Page</h1>

        {/* {
            id ? <form onSubmit={submitHandler}>
            <input type="text" placeholder="What's new?" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" />
            </form>   : null 
        }  */}

        {/* {
            posts.map((post, index) => <Post post={post} key={index} />)
        }    */}


        <TodoContainer />
        
        {/* <Posts /> */}
        </>
    );
}

export default CounterRoute;
