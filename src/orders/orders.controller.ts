import { Controller, Get, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

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
  async getTravelingOrders(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return await this.ordersService.getTravelingOrders(
      new Date(startDate),
      new Date(endDate),
    );
  }
}
