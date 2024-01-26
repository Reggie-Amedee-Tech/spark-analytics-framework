/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { AnalyticsDTO } from './dto/analytics.dto';
import { Analytics } from './schema/analytics.schema';
import { UpdateAnalyticsDTO } from './dto/update-analytics.dto';
export declare class AnalyticsService {
    private analyticsModel;
    constructor(analyticsModel: Model<Analytics>);
    createAnalyticEvent(analyticsDto: AnalyticsDTO): Promise<Analytics>;
    getAllAnalytics(): Promise<Analytics[]>;
    getOneAnalytics(id: string): Promise<Analytics>;
    updateAnalyticEvent(analyticId: string, updateAnalyticDto: UpdateAnalyticsDTO): Promise<Analytics>;
    deleteAnalyticEvent(analyticId: string): Promise<Analytics>;
}
