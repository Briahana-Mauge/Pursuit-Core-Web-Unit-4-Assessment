import React from 'react';
const Comments = (props) => {
    const items = props.comments.map((comment)=> {
        return(
            <>
            <li>{comment.name}</li>
            <p>{comment.comment}</p>
            </>
        )
    })
    return (
        <div>
        {items}
        </div>
    )

}
export default Comments;