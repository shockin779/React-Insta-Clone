import React from 'react';
import './CommentSection.css';
import moment from 'moment';
import PropTypes from 'prop-types';

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
            <form className='add-comment' onSubmit={props.addComment}>
                <input className='comment-form' data-index={props.index} key={props.index} placeholder='Add a comment...'></input>
                <p>...</p>
            </form>
        </div>
    );
}

CommentSection.propTypes = {
    postComments: PropTypes.array,
    postTime: PropTypes.string
}

export default CommentSection;