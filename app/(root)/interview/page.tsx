import Agent from "@/app/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in"); // Redirect to sign-in page
  }

  return (
    <>
      <h3>Interview generation</h3>
      <Agent
        userName={user.name}
        userId={user.id}
        profileImage={user.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;