'use client'
import { destroy } from '@/actions/pacientes';


export default function CardPaciente({paciente}){
    const {id, nome, cpf, email, telefone} = paciente
    
    const handleDelete = async () => {
        console.log("asdasdasdasd");

        const response = await destroy(id);
    
        if (response?.error){
            console.log(response)
        }else{
          location.reload()
        }
    }

    return(
        <div className="flex bg-slate-100 p-5 rounded-xl mx-20 my-8 justify-between" key={id}>
            <div className="flex">
                <div className="self-center text-4xl mr-6">
                    <p><i className="bi bi-person-circle"></i></p>
                </div>
                <div className="">
                    <h5> <b>Nome: </b> {nome }</h5>
                    <h5> <b>CPF: </b> {cpf }</h5>
                    <h5> <b>Email: </b> {email }</h5>
                    <h5> <b>Telefone: </b> {telefone }</h5>
                </div>
            </div>
            <div className="text-xl text-white">
                <button>
                    <i className="bi bi-pencil-square m-1 bg-yellow-400 p-1 rounded"></i>
                </button>
                <button onClick={handleDelete}>
                    <i className="bi bi-trash3 m-1 bg-red-400 p-1 rounded"></i>
                </button>
            </div>
        </div>
    )
}