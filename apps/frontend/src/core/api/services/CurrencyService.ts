/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CurrencyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Currency currency endpoint
     * @returns Currency success response
     * @throws ApiError
     */
    public getApiV1Currency(): CancelablePromise<Array<Currency>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/currency',
            errors: {
                400: `Bad request response`,
            },
        });
    }

}
