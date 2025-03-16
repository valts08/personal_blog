import ArticleItemType from "../types/ArticleItemType";
// interface weekDay {
//     identifier: string,
//     day: string
// }

const ArticleItem = (article: ArticleItemType) => {
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
        <li className="pb-2">
            <h1 className="font-medium">
                <a href="" className="hover:text-gray-700 hover:underline">{article.title}</a>
            </h1>
            <span className="text-gray-500 italic text-sm">{getFullDate(article.date)}</span>
        </li>
    )
}

export default ArticleItem;