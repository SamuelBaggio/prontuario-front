import NavBar from "@/componentes/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardPaciente from '@/componentes/CardPacientes';
import { getPacientes } from "@/actions/pacientes";

export default async function cdPacientes() {
    const data = await getPacientes()
    return (
      <>
      <NavBar/>
      <main className='m-10'>
        <div>
          <h2 className='text-xl font-bold tracking-wide ml-20'> Pacientes </h2>
            {data.map((paciente) => {
              return <CardPaciente paciente={paciente}/>
            })}
        </div>
        <a href="/cdPacientes/new" className="bg-blue-600 text-white py-2 ml-20 px-4 rounded hover:bg-blue-800">
            Cadastrar Paciente
        </a>
      </main>

      </>
    )
  }