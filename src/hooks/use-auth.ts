export const useAuth = () => {
    const signOut = async () => {
        try {
            const res = await fetch(`api/endpoint`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            
        }
    }
}