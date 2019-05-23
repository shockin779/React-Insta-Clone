import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <main className='posts-section'>
            {
                props.posts.map(post => {
                    return(
                        <div className='post'>
                            <div className='author'>
                            <img src={post.thumbnailUrl} alt={post.username}></img>
                            <p>{post.username}</p>
                            </div>
                            <img className='post-image' src={post.imageUrl}></img>
                            <div className='post-icons'>
                                <i className="far fa-heart"></i>
                                <i className="far fa-comment"></i>
                            </div>
                            <p className='post-likes'>{post.likes} likes</p>
                            <CommentSection postComments={post.comments} postTime={post.timestamp} />
                        </div>
                    )
                })
            }
            

                
                
        </main>
    );
}

export default PostContainer;