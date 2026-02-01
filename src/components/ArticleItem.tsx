import { Link } from "react-router-dom";
import ArticleItemType from "../types/ArticleItemType";
import useThemeContext from "../hooks/useThemeContext";
import Divider from "./Divider";

const ArticleItem = ({ article, type }: {article: ArticleItemType, type?: string}) => {
    const globalDarkTheme = useThemeContext()
    const focusStyles = "focus:outline-offset-4 focus:rounded-sm focus:border-sky-500/50"

    const months = new Map([
        [0,"January"],
        [1,"February"],
        [2,"March"],
        [3,"April"],
        [4,"May"],
        [5,"June"],
        [6,"July"],
        [7,"August"],
        [8,"September"],
        [9,"October"],
        [10,"November"],
        [11,"December"],
    ])

    const getFullDate = (date: number) => {
        const publishedMonth = new Date(date).getMonth()
        const publishedDate = new Date(date).getDate()
        const publishedYear = new Date(date).getFullYear()

        return `${months.get(publishedMonth)} ${publishedDate}, ${publishedYear}`
    }

    return (
        <>
            {type === 'blog' && <Divider />}
            <li className="py-2">
                <h1 className={`${globalDarkTheme ? "text-white" : ""} font-semibold hover:text-gray-700 hover:underline ${focusStyles}`}>
                    <Link to={`/blog/${article._id}`}>{article.blog_title}</Link>
                </h1>
                <span className="text-gray-400 italic text-sm">{getFullDate(article.created_at_timestamp)}</span>
                {type === 'blog' && (
                    <span className={`${globalDarkTheme ? "text-gray-400" : ""} block font-light`}>{article.blog_preview}</span>
                )}
            </li>
        </>
    )
}

export default ArticleItem;