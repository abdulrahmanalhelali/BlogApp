import React from 'react';
import { useState ,useEffect } from 'react';


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const reponse = await fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
                const json = await reponse.json()
                setComments(json)

            }
            catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
    }, []);
    return (
        <div style={{ position: "sticky", top: "5em" }}>
            <h3>Latest Comments</h3>
            <ul className="mt-4 ps-0" style={{ listStyleType: "none" }}>
                {comments && comments.length > 0 && comments.map(comment => {
                    return (
                        <li className="d-flex gap-2" key={comment.id}>
                            <div>
                                <img className="rounded-circle" src={comment.author_avatar_urls[24]} alt="avatar icon" style={{ width: "20px", height: "20px" }} />
                            </div>
                            <div>
                                <b>{comment.author_name}</b>
                                <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Comments;
