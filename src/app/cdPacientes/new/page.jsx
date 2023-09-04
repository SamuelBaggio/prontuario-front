"use client"

import { create } from "@/actions/pacientes";
import Button from "@/componentes/Button";
import ButtonLink from "@/componentes/ButtonLink";
import InputText from "@/componentes/InputText";
import NavBar from "@/componentes/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormContas() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const res = await create(formData)
        if (res.message){
            setMessage(res.message)
            return
        }
        redirect("/pacientes")
    }

    return (
        <>
            <NavBar />

            <main className="p-11 mt-10 rounded-lg text-slate-800 max-w-md m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Pacientes</h2>

                <form action={handleSubmit}>
                    <InputText label="Nome" id="nome" name="nome" />
                    <InputText label="CPF" id="cpf" name="cpf" />
                    <InputText label="Email" id="email" name="email" />
                    <InputText label="Telefone" id="telefone" name="telefone" />

                <div className="flex justify-around">
                    <ButtonLink variante="secundary" href="/cdPacientes">Cancelar</ButtonLink>
                    <Button>Salvar</Button>
                </div>
                <p>{message}</p>
                </form>

            </main>
        </>
    )
}