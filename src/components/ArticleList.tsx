import ArticleItem from "./ArticleItem";
import ArticleItemType from "../types/ArticleItemType";
import { useEffect, useState } from "react";

interface ArticleListProps {
    articles: ArticleItemType[]
}

const ArticleList = ({ articles }: ArticleListProps) => {

    const [page, setPage] = useState('')

    useEffect(() => {
        const href = window.location.href
        setPage(href.substring(href.lastIndexOf(`/`) + 1, href.length))
    }, [])

    return (
        <ul className="my-2">
            {articles && articles.map(article  => 
                <ArticleItem key={article.id} article={{...article}} type={page} />
            )}
        </ul>
    )
}

export default ArticleList;