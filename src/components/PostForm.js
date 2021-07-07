import React from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createPost } from '../redux/actions/postAction'

const PostForm = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onChange = e => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setBody(e.target.value)
        }
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: title,
            body: body
        }

        dispatch(createPost(post))

        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h2>Add Post</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input type='text' name='title' value={title} onChange={onChange} />
                </div>
                <div>
                    <label>Body:</label><br />
                    <textarea name='body' value={body} onChange={onChange} />
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, { createPost })(PostForm)
