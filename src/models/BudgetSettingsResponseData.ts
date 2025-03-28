/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { BudgetSettings } from './BudgetSettings';
import {
    BudgetSettingsFromJSON,
    BudgetSettingsFromJSONTyped,
    BudgetSettingsToJSON,
    BudgetSettingsToJSONTyped,
} from './BudgetSettings';

/**
 * 
 * @export
 * @interface BudgetSettingsResponseData
 */
export interface BudgetSettingsResponseData {
    /**
     * 
     * @type {BudgetSettings}
     * @memberof BudgetSettingsResponseData
     */
    settings: BudgetSettings;
}

/**
 * Check if a given object implements the BudgetSettingsResponseData interface.
 */
export function instanceOfBudgetSettingsResponseData(value: object): value is BudgetSettingsResponseData {
    if (!('settings' in value) || value['settings'] === undefined) return false;
    return true;
}

export function BudgetSettingsResponseDataFromJSON(json: any): BudgetSettingsResponseData {
    return BudgetSettingsResponseDataFromJSONTyped(json, false);
}

export function BudgetSettingsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetSettingsResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'settings': BudgetSettingsFromJSON(json['settings']),
    };
}

export function BudgetSettingsResponseDataToJSON(json: any): BudgetSettingsResponseData {
    return BudgetSettingsResponseDataToJSONTyped(json, false);
}

export function BudgetSettingsResponseDataToJSONTyped(value?: BudgetSettingsResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'settings': BudgetSettingsToJSON(value['settings']),
    };
}

