// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const viewCount = useLoaderData()

    // const [viewCount, setViewCount] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/TasinTausif')
    //     .then(res => res.json())
    //     .then(data => setViewCount(data))
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {viewCount.followers}
        </div>
    )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/TasinTausif')

    return response.json();
}