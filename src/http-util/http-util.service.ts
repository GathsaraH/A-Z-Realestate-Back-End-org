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
  async requestSalePropertyData(): Promise<AxiosResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${this.configService.get(
            'app.externalApiToken',
          )}`,
          'X-Api-Key': `${this.configService.get('app.externalApiKey')}`,
        },
      };
      return await this.makeRequest(
        'GET',
        `${this.configService.get('app.externalSaleApi')}`,
        undefined,
        requestConfig,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async requestSoldPropertyData(): Promise<AxiosResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${this.configService.get(
            'app.externalApiToken',
          )}`,
          'X-Api-Key': `${this.configService.get('app.externalApiKey')}`,
        },
      };
      return await this.makeRequest(
        'GET',
        `${this.configService.get('app.externalSoldApi')}`,
        undefined,
        requestConfig,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async requestLeasePropertyData(): Promise<AxiosResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${this.configService.get(
            'app.externalApiToken',
          )}`,
          'X-Api-Key': `${this.configService.get('app.externalApiKey')}`,
        },
      };
      return await this.makeRequest(
        'GET',
        `${this.configService.get('app.externalLeaseApi')}`,
        undefined,
        requestConfig,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
  async requestReviewsData(): Promise<AxiosResponse> {
    try {
      return await this.makeRequest(
        'GET',
        `${this.configService.get('app.externalReviewsApi')}`,
        undefined,
        undefined,
      );
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
