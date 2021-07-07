import { FETCH_POSTS, ADD_POST } from "./types";

export const fetchPosts = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPost = (post) => dispatch => {
    console.log('creating post');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: ADD_POST,
            payload: data
        }))
        .catch(err => console.log(err))
}