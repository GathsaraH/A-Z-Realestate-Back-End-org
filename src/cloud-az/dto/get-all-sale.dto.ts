import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {  IsNumber, IsOptional, Min } from 'class-validator';
export class GetAllSaleDto {
  @ApiProperty({ required: false, default: 0, description: 'page number' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset?: number = 0;

  @ApiProperty({ required: false, default: 10, description: 'page limit' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  limit?: number = 10;

  @ApiProperty({
    description:
      'sort by parameter preceding + for descending and - for ascending',
    required: false,
  })
  @IsOptional()
  sortBy: string;

  @ApiProperty({ required: false })
  @IsOptional()
  q: string;

  @ApiProperty({ required: false })
  status: string;
}
