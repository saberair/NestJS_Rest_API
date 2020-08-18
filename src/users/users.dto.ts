import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsPhoneNumber, IsDate } from 'class-validator';

export default class UserDTO implements Readonly<UserDTO> {
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  nom: string;

  @ApiProperty({ required: true })
  @IsString()
  prenom: string;

  @ApiProperty({ required: true })
  @IsDate()
  dateNaissance: Date;

  @IsPhoneNumber('ZZ', { message: 'ERROR_INVALID_PHONE_NUMBER' })
  telephone: string;

  @ApiProperty({ required: true })
  @IsString()
  adresse: string;
}
