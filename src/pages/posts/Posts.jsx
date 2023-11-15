import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";

export default function Posts() {
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { isLoading, data, error, isError, isFetching, refetch } = usePosts(
    onSuccess,
    onError
  );
  // use for comments
  // {
  //   enabled: false /*disable fetch on mount so that fetch can be triggered by choose language button */,
  //   //   staleTime: 30000, /*this prevents the background refetch for 30seconds because the language list doesn't change often. default is 0 seconds */
  //   //   refetchOnWindowFocus: "always" /*fetch data every time you reopen the window*/
  //   //   refetchInterval: 2000, /*fetches data every two seconds refetchIntervalInBackgrorund will pull data even when window is not open. Good for posts*/
  // }

  console.log(data, "data");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {/* use this approach for commens API to fetch them on clicking view comments */}
      {/* <Button onClick={refetch}>Fetch Posts</Button> */}
      Posts
      {data?.map((languageNames) => {
        return <div key={languageNames}>{languageNames}</div>;
      })}
    </div>
  );
}
