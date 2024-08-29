/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as runtime from '../runtime';
import { AccountResponseFromJSON, AccountsResponseFromJSON, PostAccountWrapperToJSON, } from '../models/index';
/**
 *
 */
var AccountsApi = /** @class */ (function (_super) {
    __extends(AccountsApi, _super);
    function AccountsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new account
     * Create a new account
     */
    AccountsApi.prototype.createAccountRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
                            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling createAccount.');
                        }
                        if (requestParameters.data === null || requestParameters.data === undefined) {
                            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling createAccount.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Accept'] = 'application/json';
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearer", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/budgets/{budget_id}/accounts".replace("{".concat("budget_id", "}"), encodeURIComponent(String(requestParameters.budgetId))),
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                            body: PostAccountWrapperToJSON(requestParameters.data),
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return AccountResponseFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Creates a new account
     * Create a new account
     */
    AccountsApi.prototype.createAccount = function (budgetId, data, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createAccountRaw({ budgetId: budgetId, data: data }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a single account
     * Single account
     */
    AccountsApi.prototype.getAccountByIdRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
                            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getAccountById.');
                        }
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountById.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Accept'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearer", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/budgets/{budget_id}/accounts/{account_id}".replace("{".concat("budget_id", "}"), encodeURIComponent(String(requestParameters.budgetId))).replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return AccountResponseFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns a single account
     * Single account
     */
    AccountsApi.prototype.getAccountById = function (budgetId, accountId, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountByIdRaw({ budgetId: budgetId, accountId: accountId }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all accounts
     * Account list
     */
    AccountsApi.prototype.getAccountsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
                            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getAccounts.');
                        }
                        queryParameters = {};
                        if (requestParameters.lastKnowledgeOfServer !== undefined) {
                            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
                        }
                        headerParameters = {};
                        headerParameters['Accept'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearer", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/budgets/{budget_id}/accounts".replace("{".concat("budget_id", "}"), encodeURIComponent(String(requestParameters.budgetId))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return AccountsResponseFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns all accounts
     * Account list
     */
    AccountsApi.prototype.getAccounts = function (budgetId, lastKnowledgeOfServer, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsRaw({ budgetId: budgetId, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AccountsApi;
}(runtime.BaseAPI));
export { AccountsApi };
