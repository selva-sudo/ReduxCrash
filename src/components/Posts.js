import React from 'react'
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../redux/actions/postAction'

const Posts = ({ posts, newPost }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
        posts.unshift(newPost)
    }, [])

    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )

}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Posts)
