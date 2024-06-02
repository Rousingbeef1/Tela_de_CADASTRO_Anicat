'use client'
import { Checkbox, TextField } from "@mui/material";
import { use, useEffect, useState } from "react";
//Too many re-renders. React limits the number of renders to prevent an infinite loop.
export default function Corpo() {
    const [colordiv1, setcolordiv1] = useState('#ffffff')
    const [colordiv2, setcolordiv2] = useState('#ffffff')
    const [colordiv3, setcolordiv3] = useState('#ffffff')
    const [texto, setTexto] = useState('')
    const [senha, setSenha] = useState('')
    const [msg, setMsg] = useState('Mínimo de 6 caracteres sem espaços em branco')
    const [politica, setPolitica] = useState(false)
    const [corLabel, setCorLabel] = useState('')
    const [email, setEmail] = useState('')

    async function login() {

        var body = JSON.stringify({
            'email': email,
            'senha': senha,
            'politica': politica
        })
        const resp = await fetch('/api/login', {
            method: 'POST',
            body: body
        })
        const resp2 = await resp.json()
        console.log(resp2, resp.status)
    }


    useEffect(() => {
        if (senha.length == 6) {
            setcolordiv1('#ff0000')
            setcolordiv2('#ffffff')
            setcolordiv3('#ffffff')
            setTexto('#ff0000')
            setMsg('Senha fraca')

        }
        else if (senha.length > 6 && senha.length < 8) {
            setcolordiv1('#ffff00')
            setcolordiv2('#ffff00')
            setcolordiv3('#ffffff')
            setTexto('#ffff00')
            setMsg('Senha moderada')

        }
        else if (senha.length >= 8) {
            setcolordiv1('#00ff00')
            setcolordiv2('#00ff00')
            setcolordiv3('#00ff00')
            setTexto('#00ff00')
            setMsg('Senha forte')

        }
        else {
            setcolordiv1('#ffffff')
            setcolordiv2('#ffffff')
            setcolordiv3('#ffffff')
            setMsg('Mínimo de 6 caracteres sem espaços em branco')
            setTexto('#ffffff')
        }
    }, [senha])

    useEffect(() => {
        if (politica == false) {
            setCorLabel('#ffff00')
        }
        else {
            setCorLabel('#ffffff')
        }

    }, [politica])



    return (
        <div className=" flex w-screen h-screen justify-start sm:justify-center  sm:gap-0 items-center bg-[url(/assets/background/fundo2.jpg)] bg-right bg-no-repeat bg-cover flex-col">
            <div className="bg-[#212121] flex-col justify-start items-start flex w-[40vh] sm:w-[500px] h-auto p-10 gap-10 font-[32px] mt-7 ]" >

                <TextField onChange={(e) => setEmail(e.target.value)} inputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white", fontSize: '20px' } }} className='w-full ' variant="standard" label="Endereço de E-mail" color="warning" />
                <TextField onChange={(e) => setSenha(e.target.value)} inputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white", fontSize: "20px" } }} className='w-full ' variant="standard" label="Senha" color="warning" />
                <div className="flex items-center justify-between w-full h-10 ">
                    <label className="my-auto" style={{ color: texto }} htmlFor="">{msg}</label>
                    <div className="flex w-auto h-1 gap-1">
                        <div className='w-4' style={{ backgroundColor: colordiv1 }}></div>
                        <div className="w-4" style={{ backgroundColor: colordiv2 }}></div>
                        <div className="w-4" style={{ backgroundColor: colordiv3 }}></div>
                    </div>

                </div>
                <div className="flex items-center justify-between gap-4">
                    <Checkbox defaultChecked onClick={() => { setPolitica(!politica) }} style={{ color: corLabel }} />
                    <label style={{ color: corLabel }} className="text-[15px]" htmlFor="">Eu quero receber as informações mais recentes da Anicat, ofertas e notícias. Todas as comunicações são sujeitas a nossa Política de privacidade.
                        Cancele a qualquer momento
                    </label>

                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-autosm:w-[500px]">
                <label className="  w-[40vh] sm:w-[500px] font-[13vh] text-center mt-5">Ao criar esta conta, você declara estar de acordo com nossos Termos e Política de privacidade, e declara possuir 16 anos de idade ou mais.</label>
                <button onClick={() => login()} className="px-[172px] bg-[#F9C718] text-[30px] rounded-lg mt-4  w-[40vh] sm:w-auto">Criar conta</button>
            </div>
        </div>
    )
}