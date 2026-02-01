import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";

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
                    <div>{data?.blog.blog_content}</div>
                )
            }
        </>
    )
}

export default BlogByID