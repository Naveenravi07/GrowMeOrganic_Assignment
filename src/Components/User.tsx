import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function UserComponent() {
    let navigate = useNavigate()

    useEffect(() => {
        let data = localStorage.getItem("user_data")
        if (!data) {
            alert("You must enter the details to access this page")
            navigate('/form')
        }
    }, [])

    return (
        <>
            <h1> You are now seeing this text bcz you are logged in </h1>
        </>
    )
}
