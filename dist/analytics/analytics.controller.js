"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const analytics_dto_1 = require("./dto/analytics.dto");
const update_analytics_dto_1 = require("./dto/update-analytics.dto");
const analytics_service_1 = require("./analytics.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async createAnalyticEvent(analyticDto) {
        return await this.analyticsService.createAnalyticEvent(analyticDto);
    }
    async getAllAnalytics() {
        return await this.analyticsService.getAllAnalytics();
    }
    async getOneAnalytics(response, analyticId) {
        try {
            const existingAnalyticEvent = await this.analyticsService.getOneAnalytics(analyticId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Analytic Event Found',
                existingAnalyticEvent,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async updateAnalyticEvent(response, analyticId, updateAnalyticEvent) {
        try {
            const existingAnalyticEvent = await this.analyticsService.updateAnalyticEvent(analyticId, updateAnalyticEvent);
            return response
                .status(common_1.HttpStatus.OK)
                .json({ message: 'AnalyticEvent Updated!', analyticId });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteAnalyticEvent(response, analyticId) {
        try {
            const deletedAnalyticEvent = await this.analyticsService.deleteAnalyticEvent(analyticId);
            return response.status(common_1.HttpStatus.OK).json({
                message: `${analyticId} successfully deleted!`,
                deletedAnalyticEvent,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsDTO]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "createAnalyticEvent", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getAllAnalytics", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getOneAnalytics", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_analytics_dto_1.UpdateAnalyticsDTO]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "updateAnalyticEvent", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "deleteAnalyticEvent", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map