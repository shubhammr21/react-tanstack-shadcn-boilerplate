import { createLazyFileRoute } from '@tanstack/react-router'

import LoginPage from '@/app/login/page'

export const Route = createLazyFileRoute('/_login/login')({
  component: LoginPage,
})
