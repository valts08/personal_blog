import { Link } from "react-router-dom";
import ArticleItemType from "../types/ArticleItemType";
import useThemeContext from "../hooks/useThemeContext";
import Divider from "./Divider";
import getFullDate from "../utils/getFullDate";

const ArticleItem = ({ article, type }: {article: ArticleItemType, type?: string}) => {
    const globalDarkTheme = useThemeContext()
    const focusStyles = "focus:outline-offset-4 focus:rounded-sm focus:border-sky-500/50"

    return (
        <>
            {type === 'blog' && <Divider />}
            <li className="py-2">
                <h1 className={`${globalDarkTheme ? "text-white" : ""} font-semibold hover:text-gray-700 hover:underline ${focusStyles}`}>
                    <Link to={`/blog/${article._id}`}>{article.blog_title}</Link>
                </h1>
                <span className="text-gray-400 italic text-sm">{getFullDate(article.created_time)}</span>
                {type === 'blog' && (
                    <span className={`${globalDarkTheme ? "text-gray-400" : ""} block font-light`}>{article.blog_preview}</span>
                )}
            </li>
        </>
    )
}

export default ArticleItem;