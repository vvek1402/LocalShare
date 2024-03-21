import Logo from "@/components/Logo";
import User from "@/components/User";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
        <Logo />
        <User />
      </div>
    </>
  );
}
