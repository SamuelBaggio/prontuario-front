'use server'

import { revalidatePath } from "next/cache"

  let url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api/pacientes"
      : "https://prontuario-back.up.railway.app/api/pacientes"; 

  // const url = 'https://prontuario-back.up.railway.app/api/pacientes';


export async function create(formData) {
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao criar a conta. Verifique os campos."}
    }
    revalidatePath("/contas")
    return {ok: "Conta criada com sucesso"}

}

export async function getPacientes(){
  await new Promise(r => setTimeout(r, 5000));

  const result = await fetch(url, {
    cache: 'no-cache'
  })
  const json = await result.json()

  if (!result.ok){
    const message = json.message
    throw new Error(`Falha ao obter dados das contas. (${result.status} - ${message} )` )
  }

  return json
}

export async function destroy(id){
  const options = {
    method: "DELETE"
  }

  const deleteURL = `${url}/${id}` 
  console.log(deleteURL);

  const response = await fetch(deleteURL, options)
  
  if (!response.ok){
    const json = await response.json()
    return {error: "Falha ao apagar conta. " + json.message }
  }

  revalidatePath("/contas")
}

export async function update(conta){
  const updateUrl = `${url}/${conta.id}`

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(conta)
  }

  const result = fetch (updateUrl, options)

  if (!result.status == 200){
    return { message: "Erro ao atualizar a conta" }
  }

  revalidatePath("/contas")
  return {ok: "Conta criada com sucesso"}
}

   
