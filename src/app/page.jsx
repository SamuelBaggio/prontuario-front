import CardPaciente from '@/componentes/CardPacientes';
import NavBar from '@/componentes/NavBar'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

async function getPacientes(){
  const url = "http://localhost:8080/api/pacientes"
  const result = await fetch(url)
  return result.json()
}

export default async function Home() {
  // const dataPaciente = await getPacientes()
  return (
    <>
    <NavBar/>
      <main className='m-10'>
        <div className='flex  justify-center gap-3'>
          <button className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-20 border border-slate rounded-lg">
            <Link href="/cdProntuarios/new">
              Efetuar Prontuário
            </Link>
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-20 border border-slate rounded-lg">
            <Link href="/cdPacientes/new">
              Adicionar Pacientes
            </Link>
          </button>          
          <button className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-20 border border-slate rounded-lg">
            <Link href="/cdClinicos/new">
              Adicionar Clínico
            </Link>
          </button>
        </div>
        <hr className="h-1 mx-20 my-10 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700" />
        <div>
          <h2 className='text-xl font-bold tracking-wide mb-8'> Pacientes Recentes </h2>
            {dataPaciente.map((paciente) => {
              return <CardPaciente paciente={paciente}/>
            })}
        </div>
      </main>
    </>
  )
}
