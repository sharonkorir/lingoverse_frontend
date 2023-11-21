import {
  Box,
  Button,
  Center,
  Flex,
  Textarea,
  Card,
  CardBody,
  Spinner,
  CardFooter,
  Divider,
  Select as ChakraSelect,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useLanguages } from "../hooks/useLanguages";
import { useTranslate } from "../hooks/useTranslate";
import { useState } from "react";

export default function Translate() {
  const [translatedText, setTranslatedText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  // const handleChange = (event) => setDetectedLanguage(event.target.value);

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

  const onSubmit = async (values) => {
    await mutate(
      {
        text: values.inputText,
        toLanguage: values.language.value,
      },
      {
        onSuccess: (data) => {
          const detectedLang = data?.[0]?.detectedLanguage?.language || ""; // access 'data' directly here
          setDetectedLanguage(detectedLang);

          const translation = data?.[0]?.translations?.[0]?.text || "";
          setTranslatedText(translation);
          console.log(data, "translation res", detectedLang, translation);
        },
      }
    );
  };

  return (
    <Box px={{ base: "10px", lg: "300px" }} height="100vh" py={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardBody>
            <Flex gap={2}>
              <Box width="50%">
                <Input
                  placeholder="Detected language:"
                  variant="unfilled"
                  value={detectedLanguage}
                  readOnly
                  pb={2}
                />
                <Textarea
                  id="inputText"
                  placeholder="start typing..."
                  {...register("inputText", {
                    required: "This is required",
                  })}
                  height="250px"
                  variant="filled"
                />
              </Box>

              <Divider orientation="vertical" />

              <Box width="50%">
                <Controller
                  control={control}
                  defaultValue="en"
                  name="language"
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={languages}
                      placeholder="Select a language"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          border: "none",
                        }),
                      }}
                    />
                  )}
                />
                <Input
                  as="textarea"
                  pt="20px"
                  id="translation"
                  height="250px"
                  value={translatedText}
                  readOnly
                />
              </Box>
            </Flex>
          </CardBody>

          <CardFooter alignItems="center" justifyContent="center">
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Translating"
              colorScheme="teal"
              variant="outline"
            >
              Translate
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Box>
  );
}
