import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Analytics } from './schema/analytics.schema';
import { AnalyticsDTO } from './dto/analytics.dto';
import { UpdateAnalyticsDTO } from './dto/update-analytics.dto';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post()
  async createAnalyticEvent(
    @Body() analyticDto: AnalyticsDTO,
  ): Promise<Analytics> {
    return await this.analyticsService.createAnalyticEvent(analyticDto);
  }

  @Get()
  async getAllAnalytics(): Promise<Analytics[]> {
    return await this.analyticsService.getAllAnalytics();
  }

  @Get('/:id')
  async getOneAnalytics(
    @Res() response,
    @Param('id') analyticId: string,
  ): Promise<Analytics> {
    try {
      const existingAnalyticEvent =
        await this.analyticsService.getOneAnalytics(analyticId);
      return response.status(HttpStatus.OK).json({
        message: 'Analytic Event Found',
        existingAnalyticEvent,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Put('/:id')
  async updateAnalyticEvent(
    @Res() response,
    @Param('id') analyticId: string,
    @Body() updateAnalyticEvent: UpdateAnalyticsDTO,
  ): Promise<Analytics> {
    try {
      const existingAnalyticEvent =
        await this.analyticsService.updateAnalyticEvent(
          analyticId,
          updateAnalyticEvent,
        );
      return response
        .status(HttpStatus.OK)
        .json({ message: 'AnalyticEvent Updated!', analyticId });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteAnalyticEvent(
    @Res() response,
    @Param('id') analyticId: string,
  ): Promise<Analytics> {
    try {
      const deletedAnalyticEvent =
        await this.analyticsService.deleteAnalyticEvent(analyticId);
      return response.status(HttpStatus.OK).json({
        message: `${analyticId} successfully deleted!`,
        deletedAnalyticEvent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
