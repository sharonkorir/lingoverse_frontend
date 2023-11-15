import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const translate = async (text, toLanguage) => {
  console.log(
    "translate is underway",
    import.meta.env.VITE_APP_Base_URL,
    "url"
  );
  const options = {
    method: "POST",
    url: import.meta.env.VITE_APP_Base_URL,

    params: {
      "to[0]": toLanguage,
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_APP_RapidAPI_Key,
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [
      {
        Text: text,
      },
    ],
  };

  const res = await axios.request(options);
  console.log(res, "request response");
  return res.data;
};

export const useTranslate = () => {
  return useMutation({
    mutationFn: (formData) => translate(formData.text, formData.toLanguage),
  });
};
