"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth-store";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, clearAuth } = useAuthStore();

  const handleSignOut = async () => {
    await authClient.signOut();
    clearAuth();
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    router.push("/sign-in");
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome, {user.name}
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            You are signed in as {user.email}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                Orders
              </h3>
              <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                0
              </p>
              <p className="mt-1 text-sm text-zinc-500">Total orders</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                Wishlist
              </h3>
              <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                0
              </p>
              <p className="mt-1 text-sm text-zinc-500">Saved items</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                Cart
              </h3>
              <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                0
              </p>
              <p className="mt-1 text-sm text-zinc-500">Items in cart</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
