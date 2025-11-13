import { useParams } from "react-router-dom"

export default function User() {
    const { userId = "000", userName = "guest" } = useParams()
    return (
        <>
            {/* Here the var name came from main file's variable name. As it is */}
            <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-100 mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Information</h2>

                <p className="text-lg text-gray-700">
                    <span className="font-medium text-blue-600">User ID:</span> {userId}
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    <span className="font-medium text-green-600">Name:</span> {userName}
                </p>
            </div>
        </>
    )
}