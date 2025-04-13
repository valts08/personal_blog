import { mockArticles } from '../../utils/mockArticles';
import ArticleList from "../../components/ArticleList";
import PageHeading from '../../components/PageHeading';
import useThemeContext from '../../hooks/useThemeContext';

const Blog = () => {
    const globalDarkTheme = useThemeContext()

    return (
        <section className='min-h-[750px]'>
            <article className="pt-10 pb-3">
                <PageHeading>My Articles</PageHeading>
                <p className={`${globalDarkTheme ? "text-white" : ""}`}>Below are all my recent blog posts. Click on any title to read the full article.</p>
            </article>
            <ArticleList articles={mockArticles}/>
        </section>
    );
}

export default Blog;