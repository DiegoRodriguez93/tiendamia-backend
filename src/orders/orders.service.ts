import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, Between } from 'typeorm';

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
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

    return await this.ordersRepository.find({
      where: {
        status: 'Approve',
        shippingPromise: LessThan(twoDaysFromNow),
      },
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
