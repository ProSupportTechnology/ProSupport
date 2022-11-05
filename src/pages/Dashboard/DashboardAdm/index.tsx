import { useUserContext } from "../../../contexts/UserContext"

export const DashboardAdm = () => {
  const { user } = useUserContext()
  console.log(user)
  return (
    <>

    </>
    )
}
