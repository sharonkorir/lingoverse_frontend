import { Box, Button, Center, Textarea } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useLanguages } from "../hooks/useLanguages";
import { useTranslate } from "../hooks/useTranslate";

export default function Translate() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data: languagesData, error: languagesError } = useLanguages();
  const { mutate, status, data: translationData } = useTranslate();

  const languages = languagesData?.results.map((language) => ({
    value: language.language_short_code,
    label: language.lang_name,
  }));

  const onSubmit = (values) => {
    console.log("Form Submitted");
    console.log("Selected language:", values.language.value);
    console.log("Text Input:", values.inputText);
    mutate({
      text: values.inputText,
      toLanguage: values.language.value,
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          id="inputText"
          placeholder="start typing..."
          {...register("inputText", {
            required: "This is required",
          })}
        />

        <Controller
          control={control}
          defaultValue="en"
          name="language"
          render={({ field }) => <Select {...field} options={languages} />}
        />
        <Button type="submit">Translate</Button>
      </form>
    </Box>
  );
}
