import ArticleItemType from "../types/ArticleItemType";

const ArticleItem = (article: ArticleItemType) => {

    return (
        <li>
            <h2>{article.title}</h2>
            
        </li>
    )
}

export default ArticleItem;