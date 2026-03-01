import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PageHeading from "../../components/PageHeading";
import getFulLDate from "../../utils/getFullDate";
import ThreeDotsSettings from "../../assets/images/three-dots-settings.svg"
import { createPortal } from "react-dom";
import BlogOptionsModal from "./BlogOptionsModal";
import { getBlogById } from "../../utils/reactQueryFunctions";

const BlogByID = () => {

    const mainAppContainer = document.body.querySelector(".mainContainer")
    const [settingsOpenStatus, setSettingsOpenStatus] = useState(false);
    const params = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['blogItem'],
        queryFn: async () => await getBlogById(params.id)
    })

    const handleToggleBlogSettings = () => {
        setSettingsOpenStatus(prevState => !prevState)
    }

    const listenForSettingsModalClose = (e: any) => {
        if (!e.target?.classList.contains("blogSettingsModal")) {
            setSettingsOpenStatus(false)
        }
    }

    useEffect(() => {
        if (settingsOpenStatus) {
            document.addEventListener("click", listenForSettingsModalClose);
        } else {
            document.removeEventListener("click", listenForSettingsModalClose);
        }
    }, [settingsOpenStatus])


    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && data?.blog == null ? 
                (
                    <div>Uh oh.... looks like this blog doesn't exist :/</div>
                ) : (
                    <section className="pt-10">
                        <div className="flex place-content-between items-center">
                            <PageHeading>{data?.blog.blog_title}</PageHeading>
                            <span className="cursor-pointer" onClick={(e) => {
                                    e.stopPropagation(); // Prevent the click event from propagating to the document listener set above
                                    handleToggleBlogSettings();
                                }}>
                                <img src={ThreeDotsSettings} alt="..." className="max-w-[20px] max-h-[20px]" />
                            </span>
                        </div>
                        {data?.blog.blog_content && settingsOpenStatus && createPortal( <BlogOptionsModal/>
                            , mainAppContainer || document.body)}
                        <span className="italic">{(data?.blog.modified_time - data?.blog.created_time) > 1000 ? 'Edited on' : 'Published On'} {getFulLDate(Math.max(data?.blog.created_time, data?.blog.modified_time))}</span>
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