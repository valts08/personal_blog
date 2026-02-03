import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import PageHeading from "../../components/PageHeading";
import getFulLDate from "../../utils/getFullDate";

const BlogByID = () => {

    const params = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['blogItem'],
        queryFn: async () => {
            const response = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${params.id}`)
            const data = response.json()
            
            return data
        }
    })

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && data?.blog == null ? 
                (
                    <div>Uh oh.... looks like this blog doesn't exist :/</div>
                ) : (
                    <section className="pt-10">
                        <PageHeading>{data?.blog.blog_title}</PageHeading>
                        <span className="italic">Published on {getFulLDate(data?.blog.created_at_timestamp)}</span>
                        <div className="pt-5">
                            {data?.blog.blog_content}
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default BlogByID