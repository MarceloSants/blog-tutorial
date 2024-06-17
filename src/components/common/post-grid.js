import React, {useState, useEffect, useMemo} from "react";
import {Link} from "react-router-dom";
import { Pagination } from "antd";
import TagRow from "./tag-row";

export default function PostGrid({posts}) {
    const [pageSize, setPageSize] = useState(6);
    const [current, setCurrent] = useState(1);

    const paginationPosts = useMemo(() => {
        const lastIndex = current * pageSize;
        const fisrtIndex = lastIndex - pageSize;

        return posts.slice(fisrtIndex, lastIndex);
    }, [current, pageSize, posts])

    useEffect(() => {
        window.scroll({
            top: 300,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize])

    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {paginationPosts.map((post, index) => (
                    <div className="post-container" key={index}>
                        <figure>
                            <Link to={post.link}>
                                <img src={require(`../../assets/images/${post.image}`)} alt={post.image}/>
                            </Link>
                        </figure>
                        <TagRow tags={post.categories }/>
                        <h2>{post.title}</h2>
                        <p className="author-text">
                            <span>
                                By:
                                <Link to={`/authors/${post.author}`}>
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                        </p>
                        <p className="description-text">
                            {post.description}
                        </p>
                        <Link to={post.link}>Read more...</Link>
                    </div>
                ))}
            </section>
            <Pagination 
            simple 
            showSizeChanger 
            onShowSizeChange={setPageSize} 
            pageSize={pageSize}
            total={posts.length}
            defaultCurrent={current}
            onChange={setCurrent}
            />
        </section>
    )
}