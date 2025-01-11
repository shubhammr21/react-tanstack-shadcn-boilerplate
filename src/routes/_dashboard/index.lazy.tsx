import { createLazyFileRoute } from "@tanstack/react-router"

import Home from "@/app/dashboard/page"

export const Route = createLazyFileRoute("/_dashboard/")({
  component: Home
})
