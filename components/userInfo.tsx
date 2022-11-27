import { Loader } from "@mantine/core"
import { UseQueryUser } from "../hooks/useQueryUser"

export const UserInfo = () => {
    const { data: user, status} = UseQueryUser()
    if (status === 'loading' ) return <Loader />
    return <p>{user?.email}</p>
}
