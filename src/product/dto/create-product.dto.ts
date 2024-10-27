import { IsArray, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber(
    {},
    {
      each: true,
    },
  )
  categories: number[];

  @IsDateString()
  start_date: string;

  @IsDateString()
  end_date: string;
}
