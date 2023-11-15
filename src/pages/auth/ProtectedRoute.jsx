import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getProfileFn } from "../../api/authApi";
import { authStore } from "../../store";
import Loader from "../../components/Loader";

export default function ProtectedRoute() {
  const cookies = useCookies(["csrf_token"]);
  const location = useLocation();

  const {
    isLoading,
    isFetching,
    data: user,
  } = useQuery(["authUser"], getProfileFn, {
    retry: 1,
    select: (data) => data.data.user,
    onSuccess: (data) => {
      stateContext.dispatch({ type: "SET_USER", payload: data });
    },
  });

  return <div>ProtectedRoute</div>;
}
