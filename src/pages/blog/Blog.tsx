import { mockArticles } from '../../utils/mockArticles';
import ArticleList from "../../components/ArticleList";

const Blog = () => {

    return (
        <section className='min-h-[750px]'>
            <article className="pt-10 pb-3">
                <h1 className="text-3xl font-bold pb-3">My Articles</h1>
                <p>Below are all my recent blog posts. Click on any title to read the full article.</p>
            </article>
            <ArticleList articles={mockArticles}/>
        </section>
    );
}

export default Blog;