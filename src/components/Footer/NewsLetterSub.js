import { useState, useEffect } from "react";

const Newslettersub = () => {
    const [email, setEmail] = useState({ email: "" });
    const [data, setData] = useState();
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false)

    const subscribe = () => {
        async function postData() {
            try {
                setLoading(true)
                const reponse = await fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(email),
                })
                const json = await reponse.json()
                setData(json)
                setLoading(false)
                setMessage(json.message)
                setEmail({email: ""})
            }
            catch (err) {
                console.log(err)
            }
        }
        postData()
    }

    useEffect(() => {
        if (message) {
            let timeout = setTimeout(() => {
                setMessage("")
            }, 5000);
            return () => {
                clearTimeout(timeout)
            };
        }
    }, [message]);

    return (
        <div className="col-4 offset-1">
            <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" onChange={(e) => setEmail({ email: e.target.value })} value={email.email}/>
                    {isLoading ?
                        <button className="btn btn-primary" type="button" disabled>
                            <div className="spinner-border text-light spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </button>
                        :
                        <button className="btn btn-primary" type="button" onClick={() => subscribe()}>Subscribe</button>
                    }
                </div>
            </form>
            {data ? (data.success ?
                <p style={{ color: "green" }} className="mt-3">
                    {message}
                </p>
                :
                <p style={{ color: "red" }} className="mt-3">
                    {message}
                </p>)
                :
                null}
        </div>
    );
}

export default Newslettersub;
