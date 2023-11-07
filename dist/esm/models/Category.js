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
import { exists } from '../runtime';
/**
 * @export
 */
export var CategoryGoalTypeEnum = {
    Tb: 'TB',
    Tbd: 'TBD',
    Mf: 'MF',
    Need: 'NEED',
    Debt: 'DEBT',
};
/**
 * Check if a given object implements the Category interface.
 */
export function instanceOfCategory(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "category_group_id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "hidden" in value;
    isInstance = isInstance && "budgeted" in value;
    isInstance = isInstance && "activity" in value;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "deleted" in value;
    return isInstance;
}
export function CategoryFromJSON(json) {
    return CategoryFromJSONTyped(json, false);
}
export function CategoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'category_group_id': json['category_group_id'],
        'category_group_name': !exists(json, 'category_group_name') ? undefined : json['category_group_name'],
        'name': json['name'],
        'hidden': json['hidden'],
        'original_category_group_id': !exists(json, 'original_category_group_id') ? undefined : json['original_category_group_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'budgeted': json['budgeted'],
        'activity': json['activity'],
        'balance': json['balance'],
        'goal_type': !exists(json, 'goal_type') ? undefined : json['goal_type'],
        'goal_day': !exists(json, 'goal_day') ? undefined : json['goal_day'],
        'goal_cadence': !exists(json, 'goal_cadence') ? undefined : json['goal_cadence'],
        'goal_cadence_frequency': !exists(json, 'goal_cadence_frequency') ? undefined : json['goal_cadence_frequency'],
        'goal_creation_month': !exists(json, 'goal_creation_month') ? undefined : json['goal_creation_month'],
        'goal_target': !exists(json, 'goal_target') ? undefined : json['goal_target'],
        'goal_target_month': !exists(json, 'goal_target_month') ? undefined : json['goal_target_month'],
        'goal_percentage_complete': !exists(json, 'goal_percentage_complete') ? undefined : json['goal_percentage_complete'],
        'goal_months_to_budget': !exists(json, 'goal_months_to_budget') ? undefined : json['goal_months_to_budget'],
        'goal_under_funded': !exists(json, 'goal_under_funded') ? undefined : json['goal_under_funded'],
        'goal_overall_funded': !exists(json, 'goal_overall_funded') ? undefined : json['goal_overall_funded'],
        'goal_overall_left': !exists(json, 'goal_overall_left') ? undefined : json['goal_overall_left'],
        'deleted': json['deleted'],
    };
}
export function CategoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'category_group_id': value.category_group_id,
        'category_group_name': value.category_group_name,
        'name': value.name,
        'hidden': value.hidden,
        'original_category_group_id': value.original_category_group_id,
        'note': value.note,
        'budgeted': value.budgeted,
        'activity': value.activity,
        'balance': value.balance,
        'goal_type': value.goal_type,
        'goal_day': value.goal_day,
        'goal_cadence': value.goal_cadence,
        'goal_cadence_frequency': value.goal_cadence_frequency,
        'goal_creation_month': value.goal_creation_month,
        'goal_target': value.goal_target,
        'goal_target_month': value.goal_target_month,
        'goal_percentage_complete': value.goal_percentage_complete,
        'goal_months_to_budget': value.goal_months_to_budget,
        'goal_under_funded': value.goal_under_funded,
        'goal_overall_funded': value.goal_overall_funded,
        'goal_overall_left': value.goal_overall_left,
        'deleted': value.deleted,
    };
}
