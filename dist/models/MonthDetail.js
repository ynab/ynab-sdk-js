"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthDetailToJSON = exports.MonthDetailFromJSONTyped = exports.MonthDetailFromJSON = exports.instanceOfMonthDetail = void 0;
const runtime_1 = require("../runtime");
const Category_1 = require("./Category");
/**
 * Check if a given object implements the MonthDetail interface.
 */
function instanceOfMonthDetail(value) {
    let isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "income" in value;
    isInstance = isInstance && "budgeted" in value;
    isInstance = isInstance && "activity" in value;
    isInstance = isInstance && "to_be_budgeted" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "categories" in value;
    return isInstance;
}
exports.instanceOfMonthDetail = instanceOfMonthDetail;
function MonthDetailFromJSON(json) {
    return MonthDetailFromJSONTyped(json, false);
}
exports.MonthDetailFromJSON = MonthDetailFromJSON;
function MonthDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'month': json['month'],
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
        'income': json['income'],
        'budgeted': json['budgeted'],
        'activity': json['activity'],
        'to_be_budgeted': json['to_be_budgeted'],
        'age_of_money': !(0, runtime_1.exists)(json, 'age_of_money') ? undefined : json['age_of_money'],
        'deleted': json['deleted'],
        'categories': (json['categories'].map(Category_1.CategoryFromJSON)),
    };
}
exports.MonthDetailFromJSONTyped = MonthDetailFromJSONTyped;
function MonthDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'month': value.month,
        'note': value.note,
        'income': value.income,
        'budgeted': value.budgeted,
        'activity': value.activity,
        'to_be_budgeted': value.to_be_budgeted,
        'age_of_money': value.age_of_money,
        'deleted': value.deleted,
        'categories': (value.categories.map(Category_1.CategoryToJSON)),
    };
}
exports.MonthDetailToJSON = MonthDetailToJSON;
