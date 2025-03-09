interface ArticleItemType {
    id: number,
    title: string,
    author: string,
    date: string,
    category: string,
    tags: string[],
    excerpt: string,
    content: string,
    readTime: string,
    views: number
}

export default ArticleItemType;