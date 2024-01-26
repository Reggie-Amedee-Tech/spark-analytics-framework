import { Analytics } from './schema/analytics.schema';
import { AnalyticsDTO } from './dto/analytics.dto';
import { UpdateAnalyticsDTO } from './dto/update-analytics.dto';
import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    createAnalyticEvent(analyticDto: AnalyticsDTO): Promise<Analytics>;
    getAllAnalytics(): Promise<Analytics[]>;
    getOneAnalytics(response: any, analyticId: string): Promise<Analytics>;
    updateAnalyticEvent(response: any, analyticId: string, updateAnalyticEvent: UpdateAnalyticsDTO): Promise<Analytics>;
    deleteAnalyticEvent(response: any, analyticId: string): Promise<Analytics>;
}
