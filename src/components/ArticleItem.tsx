import { Link } from "react-router-dom";
import ArticleItemType from "../types/ArticleItemType";

const ArticleItem = ({ article, type }: {article: ArticleItemType, type?: string}) => {
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
        {type === 'blog' && <div className='border border-neutral-300'></div>}
        <li className="py-2">
            <h1 className="font-medium">
                <Link to="/" className="hover:text-gray-700 hover:underline focus:p-[1px] focus:border-2 focus:rounded-md focus:border-sky-600">{article.title}</Link>
            </h1>
            <span className="text-gray-500 italic text-sm">{getFullDate(article.date)}</span>
            {type === 'blog' && (
                <span className="block">{article.excerpt}</span>
            )}
        </li>
        </>
    )
}

export default ArticleItem;