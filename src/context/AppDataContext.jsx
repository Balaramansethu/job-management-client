import { createContext, useState, ReactNode, useEffect } from "react"

const AppDataContext = createContext(undefined)

const AppDataContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([])
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [jobsData, setJobsData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [jobBeingEdited, setJobBeingEdited] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [location, setLocation] = useState("")
    const [jobType, setJobType] = useState("")
    const [salaryRange, setSalaryRange] = useState([10000, 70000])

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData")
        const storedIsLoggedIn = localStorage.getItem("isUserLoggedIn")

        if (storedUserData) {
            try {
                const parsedData = JSON.parse(storedUserData)
                setUserData(parsedData)
            } catch (err) {
                console.error("Failed to parse userData from localStorage", err)
            }
        }

        if (storedIsLoggedIn === "true") {
            setIsUserLoggedIn(true)
        }
    }, [])

    return (
        <AppDataContext.Provider
            value={{
                userData,
                setUserData,
                isUserLoggedIn,
                setIsUserLoggedIn,
                jobsData,
                setJobsData,
                showModal,
                setShowModal,
                jobBeingEdited,
                setJobBeingEdited,
                searchQuery,
                setSearchQuery,
                location,
                setLocation,
                jobType,
                setJobType,
                salaryRange,
                setSalaryRange,
            }}
        >
            {children}
        </AppDataContext.Provider>
    )
}

export { AppDataContext, AppDataContextProvider }
