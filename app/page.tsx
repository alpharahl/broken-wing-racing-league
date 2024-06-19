import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import {Lateef} from "next/dist/compiled/@next/font/dist/google";
import Latest from "@/components/landing/Latest";
import JoinUs from "@/components/landing/JoinUs";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="grid grid-cols-3 gap-5 px-5 py-10 w-full max-w-4xl">
      <div className="col-span-2">
        <Latest/>
      </div>
      <div className="flex flex-col items-center">
        <JoinUs/>
      </div>
    </div>
  );
}
