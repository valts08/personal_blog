import ArticleItem from "./ArticleItem";
import ArticleItemType from "../types/ArticleItemType";

interface ArticleListProps {
    articles: ArticleItemType[]
}

const ArticleList = ({ articles }: ArticleListProps) => {

    return (
        <ul>
            {articles && articles.map(article  => {
                return <ArticleItem key={article.id} {...article} />
            })}
        </ul>
    )
}

export default ArticleList;