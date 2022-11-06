/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDonate } from '../models/CreateDonate';
import type { Response } from '../models/Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DonateService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Donate get endpoint
     * @returns Response success response
     * @throws ApiError
     */
    public getApiV1Donate(): CancelablePromise<Response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/donate',
            errors: {
                400: `Bad request response`,
            },
        });
    }

    /**
     * Donate create endpoint
     * @param requestBody donate body
     * @returns Response success response
     * @throws ApiError
     */
    public postApiV1Donate(
requestBody: CreateDonate,
): CancelablePromise<Response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/donate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request response`,
            },
        });
    }

}
