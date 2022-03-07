import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './auth-dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly mailService: MailerService) { }
    @Post('/login')
    async login(@Body() authDto: AuthDto) {
        await this.mailService.sendMail({
            to: authDto.email,
            from: '"Login" <marcelo.anjos@discente.ufma.br>',
            subject: 'Link Magico para login',
            text: 'Olá, você acabou de fazer login no sistema.',
        });
        return authDto;
    }
}
