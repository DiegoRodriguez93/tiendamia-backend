import { IsNotEmpty, IsDateString } from 'class-validator';

export class GetTravelingOrdersDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
