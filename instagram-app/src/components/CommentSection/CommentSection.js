import React from 'react';
import './CommentSection.css';
import moment from 'moment';

const CommentSection = props => {
    let postTime = props.postTime;
    return (
        <div className='comment-section'>
            <div className='comments'>
                {
                    props.postComments.map(comment => {
                        return(
                            <div className='comment'>
                                <p className='comment-username'>{comment.username}</p>
                                <p className='comment-text'>{comment.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p className='timestamp'>{postTime}</p>
            <div className='add-comment'>
                <input className='comment-form' placeholder='Add a comment...'></input>
                <p>...</p>
            </div>
        </div>
    );
}

export default CommentSection;