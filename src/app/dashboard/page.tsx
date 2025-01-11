import { Link } from "@tanstack/react-router"

export default function Home() {
  return (
    <>
      <Link to="/about">About</Link>
      <div className="h-[1000px]" />
    </>
  )
}
