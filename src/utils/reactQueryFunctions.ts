interface blogDataType {
    title: string,
    preview: string,
    content: string
}

const getBlogById = async (id: string | undefined) => {

    const response = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    
    return response.json();
}

const getAllBlogs = async () => {

    const response = await fetch('https://blogapi-production-6036.up.railway.app/api/blogs', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
}

const deleteBlog = async (id: string | undefined) => {

    const deletePromise = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${id}`,{
        method: 'DELETE'
    })            
    const response = deletePromise.json()
    return response
}

const createBlog = async (data: blogDataType) => {

    const response = await fetch('https://blogapi-production-6036.up.railway.app/api/blog', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: new Date().getUTCMilliseconds(), // this is temporary, will eventually incorporate user_id generation via timestamp + additional operations
            blog_title: data.title,
            blog_preview: data.preview,
            blog_content: data.content
        })
    })

    return response.json();
}

const editBlog = async (data: blogDataType, id: string | undefined) => {

    const response = await fetch(`https://blogapi-production-6036.up.railway.app/api/blog/${id}/edit`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: new Date().getUTCMilliseconds(), // this is temporary, will eventually incorporate user_id generation via timestamp + additional operations
            blog_title: data.title,
            blog_preview: data.preview,
            blog_content: data.content
        })
    })

    return response.json();
}


export { 
    getBlogById,
    getAllBlogs,
    deleteBlog,
    createBlog,
    editBlog
}