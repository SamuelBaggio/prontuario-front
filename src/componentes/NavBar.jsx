import Link from "next/link";

export default function NavBar(){
    return(
        <nav className='flex justify-between bg-blue-950 p-10'>
            <ul className='flex gap-12 text-lg text-slate-300 items-center'> 
                <li>
                    <Link href="/">
                        <h1 className='text-xl tracking-wider text-slate-50 font-bold '> AtlasMED. </h1>
                    </Link>
                </li>
                <li>
                    <Link href="/cdPacientes">
                        Pacientes
                    </Link>
                </li>        
                <li>
                    <Link href="/cdClinicos">
                        Clínicos
                    </Link>
                </li>        
                <li>
                    <Link href="/cdProntuarios">
                        Prontuários
                    </Link>
                </li>
                <li>
                    <Link href="/cdConsultas">
                        Consultas
                    </Link>
                </li>
            </ul>
            <div className='text-xl text-slate-50 items-center flex'>
                <i class="bi bi-search"></i>
                <div className="h-9 w-9 rounded-full overflow-hidden ml-7">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" /> 
                </div>
            </div>
        </nav>
    )
}