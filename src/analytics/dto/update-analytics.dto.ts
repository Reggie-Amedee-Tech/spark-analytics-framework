import { PartialType } from '@nestjs/mapped-types';
import { AnalyticsDTO } from './analytics.dto';

export class UpdateAnalyticsDTO extends PartialType(AnalyticsDTO) {}
