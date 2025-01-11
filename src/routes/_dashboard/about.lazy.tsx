import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_dashboard/about")({
  component: About
})

function About() {
  return (
    <>
      <Link to="/">Home</Link>
      <div className="p-2">Hello from About!</div>
    </>
  )
}
