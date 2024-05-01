"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QCProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
