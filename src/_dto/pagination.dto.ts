import { IsNumberString } from 'class-validator';

export class PaginationDto {
  @IsNumberString()
  limit: string;

  @IsNumberString()
  page: string;
}
