import { SignIn } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Navbar />
      <div className="mt-16">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}
