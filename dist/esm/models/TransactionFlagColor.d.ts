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
/**
 * The transaction flag
 * @export
 */
export declare const TransactionFlagColor: {
    readonly Red: "red";
    readonly Orange: "orange";
    readonly Yellow: "yellow";
    readonly Green: "green";
    readonly Blue: "blue";
    readonly Purple: "purple";
};
export declare type TransactionFlagColor = typeof TransactionFlagColor[keyof typeof TransactionFlagColor];
export declare function TransactionFlagColorFromJSON(json: any): TransactionFlagColor;
export declare function TransactionFlagColorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFlagColor;
export declare function TransactionFlagColorToJSON(value?: TransactionFlagColor | null): any;
