import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// const queryClient = useQueryClient();
// const key = "translation";

const translate = async (text, toLanguage) => {
  const options = {
    method: "POST",
    // url: import.meta.env.VITE_APP_Base_URL,
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",

    params: {
      "to[0]": toLanguage,
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5b14fa506fmshb3f1160403f2306p1fae83jsnf8f5d7966f89",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [
      {
        Text: text,
      },
    ],
  };

  const res = await axios.request(options);
  return res.data;
};

export const useTranslate = () => {
  return useMutation({
    mutationFn: (formData) => translate(formData.text, formData.toLanguage),
  });
};
