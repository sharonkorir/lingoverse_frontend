import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const fetchLanguages = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/languages/");
  return res.data;
};

export const useLanguages = () => {
  // return useQuery("languages", fetchLanguages, {
  //   onSuccess,
  //   onError,
  //   select: (data) => {
  //     const languageNames = data.data.results.map((lang) => lang.lang_name);
  //     return languageNames;
  //   },
  // });

  return useQuery({
    queryKey: ["languages"],
    queryFn: fetchLanguages,
    staleTime: Infinity,
  });
};
