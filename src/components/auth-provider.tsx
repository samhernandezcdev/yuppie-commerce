"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth-store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        const { data } = await authClient.getSession();
        if (data?.user) {
          setUser({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            image: data.user.image ?? null,
          });
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };
    fetchSession();
  }, [setUser, setLoading]);

  return <>{children}</>;
}
