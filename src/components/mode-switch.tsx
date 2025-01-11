import { useEffect } from "react"

import { Switch } from "@radix-ui/react-switch"
import { MoonIcon, SunIcon } from "lucide-react"

import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export const ThemeModeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  // Apply the theme to the document root
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      // Auto mode (you can enhance this part based on your app's logic, e.g., system preference)
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
    }
  }, [theme])

  return (
    <Switch
      checked={theme !== "light"} // Checked for dark or auto
      onCheckedChange={handleToggle}
      className={
        "relative inline-flex h-6 w-12 items-center rounded-full border bg-inherit focus:outline-none focus:ring-2 focus:ring-offset-2"
      }
    >
      {theme === "system" ? (
        <span className="absolute left-1/2 -translate-x-1/2 transform text-xs font-bold opacity-100 transition-opacity duration-300 ease-in">
          Auto
        </span>
      ) : (
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full transition",
            theme === "light" ? "translate-x-1.5" : "",
            theme === "dark" ? "translate-x-6" : ""
          )}
        >
          {theme === "light" ? (
            <SunIcon className="h-4 w-4 text-yellow-500" />
          ) : null}
          {theme === "dark" ? (
            <MoonIcon className="h-4 w-4 text-gray-300" />
          ) : null}
        </span>
      )}
    </Switch>
  )
}
