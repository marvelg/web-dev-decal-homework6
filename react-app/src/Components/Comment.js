import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

const Comment = (props) => {
    
    const [newComment, setCom] = useState()
    const [comments, setComments] = useState([])


    const onSubmit = () => {
        
        async function get_com () {
            try {
                let response = (await axios.post(`http://localhost:3002/post/${props.id}/comment`, {
                "newComment": newComment
                })).data
                console.log(response)
                setComments(response.comments)
            } catch (error) {
                console.log(error)
            }
            setCom('')
        }

        get_com()
    }

    return (
        <div class = "comment-section">
            <div>
                {comments.map((com) => (
                    <div> {com} </div>
                ))}
            </div>
            <div>
                <input type="text" placeholder="Comment" value={newComment} onChange={e => setCom(e.target.value)} />
            </div>
            <button class = "commentbutton" onClick = {onSubmit}>
            Submit
            </button>
        </div>
    )

}


export default Comment;
