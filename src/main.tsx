import { StrictMode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { createRoot } from "react-dom/client"

import { ThemeProvider } from "@/components/theme-provider"

import "./index.css"
import { routeTree } from "./routeTree.gen"

const queryClient = new QueryClient()

const router = createRouter({ routeTree })
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)
