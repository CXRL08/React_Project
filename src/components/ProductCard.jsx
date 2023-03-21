
function ProductCard(post) {
    return (
        <a href={"/products/" + post.post.id} className="card">
            <div className='title'>
                <h1>{post.post.title}</h1>
            </div>
            <img src={post.post.images[0]} alt="" />
            <p>{post.post.description}</p>
            <h2>Price: {post.post.price}</h2>
            <div className=" discount"><p>Discount: {post.post.discountPercentage}%</p> </div>
        </a>
    )
}

export default ProductCard 