import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className='comment-section'>
            <div className='comments'>
                <div className='comment'>
                    <p className='comment-username'>philzcoffee</p>
                    <p className='comment-text'>We've got more than just delicious coffees to offer at our shops. Don't forget to check out our selection of locally sou</p>
                </div>
                <div className='comment'>
                    <p className='comment-username'>test2</p>
                    <p className='comment-text'>We've got more than just delicious coffees to offer at our shops. Don't forget to check out our selection of locally sou</p>
                </div>
                <div className='comment'>
                    <p className='comment-username'>test3</p>
                    <p className='comment-text'>We've got more than just delicious coffees to offer at our shops. Don't forget to check out our selection of locally sou</p>
                </div>
            </div>
            <p className='timestamp'>2 hours ago</p>
            <div className='add-comment'>
                <input className='comment-form' placeholder='Add a comment...'></input>
                <p>...</p>
            </div>
        </div>
    );
}

export default CommentSection;