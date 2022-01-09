import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly http: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { body } = context.switchToHttp().getRequest();

    if (
      body.captcha === undefined ||
      body.captcha === '' ||
      body.captcha === null
    ) {
      throw new ForbiddenException(
        'You need to complete the captcha challenge to submit an order!',
      );
    }
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${body['captcha']}`;
    const { data } = await lastValueFrom(this.http.post(verificationURL));
    if (!data.success) {
      throw new ForbiddenException('Captcha verification unsuccessful');
    }
    return true;
  }
}
