import React from 'react';

const CommentForm = (props) =>{
    
        return (
            <form onSubmit = {props.handleSubmit}>
                <input type='text' placeholder='name' onChange = {props.handleNameChange}/>
                <input type='text' placeholder='comment' onChange = {props.handleCommentChange}/>
                <input type='submit' value='Submit' />
            </form>
        )
}

export default CommentForm;