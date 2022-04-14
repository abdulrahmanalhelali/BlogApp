import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments";
import Tags from "../Tags";

const SinglePost = () => {
    const [post, setPost] = useState();
    const { slug } = useParams();
    let content = [];

    useEffect(() => {
        async function fetchPost() {
            try {
                const reponse = await fetch("https://www.wp-course.site/wp-json/youthink/post?slug=" + slug)
                const json = await reponse.json()
                setPost(json.data)
                console.log(json.data.content)
                content = json.data.content.split(",")
                console.log(content)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchPost()
    }, []);


    return (
        <div>

            <div>
                <div className="p-5 bg-light">
                    <h1>{post && post.title}</h1>
                </div>
                {post ?
                    <div className="container-fluid my-5 px-5">
                        <div className="row">
                            <div className="col-8">
                                <img src={post.thumbnail} alt={post.title} />
                                <div className="my-4 p-3 bg-light d-flex justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                        <b>{post.author}</b>
                                    </div>
                                    <Tags post={post} />
                                </div>
                                <div dangerouslySetInnerHTML={{
                                    __html: post.content
                                }}>
                                </div>
                            </div>
                            <div className="col-4">
                                <Comments />
                            </div>
                        </div>
                    </div >
                    :
                    <div className="d-flex justify-content-center mb-5">
                        < div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
            </div>


        </div>
    );
}

export default SinglePost;
