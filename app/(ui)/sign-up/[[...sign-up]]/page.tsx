import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Navbar />
      <div className="mt-10">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}
