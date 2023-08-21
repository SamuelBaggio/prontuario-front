import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NotFound(){
    return(
        <div className="grid place-items-center h-screen">
            <div className="bg-slate-100 p-20 rounded-xl font-semibold tracking-wide">
                <p className="text-4xl text-blue-900"> <i class="bi bi-exclamation-circle mr-3"></i> Essa página não existe!!! </p>
                <p className="text-center mt-4"> Volte para a página principal <Link href="/" className="underline"> aqui </Link></p>
            </div>
        </div>
    )
}