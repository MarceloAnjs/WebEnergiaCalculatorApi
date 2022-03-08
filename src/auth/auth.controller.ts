import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth-dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly mailService: MailerService, private jwtService: JwtService) { }
    @Post('/login')
    async login(@Body() authDto: AuthDto) {

        const payload = { email: authDto.email, sub: authDto.email };
        const token = this.jwtService.sign(payload);

        await this.mailService.sendMail({
            to: authDto.email,
            from: '"Login" <marcelo.anjos@discente.ufma.br>',
            subject: 'Link Magico para login',
            text: 'Olá, você acabou de fazer login no sistema.',
            html: `<a href="https://augustozanoni.github.io/webenergiacalculator?token=${token}">Clique aqui para fazer login</a>`,
        });
        return { token };
    }
}

