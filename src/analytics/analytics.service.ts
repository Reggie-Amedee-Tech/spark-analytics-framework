import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnalyticsDTO } from './dto/analytics.dto';
import { Analytics } from './schema/analytics.schema';
import { UpdateAnalyticsDTO } from './dto/update-analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Analytics.name) private analyticsModel: Model<Analytics>,
  ) {}

  async createAnalyticEvent(analyticsDto: AnalyticsDTO): Promise<Analytics> {
    const analyticEvent = new this.analyticsModel(analyticsDto);
    console.log(analyticEvent);
    return analyticEvent.save();
  }

  async getAllAnalytics(): Promise<Analytics[]> {
    return this.analyticsModel.find().exec();
  }

  async getOneAnalytics(id: string): Promise<Analytics> {
    const getOneAnalytic = await this.analyticsModel.findById(id).exec();

    if (!getOneAnalytic) {
      throw new NotFoundException(`Analytic Event: ${id} not found`);
    }
    return getOneAnalytic;
  }

  async updateAnalyticEvent(
    analyticId: string,
    updateAnalyticDto: UpdateAnalyticsDTO,
  ): Promise<Analytics> {
    const existingAnalyticEvent = await this.analyticsModel.findByIdAndUpdate(
      analyticId,
      updateAnalyticDto,
      { new: true },
    );

    if (!existingAnalyticEvent) {
      throw new NotFoundException(
        `Unable to update analytic event because id is invalid: ${analyticId}`,
      );
    }
    return existingAnalyticEvent;
  }

  async deleteAnalyticEvent(analyticId: string): Promise<Analytics> {
    const deletedAnalyticEvent =
      await this.analyticsModel.findByIdAndDelete(analyticId);

    if (!deletedAnalyticEvent) {
      throw new NotFoundException(
        `Unable to delete analytic event because the Id doesn't exist: ${analyticId}`,
      );
    }

    return deletedAnalyticEvent;
  }
}
