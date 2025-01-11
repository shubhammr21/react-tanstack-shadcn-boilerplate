const AUTH_LOCAL_STORAGE_KEY = "demo-auth"

export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, "true")
  }
  const signOut = () => {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  }
  const isLogged = () => {
    return localStorage.getItem(AUTH_LOCAL_STORAGE_KEY) === "true"
  }
  return { signIn, signOut, isLogged }
}

export type AuthContext = ReturnType<typeof useAuth>
