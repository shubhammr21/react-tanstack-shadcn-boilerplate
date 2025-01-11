import { Link } from "@tanstack/react-router"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Link to="/about">About</Link>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo")
            }
          })
        }
      >
        Show Toast
      </Button>
      <div className="h-[1000px]" />
    </>
  )
}
