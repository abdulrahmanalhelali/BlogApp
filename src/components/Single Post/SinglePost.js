import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments";

const SinglePost = () => {
    const [post, setPost] = useState();
    const { slug } = useParams();

    useEffect(() => {
        async function fetchPost() {
            try {
                const reponse = await fetch("https://www.wp-course.site/wp-json/youthink/post?slug=" + slug)
                const json = await reponse.json()
                setPost(json.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchPost()
    }, []);


    return (
        <div>
            {post &&
                <div>
                    <div className="p-5 bg-light">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="container-fluid mt-5 px-5">
                        <div className="row">
                            <div className="col-8">

                            </div>
                            <div className="col-4">
                                <Comments />
                            </div>
                        </div>
                    </div >
                </div>
            }

        </div>
    );
}

export default SinglePost;
