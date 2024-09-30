import { resend } from '@/lib/resend'
import VerificationEmail from '../../emails/VerificationEmail'
import { ApiResponse } from '@/types/ApiResponse'


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        return { success:true, message:'Verifictaion email send successfully' }
    } catch (error) {
        console.error('Error sending verification email', error)
        return { success:false, message:'Failed to send verification email' }
    }
}


