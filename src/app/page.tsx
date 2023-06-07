import getCurrentUser from "@/actions/getCurrentUser";
import HomePage from "@/components/HomePage/page";
/* eslint-disable react/no-unescaped-entities */


export default async function Root() {
  const currentUser = await getCurrentUser()

  return (
  <div>
    <HomePage currentUser = {currentUser}/>
  </div>
  );
}