import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = () => {
  return axios.get("http://127.0.0.1:8000/api/posts/");
};

export const usePosts = (onSuccess, onError) => {
  return useQuery("posts", fetchPosts, {
    onSuccess,
    onError,
    select: (data) => {
      const posts = data.data.results.map((post) => post.body);
      return posts;
    },
  });
};
