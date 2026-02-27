import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogOptionsModal = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { data, refetch } = useQuery({
        queryKey: ['blogDelete'],
        queryFn: async () => {
            const deletePromise = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${params.id}`,{
                method: 'DELETE'
            })            
            const response = deletePromise.json()
            return response
        },
        enabled: false
    })

    const handleBlogDelete = () => {
        refetch()
        if (!data || !data.blog) return
        setTimeout(() => {
            navigate('/blog')
        }, 500)
    }

    return (
        <>
            <div className="absolute flex flex-col place-content-evenly blogSettingsModal min-w-[125px] min-h-[50px] border-1 border-neutral-500 rounded-lg bg-white/40 top-15 right-10 p-2">
                <span className="cursor-pointer">
                    <Link to={`/blog/${params.id}/edit`}>Edit</Link>
                </span>
                <span className="cursor-pointer" onClick={() => handleBlogDelete()}>Delete</span>
            </div>
        </>
    )
}

export default BlogOptionsModal