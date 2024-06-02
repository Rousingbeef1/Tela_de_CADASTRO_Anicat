import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: Request) {
    const {email,senha,politica}:{email:string, senha:string, politica:boolean} = await req.json()
    if (req.body != null) {


        if (email=== 'luccasgabriel35@gmail.com' && senha === 'ATUAMAE') {
            return NextResponse.json({ 'message': 'Cadastrado com sucesso!' }, { status: 200 })
        }
        else {
            return NextResponse.json({ 'message': 'Você já possui uma conta' }, { status: 401 })
        }
    }

}