import { useState, useEffect } from "react";
import { useLanguages } from "../hooks/useLanguages";
import { Box, Text } from "@chakra-ui/react";
import Select from "react-select";

export default function Languages() {
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  // const onError = (error) => {
  //   console.log("perform side effect after encountering error", error);
  // };

  const { isLoading, data, error, isError, isFetching, refetch } = useLanguages(
    onSuccess
    // onError
  );

  console.log(data, "data");

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>error</Text>;
  }
  return (
    <Box>
      {/* use this approach for commens API to fetch them on clicking view comments */}
      {/* <Button onClick={refetch}>Fetch Languages</Button> */}
      Languages
      {data?.results.map((language) => {
        return <Text key={language.id}>{language.lang_name}</Text>;
      })}
    </Box>
  );
}
