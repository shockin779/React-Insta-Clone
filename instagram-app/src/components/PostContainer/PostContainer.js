import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <main className='posts-section'>
            <div className='post'>
                <div className='author'>
                    <img src='https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg'></img>
                    <p>philzcoffee</p>
                </div>
                <img className='post-image' src='https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg'></img>
                <div className='post-icons'>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <p className='post-likes'>400 likes</p>
                <CommentSection />
            </div>
        </main>
    );
}

export default PostContainer;