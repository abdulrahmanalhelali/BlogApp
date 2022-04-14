import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import Comments from "../Comments";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setpageNumber] = useState(2);
    const [isLoading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const reponse = await fetch("https://www.wp-course.site/wp-json/youthink/posts?page=1")
                const json = await reponse.json()
                setPosts(json.data)
                setTotalPages(Math.ceil(json.meta.total_posts / 6))
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
    }, []);

    async function fetchMorePosts() {
        try {
            setLoading(true)
            let url = "https://www.wp-course.site/wp-json/youthink/posts?page=" + pageNumber
            const reponse = await fetch(url)
            const json = await reponse.json()
            setPosts([...posts, ...json.data])
            if (totalPages && (pageNumber <= totalPages)) {
                setpageNumber(pageNumber + 1)
            }
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div className="p-5 bg-light">
                <h1>Our Latest Posts</h1>
            </div>
            <div className="container-fluid mt-5 px-5">
                <div className="row">
                    <div className="col-8">
                        {posts && posts.length > 0 ? posts.map(post => {
                            return (
                                <div key={post.title}>
                                    <div>
                                        <img className="rounded-top" src={post.thumbnail} alt={post.title} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="text-center p-4 rounded" style={{ position: "relative", width: "80%", bottom: "4em", backgroundColor: "white" }}>
                                            <Link to={"/blog/"+post.title} style={{textDecoration: "none", color: "black"}}><h2>{post.title}</h2></Link>
                                            <p>{post.excerpt}</p>
                                            <Tags post={post}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <div className="d-flex justify-content-center mb-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                        {totalPages && pageNumber <= totalPages &&
                            <div>
                                {isLoading ?
                                    <div className="d-flex justify-content-center mb-5">
                                        < div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    :
                                    null}
                                < div className="d-flex justify-content-center mb-5">
                                    <button type="button" className="btn btn-primary" onClick={() => fetchMorePosts()}>Load More</button>
                                </div>
                            </div>
                        }

                    </div>
                    <div className="col-4">
                        <Comments />
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Blog;
