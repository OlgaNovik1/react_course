import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export const withAuth = (Component) => (props) => {
    const { user, setUser } = useContext(AuthContext)

    if (!user) return <p> Вы не авторизованы!</p>

    return <Component {...props} />
}