import { createFileRoute, redirect } from "@tanstack/react-router"

import DashboardLayout from "@/app/dashboard/layout"

export const Route = createFileRoute("/_dashboard")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication
    if (!isLogged()) {
      throw redirect({
        to: "/login"
      })
    }
  },
  component: DashboardLayout
})
