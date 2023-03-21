import { useEffect, useState } from "react"

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(async res => await res.json())
            .then(data => setPosts(data.products))

    }, [])
    return (

        <div className="container">
            {posts.map((post, i) =>
                <div className="card" key={i}>
                    <div className='title'>
                    <h1>{post.title}</h1>
                    </div>
                    <img src={post.images[0]} alt="" />
                    <p>{post.description}</p>
                    <h2>Price: {post.price}</h2>
                    <div className=" discount"><p>Discount: {post.discountPercentage}%</p> </div>
                </div>

            )
            }

        </div>
    )
}

export default Home