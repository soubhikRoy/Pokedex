import React, { useEffect, useState } from "react";

function CustomDropdown() {
    const [commentsData, setCommentsData] = useState([]);
    const [commentDetail, setCommentDetail] = useState({})

    const callCommentsApi = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            if (!response.ok) {
                throw new Error("network error");
            }
            const data = await response.json();
            setCommentsData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        callCommentsApi();
    }, []);

    const callCommentDetailApi = async (commentId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
            if (!response.ok) {
                throw new Error("network error");
            }
            const data = await response.json();
            setCommentDetail(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>This is Custom Dropdown</h1>
            <label htmlFor="comments">Choose a comment:</label>
            <select
                name="comments"
                id="comments"
                defaultValue=""
                onChange={(e) => {
                    const selectedComment = commentsData.find(
                        (comment) => comment.name === (e.target.value)
                    );
                    if (selectedComment) {
                        console.log(selectedComment.name);
                        callCommentDetailApi(selectedComment.id)
                    }
                }}
            >
                <option value="" disabled>
                    Please Select
                </option>
                {commentsData.map((comment) => (
                    <option key={comment.id} value={comment.name}>
                        {comment.name}
                    </option>
                ))}
            </select>
            <h2>{commentDetail && commentDetail.body}</h2>
        </>
    );
}

export default CustomDropdown;