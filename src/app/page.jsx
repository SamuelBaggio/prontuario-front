import CardPaciente from '@/componentes/CardPacientes';
import NavBar from '@/componentes/NavBar'
import "bootstrap-icons/font/bootstrap-icons.css";

async function getPacientes(){
  const url = "http://localhost:8080/api/pacientes"
  const result = await fetch(url,  { next: { revalidate: 0 } })
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
            Efetuar Prontuário
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-20 border border-slate rounded-lg">
            Adicionar Paciente
          </button>          
          <button className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-20 border border-slate rounded-lg">
            Adicionar Clínico
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
