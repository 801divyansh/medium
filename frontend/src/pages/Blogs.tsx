import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
        const {loading, blogs} = useBlogs();

        if(loading) {
            return <div>
                Loading...
                </div>
        }
        return <div>
                <AppBar />
                <div className="flex justify-center">
                <div>
                    {blogs.map(blog => 
                        < BlogCard 
                        key={blog.id}
                        id={blog.id}
                        authorName={blog.author.name || ""}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={" 2 jan 2024"}
                        />)}
                    
                </div>
            </div>
        </div>
}