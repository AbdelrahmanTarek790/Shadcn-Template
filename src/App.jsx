import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/toaster"

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")))
    // const [loading, setLoading] = useState(true)
    // const { setState, state } = useStore()
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         const token = localStorage.getItem("token")
    //         getMethod("/users/get-me", token).then((res) => {
    //             console.log(res)
    //             setLoading(false)
    //             if (res.status === "fail") {
    //                 setIsLoggedIn(false)
    //                 localStorage.removeItem("token")
    //                 return
    //             }
    //             setState(res.data.user)
    //         })
    //     }
    // }, [])
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster />
        </ThemeProvider>
    )
}

export default App
