import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import {createClient} from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import {Lateef} from "next/dist/compiled/@next/font/dist/google";
import Latest from "@/components/landing/Latest";
import JoinUs from "@/components/landing/JoinUs";
import Congrats from "@/components/landing/Congrats";

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
                <Congrats/>
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl">Races Every Tuesday, Thursday, Sunday at 9PM EST</h2>
                <h3 className={"mt-3"}>Tuesdays are Super Formula Lights</h3>
                <ol className="ml-3">
                    <li>June 11: Montreal / CGV</li>
                    <li>June 18: Barcelona Historic</li>
                    <li>June 25: Red Bull Ring</li>
                    <li>July 2: Silverstone</li>
                    <li>July 9: Navarra</li>
                    <li>July 16: Fuji</li>
                </ol>
                <h3 className={"mt-3"}>Thursdays are Vee's/Ray's Multiclass</h3>
                <ol className="ml-3">
                    <li>June 13: Oulton - No Chicanes</li>
                    <li>June 20: Okayama Short</li>
                    <li>June 27: Navarra Medium</li>
                    <li>July 4: Summit Point</li>
                    <li>July 11: Winton National</li>
                    <li>July 18: Tsukuba</li>
                </ol>
                <h3 className={"mt-3"}>Sundays are GT3</h3>
                <ol className="ml-3">
                    <li>June 16: Watkins Glen</li>
                    <li>June 23: Philip Island (1.25x points)</li>
                    <li>June 30: Barcelona Historic</li>
                    <li>July 7: Daytona RC (90m race, 1.5x points)</li>
                    <li>July 14: Brands Hatch</li>
                    <li>July 21: Navarra</li>
                </ol>
            </div>
        </div>
    );
}
