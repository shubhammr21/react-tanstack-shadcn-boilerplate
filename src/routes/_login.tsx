import { createFileRoute, redirect } from "@tanstack/react-router"

import LoginPage from "@/app/login/page"

export const Route = createFileRoute("/_login")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication
    if (isLogged()) {
      throw redirect({
        to: "/"
      })
    }
  },
  component: LoginPage
})
