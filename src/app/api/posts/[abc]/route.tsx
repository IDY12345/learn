import {NextResponse} from 'next/server'

export async function GET(request:any, context:any){
    const {params}=context
    const {abc}=params
    console.log(request,context)
    return NextResponse.json({slug:abc})
}