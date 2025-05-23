import MediaLinks from '../../components/MediaLinks';
import ArticleList from '../../components/ArticleList';
import PageHeading from '../../components/PageHeading';
import Divider from '../../components/Divider';
import { Link } from 'react-router-dom';
import { mockArticles } from '../../utils/mockArticles';
import useThemeContext from '../../hooks/useThemeContext';

const Home = () => {
    const globalDarkTheme = useThemeContext()
    const focusStyles = "focus:outline-offset-3 focus:rounded-md focus:border-sky-500/50"

    return (
        <section className="min-h-[750px]">
            <article className="pb-10 pt-5">
                <div className='py-5'>
                    <PageHeading>Hi, I'm Paulina 👋</PageHeading>
                    <p className={`${globalDarkTheme ? "text-neutral-400" : ""}`}>
                    Welcome to my little corner of the internet! 
                    I'm thrilled to have you here. This space is where I'll be sharing my thoughts, experiences, and discoveries on everything from coding best practices and the latest web development trends, to my personal adventures in trying new recipes and exploring local hiking trails. 
                    Whether you're a fellow developer, a curious reader, or just someone looking for a bit of inspiration, I hope you'll find something here that resonates with you. 
                    So, grab a virtual cup of coffee, settle in, and let's embark on this journey together!</p>
                </div>
                <div className="flex justify-items-start gap-x-3.5">
                    <MediaLinks />
                </div>
            </article>
            <Divider />
            <article className='py-10'>
                <div>
                    <h1 className={`${globalDarkTheme ? "text-white" : ""} text-2xl font-bold pb-4 inline mr-2`}>Latest Articles</h1>
                    <div className='inline-block w-[40px] border-b-4 border-sky-500/50'></div>
                    <ArticleList articles={mockArticles}/>
                </div>
                <Link to="/" className={`${globalDarkTheme ? "text-white" : ""} ${focusStyles} underline underline-offset-3 decoration-2 decoration-sky-500/50 hover:text-gray-600`}>View all articles</Link>
            </article>
        </section>
    );
}

export default Home;