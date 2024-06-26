import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly town: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsOptional()
  @IsString()
  readonly link?: string;

  @IsString()
  @IsNotEmpty()
  readonly timezone: string;
}
