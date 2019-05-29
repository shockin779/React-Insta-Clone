import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {

    if(props.usernameSearch !== null) {
        let filteredPosts = props.posts.filter(post => {
            if(post.username.toLowerCase().includes(props.usernameSearch)){
                return post;
            }
        });

        return (
            <main className='posts-section'>
                {
                    filteredPosts.map((post, index) => {
                        return(
                            <div className='post' key={index}>
                                <div className='author'>
                                <img src={post.thumbnailUrl} alt={post.username}></img>
                                <p>{post.username}</p>
                                </div>
                                <img className='post-image' src={post.imageUrl}></img>
                                <div className='post-icons'>
                                    <i className="far fa-heart" data-index={index} onClick={props.likePost}></i>
                                    <i className="far fa-comment"></i>
                                </div>
                                <p className='post-likes'>{post.likes} likes</p>
                                <CommentSection addComment={props.addComment} postComments={post.comments} index={index} postTime={post.timestamp} />
                            </div>
                        )
                    })
                } 
            </main>
        );
        
    } else {
        return (
            <main className='posts-section'>
                {
                    props.posts.map((post, index) => {
                        return(
                            <div className='post' key={index}>
                                <div className='author'>
                                <img src={post.thumbnailUrl} alt={post.username}></img>
                                <p>{post.username}</p>
                                </div>
                                <img className='post-image' src={post.imageUrl}></img>
                                <div className='post-icons'>
                                    <i className="far fa-heart" data-index={index} onClick={props.likePost}></i>
                                    <i className="far fa-comment"></i>
                                </div>
                                <p className='post-likes'>{post.likes} likes</p>
                                <CommentSection addComment={props.addComment} postComments={post.comments} index={index} postTime={post.timestamp} />
                            </div>
                        )
                    })
                } 
            </main>
        );
    }
}

PostContainer.propTypes = {
    posts: PropTypes.array,

}

export default PostContainer;