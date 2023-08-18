import {
  BadRequestException,
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { GetTravelingOrdersDto } from './dto/get-traveling-orders.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  async getAllOrders() {
    return await this.ordersService.getAllOrders();
  }

  @Get('/report/approve')
  async getApproveOrders() {
    return await this.ordersService.getApproveOrders();
  }

  @Get('/report/traveling')
  @ApiQuery({
    name: 'startDate',
    required: true,
    type: String,
    description: 'Start date',
  })
  @ApiQuery({
    name: 'endDate',
    required: true,
    type: String,
    description: 'End date',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async getTravelingOrders(
    @Query() getTravelingOrdersDto: GetTravelingOrdersDto,
  ) {
    if (!getTravelingOrdersDto.startDate || !getTravelingOrdersDto.endDate) {
      throw new BadRequestException('startDate and endDate are required');
    }

    try {
      return await this.ordersService.getTravelingOrders(
        new Date(getTravelingOrdersDto.startDate),
        new Date(getTravelingOrdersDto.endDate),
      );
    } catch (error) {
      throw new BadRequestException('Invalid date format');
    }
  }
}
