import { useQuery } from '@tanstack/react-query'
import ArticleList from "../../components/ArticleList";
import PageHeading from '../../components/PageHeading';
import useThemeContext from '../../hooks/useThemeContext';
import { Link } from 'react-router-dom';

const Blog = () => {
    const globalDarkTheme = useThemeContext()
    const lgBreakpoint = window.innerWidth >= 1280

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

    return (
        <section className='min-h-[750px]'>
            <div className='flex place-content-between pt-10'>
                <article className="pb-3">
                    <PageHeading>My Blogs</PageHeading>
                    <p className={`${globalDarkTheme ? "text-white" : ""}`}>Below are all my recent blog posts. Click on any title to read the full article.</p>
                </article>
                <aside>
                    <button className='cursor-pointer border-3 rounded-md border-sky-500/50 px-3 py-1 xl:py-2 xl:px-5 text-sky-500/80 font-extrabold lg:font-medium'>
                        <Link to='create_blog'>{lgBreakpoint ? 'Create new blog post' : '+'}</Link>
                    </button>
                </aside>
            </div>
            <ArticleList articles={data?.blogs}/>
        </section>
    );
}

export default Blog;