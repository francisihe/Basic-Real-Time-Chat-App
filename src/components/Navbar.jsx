import { UserAuth } from "../contexts/AuthContext"


const Navbar = () => {
  const { currentUser, signOutCurrentUser } = UserAuth();

  const handleLogOut = async () => {
    try {
      if (currentUser) {
        await signOutCurrentUser();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">ChatApp</a>

        {(currentUser)
          ? (<div className="flex">
            <div className="w-10 pr-2">
              <img src={currentUser.photoURL} className="rounded-full" />
            </div>
            <button onClick={handleLogOut}>Logout</button>
          </div>)

          : ""
        }

      </div>
    </div>
  )
}

export default Navbar