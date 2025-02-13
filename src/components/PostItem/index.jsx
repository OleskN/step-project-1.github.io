

function Post({post}) {

    return(
      <div>
        <hr />
        <h3>{post.name}</h3>
        <p>{post.text}</p>
        <hr />
      </div>
    )
}

export default Post;