
import UsersTable2 from "@/components/Users/UsersTable2";
import { getAllUsers } from "@/db/firebase";

export default async function Users() {
  const users  =await getAllUsers();
  return (
     <UsersTable2 users={users}/>
  )
}

