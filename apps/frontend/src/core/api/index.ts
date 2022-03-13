/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { AppClient } from './AppClient';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { CreateDonate } from './models/CreateDonate';
export type { Currency } from './models/Currency';
export type { Donate } from './models/Donate';
export type { Response } from './models/Response';

export { CurrencyService } from './services/CurrencyService';
export { DonateService } from './services/DonateService';
