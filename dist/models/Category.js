"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryToJSON = exports.CategoryFromJSONTyped = exports.CategoryFromJSON = exports.instanceOfCategory = exports.CategoryGoalTypeEnum = void 0;
/**
 * @export
 */
exports.CategoryGoalTypeEnum = {
    Tb: 'TB',
    Tbd: 'TBD',
    Mf: 'MF',
    Need: 'NEED',
    Debt: 'DEBT',
};
/**
 * Check if a given object implements the Category interface.
 */
function instanceOfCategory(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('category_group_id' in value) || value['category_group_id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('hidden' in value) || value['hidden'] === undefined)
        return false;
    if (!('budgeted' in value) || value['budgeted'] === undefined)
        return false;
    if (!('activity' in value) || value['activity'] === undefined)
        return false;
    if (!('balance' in value) || value['balance'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    return true;
}
exports.instanceOfCategory = instanceOfCategory;
function CategoryFromJSON(json) {
    return CategoryFromJSONTyped(json, false);
}
exports.CategoryFromJSON = CategoryFromJSON;
function CategoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'category_group_id': json['category_group_id'],
        'category_group_name': json['category_group_name'] == null ? undefined : json['category_group_name'],
        'name': json['name'],
        'hidden': json['hidden'],
        'original_category_group_id': json['original_category_group_id'] == null ? undefined : json['original_category_group_id'],
        'note': json['note'] == null ? undefined : json['note'],
        'budgeted': json['budgeted'],
        'activity': json['activity'],
        'balance': json['balance'],
        'goal_type': json['goal_type'] == null ? undefined : json['goal_type'],
        'goal_needs_whole_amount': json['goal_needs_whole_amount'] == null ? undefined : json['goal_needs_whole_amount'],
        'goal_day': json['goal_day'] == null ? undefined : json['goal_day'],
        'goal_cadence': json['goal_cadence'] == null ? undefined : json['goal_cadence'],
        'goal_cadence_frequency': json['goal_cadence_frequency'] == null ? undefined : json['goal_cadence_frequency'],
        'goal_creation_month': json['goal_creation_month'] == null ? undefined : json['goal_creation_month'],
        'goal_target': json['goal_target'] == null ? undefined : json['goal_target'],
        'goal_target_month': json['goal_target_month'] == null ? undefined : json['goal_target_month'],
        'goal_percentage_complete': json['goal_percentage_complete'] == null ? undefined : json['goal_percentage_complete'],
        'goal_months_to_budget': json['goal_months_to_budget'] == null ? undefined : json['goal_months_to_budget'],
        'goal_under_funded': json['goal_under_funded'] == null ? undefined : json['goal_under_funded'],
        'goal_overall_funded': json['goal_overall_funded'] == null ? undefined : json['goal_overall_funded'],
        'goal_overall_left': json['goal_overall_left'] == null ? undefined : json['goal_overall_left'],
        'deleted': json['deleted'],
    };
}
exports.CategoryFromJSONTyped = CategoryFromJSONTyped;
function CategoryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'category_group_id': value['category_group_id'],
        'category_group_name': value['category_group_name'],
        'name': value['name'],
        'hidden': value['hidden'],
        'original_category_group_id': value['original_category_group_id'],
        'note': value['note'],
        'budgeted': value['budgeted'],
        'activity': value['activity'],
        'balance': value['balance'],
        'goal_type': value['goal_type'],
        'goal_needs_whole_amount': value['goal_needs_whole_amount'],
        'goal_day': value['goal_day'],
        'goal_cadence': value['goal_cadence'],
        'goal_cadence_frequency': value['goal_cadence_frequency'],
        'goal_creation_month': value['goal_creation_month'],
        'goal_target': value['goal_target'],
        'goal_target_month': value['goal_target_month'],
        'goal_percentage_complete': value['goal_percentage_complete'],
        'goal_months_to_budget': value['goal_months_to_budget'],
        'goal_under_funded': value['goal_under_funded'],
        'goal_overall_funded': value['goal_overall_funded'],
        'goal_overall_left': value['goal_overall_left'],
        'deleted': value['deleted'],
    };
}
exports.CategoryToJSON = CategoryToJSON;
