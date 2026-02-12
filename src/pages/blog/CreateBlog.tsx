import PageHeading from "../../components/PageHeading";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useReducer } from "react";

const CreateBlog = () => {

    const initialState = {
        title: {
            data: ''
        },
        preview: {
            data: ''
        },
        content: {
            data: ''
        }
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "TITLE":
                return { ...state, title: action.data};
            case "PREVIEW":
                return { ...state, preview: action.data};
            case "CONTENT":
                return { ...state, content: action.data};
            default:
                return;
        }
    }

    const [blogData, dispatch] = useReducer(reducer, initialState)

    const { data, refetch, isPending, isError, error } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const response = await fetch('https://blogapi-production-6036.up.railway.app/api/blog', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user_id: new Date().getUTCMilliseconds(), // this is temporary, will eventually incorporate user_id generation via timestamp + additional operations
                    blog_title: blogData.title,
                    blog_preview: blogData.preview,
                    blog_content: blogData.content
                })
            })

            return response.json();
        },
        enabled: false,
        retry: 0
    })

    useEffect(() => {
        console.log(blogData, 'reducer data');
    },[blogData]);

    return (
        <>
            <section className="py-10">
                <PageHeading>Create Blog</PageHeading>
                <div className="pb-5">
                    <input className="block p-2 border-1 border-md" type="text" placeholder="Title" onChange={(e) => dispatch({type: 'TITLE', data: e.target.value})}/>
                    <input className="block p-2 mt-4 border-1 border-md" type="text" placeholder="Summary" onChange={(e) => dispatch({type: 'PREVIEW', data: e.target.value})}/>
                    <textarea className="block mt-4 p-2 min-w-8/10 min-h-[250px] border-1 border-md resize" placeholder="Start writing your blog..." onChange={(e) => dispatch({type: 'CONTENT', data: e.target.value})}/>
                </div>
                <button className="block cursor-pointer border-3 rounded-md border-sky-500/50 text-sky-500/80 py-1 px-3" onClick={() => refetch()}>Submit</button>
            </section>
        </>
    )
}

export default CreateBlog;