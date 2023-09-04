import NavBar from "@/componentes/NavBar";

export default function cdPacientes() {
    return (
      <>
      <NavBar/>
        <div>
            Pacientes
        </div>

        <a href="/cdPacientes/new" className="bg-pink-600 py-2 px-4 rounded hover:bg-pink-800">
            cadastrar pacientes
          </a>
      </>
    )
  }