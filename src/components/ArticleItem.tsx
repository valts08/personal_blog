import { Link } from "react-router-dom";
import ArticleItemType from "../types/ArticleItemType";
import useThemeContext from "../hooks/useThemeContext";
import Divider from "./Divider";

const ArticleItem = ({ article, type }: {article: ArticleItemType, type?: string}) => {
    const globalDarkTheme = useThemeContext()

    const months = new Map([
        [0,"January"],
        [1,"Febuary"],
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

    const getFullDate = (date: string) => {
        const publishedMonth = new Date(date).getMonth()
        const publishedDate = new Date(date).getDate()
        const publishedYear = new Date(date).getFullYear()

        return `${months.get(publishedMonth)} ${publishedDate}, ${publishedYear}`
    }

    return (
        <>
            {type === 'blog' && <Divider />}
            <li className="py-2">
                <h1 className={`${globalDarkTheme ? "text-white" : ""} font-medium`}>
                    <Link to="/" className="font-semibold hover:text-gray-700 hover:underline focus:p-[1px] focus:border-2 focus:rounded-md focus:border-sky-600">{article.title}</Link>
                </h1>
                <span className="text-gray-400 italic text-sm">{getFullDate(article.date)}</span>
                {type === 'blog' && (
                    <span className={`${globalDarkTheme ? "text-gray-400" : ""} block font-light`}>{article.excerpt}</span>
                )}
            </li>
        </>
    )
}

export default ArticleItem;