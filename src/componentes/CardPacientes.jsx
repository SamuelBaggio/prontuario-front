export default function CardPaciente({paciente}){
    const {nome, email} = paciente
    return(
        <div className="flex bg-slate-100 p-5 rounded mx-20">
            <div className="self-center text-4xl mr-6">
                <p><i class="bi bi-person-circle"></i></p>
            </div>
            <div className="">
                <h5> {nome }</h5>
                <h5> {nome }</h5>
            </div>
        </div>
    )
}