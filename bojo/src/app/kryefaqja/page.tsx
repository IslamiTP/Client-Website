
import FooterBar from "@/components/navigation/Footer";
import Link from "next/link";

export default function Kryefaqja() {
    return(
        <div className ="">
            <a className="text-black">
            Mir Se Vini Te Bojo Resort
            </a>

            <div>
                <Link href="/learnmore">
                    <h3 className="font-bold text-black mb-1 cursor-pointer
                                     hover:underline"
                        > 
                        Moso Me Shum 
                    </h3>
                </Link>
            </div>


            <FooterBar
            >
                
            </FooterBar>

        </div>
    );
}
    