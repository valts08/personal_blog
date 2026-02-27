import PageHeading from "../../components/PageHeading";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useReducer, useState } from "react";

const EditBlog = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [formVariables, setFormVariables] = useState({
        title: '',
        preview: '',
        content: ''
    });

    const { data: dataEditBlog, refetch: refetchEditBlog } = useQuery({
        queryKey: ['getBlogByID', params.id],
        queryFn: async () => {
            const response = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${params.id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            
            return response.json();
        }
    })

    const changeHandler = (e: any) => {
        setFormVariables(prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value }
        })
    }
                    
    // after sending a put request, nevigate back to blogs page
    const handleEditSubmit = () => {
        // send put request
        // check for error message
        // if (data.details || data.error) return
        // setTimeout(() => {
        //     navigate('/blog')
        // }, 500)
    }

    useEffect(() => {
        if (dataEditBlog) {
            setFormVariables({ 
                title: dataEditBlog.blog.blog_title,
                preview: dataEditBlog.blog.blog_preview,
                content: dataEditBlog.blog.blog_content,
            })
        }
    }, [dataEditBlog])

    return (
        <>
            <section className="py-10">
                <PageHeading>Edit Blog</PageHeading>
                <div className="pb-5">
                    <input className="block p-2 border rounded-md border-gray-300 bg-white" type="text" value={formVariables.title} name="title" onChange={(e) => changeHandler(e)}/>
                    <input className="block p-2 mt-4 border rounded-md border-gray-300 bg-white" type="text" value={formVariables.preview} name="preview" onChange={(e) => changeHandler(e)}/>
                    <textarea className="block mt-4 p-2 min-w-8/10 min-h-[250px] border rounded-md border-gray-300 bg-white resize" value={formVariables.content} name="content" onChange={(e) => changeHandler(e)}/>
                </div>
                <button className="block cursor-pointer border-3 rounded-md border-sky-500/50 text-sky-500/80 py-1 px-3" onClick={() => handleEditSubmit()}>Edit</button>
            </section>
        </>
    )
}

export default EditBlog;