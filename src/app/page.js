import Image from "next/image";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

export default function Home() {
  return (
   <div className="flex">
    <Sidebar />
    <Main />
   </div>
  );
}
