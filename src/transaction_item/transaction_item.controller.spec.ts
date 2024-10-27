import { Test, TestingModule } from '@nestjs/testing';
import { TransactionItemController } from './transaction_item.controller';
import { TransactionItemService } from './transaction_item.service';

describe('TransactionItemController', () => {
  let controller: TransactionItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionItemController],
      providers: [TransactionItemService],
    }).compile();

    controller = module.get<TransactionItemController>(TransactionItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
