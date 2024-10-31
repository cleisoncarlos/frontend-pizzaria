import { NextRequest, NextResponse } from 'next/server'
import { getCookiServer } from '@/lib/cookieServer'
import { api } from '@/services/app'

export async function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl
    // essas rotas estão liberadas sem a autenticação
    if (pathname.startsWith('/_next') || pathname === '/') {
        return NextResponse.next()
    }

    const token = await getCookiServer();

    if (pathname.startsWith('/dashboard')) {
        // se não tiver o token a rota é barrada, e redireciona para a página inicial
        if (!token) {
            return NextResponse.redirect(new URL('/', req.url))
        }

const isValid = await validateToken(token)

if(!isValid){
    return NextResponse.redirect(new URL('/', req.url))
}

    }

    return NextResponse.next();
}

//valida se o token é válido

async function validateToken(token: string) {
    if (!token) return false;
    try {
        await api.get('/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return true;


    } catch (err) {
        console.log(err)
        return false;
    }
}