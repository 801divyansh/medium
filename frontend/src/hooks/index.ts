import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "id": string;
    "title": string;
    "content": string;
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("No token found");
                }
                console.log("Token:", token);
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBlog(response.data.blog);
            } catch (err) {
                console.error("Failed to fetch blog:", err);
                if (axios.isAxiosError(err) && err.response) {
                    console.error("Response data:", err.response.data);
                    console.error("Response status:", err.response.status);
                    console.error("Response headers:", err.response.headers);
                }
                setError("Failed to fetch blog. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    return { loading, blog, error };
};

export const useBlogs = () => {
    const [loading, setLoading] =useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}