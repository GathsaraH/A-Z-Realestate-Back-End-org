import { HttpException, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpUtilService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
      ) {}

      async makeRequest(
        method: string,
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
      ): Promise<AxiosResponse> {
        const observable = this.httpService.request({
          method,
          url,
          data,
          ...config,
        });
        return lastValueFrom(observable);
      }
}
