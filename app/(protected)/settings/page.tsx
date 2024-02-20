import { auth, signOut } from "@/auth"

const SettingsPage = async () => {

    const session = await auth()

    return (
        <div>
            <h1>Settings Page</h1>
            {
                JSON.stringify(session)
            }
            <form action={async () => {
                "use server"

                await signOut()
            }}>
                <button type="submit" className="bg-red-500 px-4 py-2 rounded-md">
                    Sign out
                </button>
            </form>
        </div>
    )
}

export default SettingsPage
