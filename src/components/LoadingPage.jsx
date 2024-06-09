import logoDark from "../assets/logo1.png"
import logoLight from "../assets/logo.png"
export const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <img src={localStorage.getItem("vite-ui-theme") === "light" ? logoLight : logoDark} alt="logo" className="w-36 h-36 animate-bounce " />
            {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div> */}
        </div>
    )
}
