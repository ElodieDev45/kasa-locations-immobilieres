function Rate({datasid, rating}){
    return (
        <div className="rate-stars" key={datasid}>
            <p className={rating >= 1 ? "active" : "pending"}>
                <i className="fa-solid fa-star"></i>
            </p>
            <p className={rating >= 2 ? "active" : "pending"}>
                <i className="fa-solid fa-star"></i>
            </p>
            <p className={rating >= 3 ? "active" : "pending"}>
                <i className="fa-solid fa-star"></i>
            </p>
            <p className={rating >= 4 ? "active" : "pending"}>
                <i className="fa-solid fa-star"></i>
            </p>
            <p className={rating >= 5 ? "active" : "pending"}>
                <i className="fa-solid fa-star"></i>
            </p>
        </div>
    )
}

export default Rate