import { useQuery } from '@tanstack/react-query'
import ArticleList from "../../components/ArticleList";
import PageHeading from '../../components/PageHeading';
import useThemeContext from '../../hooks/useThemeContext';

const Blog = () => {
    const globalDarkTheme = useThemeContext()

    const { data } = useQuery({
        queryKey: ['blogArticles'],
        queryFn: async () => {
            const response = await fetch('https://blogapi-production-6036.up.railway.app/api/blogs', {
                method: 'GET',
                mode: 'cors'
            });
            return response.json();
        }
    })

    console.log(data)


    return (
        <section className='min-h-[750px]'>
            <article className="pt-10 pb-3">
                <PageHeading>My Articles</PageHeading>
                <p className={`${globalDarkTheme ? "text-white" : ""}`}>Below are all my recent blog posts. Click on any title to read the full article.</p>
            </article>
            <ArticleList articles={data?.blogs}/>
        </section>
    );
}

export default Blog;