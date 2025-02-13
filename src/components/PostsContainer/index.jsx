import styles from './PostsContainer.module.scss';
import { useState, useEffect } from 'react';
import Post from '../PostItem';

const Posts = () => {

        const [posts, setPosts] = useState([]);
        const [text, setText] = useState("");
        const [posted, setPosted] = useState(0);
        const [isLoading, setIsLoading] = useState(false)
    
        useEffect(() => {
            setIsLoading(true);
            fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
        }, [posted]);
    
        const id = localStorage.getItem('id');
    
        const submitHandler = e => {
            e.preventDefault();
    
            fetch(
                'http://localhost:3000/posts',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        "user": id,
                        "text": text
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(res => res.json())
            .then(data => {
                console.log(data)
                setPosted(posted + 1)
            })
        }
    return (
            <>
            <div>
            {
            id ? <form onSubmit={submitHandler}>
            <input type="text" placeholder="What's new?" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" />
            </form>   : null 
        } 
            </div>
            {isLoading && <div className={styles.loader}></div>} 
                    {
                        !isLoading && posts.map((post, index) => <Post post={post} key={index} />)
                    } 
            </>
    )
}

export default Posts;