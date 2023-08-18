import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async getAllOrders() {
    return await this.ordersRepository.find({ relations: ['items'] });
  }

  async getApproveOrders() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
    twoDaysFromNow.setHours(23, 59, 59, 999);

    return await this.ordersRepository.find({
      where: {
        status: 'Approve',
        shippingPromise: Between(today, twoDaysFromNow),
      },
      relations: ['items'],
    });
  }

  async getTravelingOrders(startDate: Date, endDate: Date) {
    return await this.ordersRepository.find({
      where: {
        status: 'Traveling',
        createDate: Between(startDate, endDate),
      },
    });
  }
}
