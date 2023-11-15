import { create } from "zustand";

export const authStore = create(
  (set, get) => ({
    userInfo: null,
    loading: false,
    user: () => ({
      user_id: get().userInfo?.user_id || null,
      username: get().userInfo?.username || null,
    }),
    setUser: (user) => set({ userInfoData: user }),
    setLoading: (loading) => set({ loading }),
    isLoggedIn: () => get().userInfo !== null,
  }),
  {
    name: "auth-store",
  }
);
