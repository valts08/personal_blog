import PageHeading from "../../components/PageHeading";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { createBlog } from "../../utils/reactQueryFunctions";

const CreateBlog = () => {

    const navigate = useNavigate()

    const [formVariables, setFormVariables] = useState({
        title: '',
        preview: '',
        content: ''
    });

    const { data, refetch, isPending, isError, error } = useQuery({
        queryKey: ['createBlog'],
        queryFn: async () => await createBlog(formVariables),
        enabled: false,
        retry: 0
    })

    const changeHandler = (e: any) => {
        setFormVariables(prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = () => {
        // after sending a post request, nevigate back to blogs page
        refetch()
        // check for error message
        if (data && data?.details || data?.error) return
        setTimeout(() => {
            navigate('/blog')
        }, 500)
    }

    return (
        <>
            <section className="py-10">
                <PageHeading>Create Blog</PageHeading>
                <div className="pb-5">
                    <input className="block p-2 border rounded-md border-gray-300 bg-white" type="text" name="title" onChange={(e) => changeHandler(e)}/>
                    <input className="block p-2 mt-4 border rounded-md border-gray-300 bg-white" type="text" name="preview" onChange={(e) => changeHandler(e)}/>
                    <textarea className="block mt-4 p-2 min-w-8/10 min-h-[250px] border rounded-md border-gray-300 bg-white resize" name="content" onChange={(e) => changeHandler(e)}/>
                </div>
                <button className="block cursor-pointer border-3 rounded-md border-sky-500/50 text-sky-500/80 py-1 px-3" onClick={() => handleSubmit()}>Submit</button>
            </section>
        </>
    )
}

export default CreateBlog;