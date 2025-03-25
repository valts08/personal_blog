import LogoImg from '../../components/LogoImg';
import ArticleList from '../../components/ArticleList';
import { Link } from 'react-router-dom';
import { mockArticles } from '../../utils/mockArticles';

const Home = () => {

    return (
        <section>
            <article className="pb-10 pt-5">
                <div className='py-5'>
                    <h1 className="text-3xl font-bold pb-5 underline decoration-sky-500/50 decoration-6 underline-offset-0">Hi, I'm Paulina</h1>
                    <p>Welcome to my little corner of the internet! 
                    I'm thrilled to have you here. This space is where I'll be sharing my thoughts, experiences, and discoveries on everything from coding best practices and the latest web development trends, to my personal adventures in trying new recipes and exploring local hiking trails. 
                    Whether you're a fellow developer, a curious reader, or just someone looking for a bit of inspiration, I hope you'll find something here that resonates with you. 
                    So, grab a virtual cup of coffee, settle in, and let's embark on this journey together!</p>
                </div>
                <div className="flex justify-items-start gap-x-3.5">
                    <LogoImg type='x' />
                    <LogoImg type='github' />
                    <LogoImg type='linkedin' />
                    <LogoImg type='frontend-mentor' />
                </div>
            </article>
            <div className='border-b border-neutral-300'></div>
            <article className='py-10'>
                <div>
                    <h1 className='text-2xl font-bold pb-4'>Latest Articles</h1>
                    <ArticleList articles={mockArticles}/>
                </div>
                <Link to="/" className='underline underline-offset-3 decoration-2 decoration-sky-500/50 hover:text-gray-600'>View all articles</Link>
            </article>
        </section>
    );
}

export default Home;