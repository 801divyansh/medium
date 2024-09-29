import { Blog } from "../hooks"
import { AppBar } from "./AppBar"

export const FullBlog = ({blog} : {blog : Blog}) => {
    return <div>
        <AppBar /> 
            <div className="grid grid-cols-12 px-10 w-full">
                <div className=" bg-red-500 col-span-8">
                   <div className="bg-red-500 h-96">
                    {blog.title}
                   </div>
                   <div className="">
                    {blog.content}
                   </div>
                </div>
                <div className=" bg-yellow-200 col-span-4">
                    hello
                </div>
            </div>
    </div>
}