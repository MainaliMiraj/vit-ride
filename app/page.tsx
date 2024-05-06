import Navbar from "@/components/Navbar/Navbar";
import Welcome from "@/components/Welcome/Welcome";
import Achivement from "@/components/Achivement/Achivement";
import WhyVit from "@/components/WhyVit/WhyVit";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <Navbar />
      <Welcome />
      <Achivement />
      <WhyVit />
    </div>
  );
}
