import { Injectable } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { Paginated } from '../interfaces/paginated.interface';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PaginationProvider {
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationQueryDto,
    repository: Repository<T>,
  ) {
    let results = await repository.find({
      skip: paginationQuery.offset ?? 0,
      take: paginationQuery.limit ?? 10,
    });

    let finalResponse = {
      data: results,
    };
    console.log(results);
  }
}
