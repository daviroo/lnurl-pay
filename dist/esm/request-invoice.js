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
        while (_) try {
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
import { getJson, isOnionUrl, isUrl, isValidAmount } from './utils';
import { requestPayServiceParams } from './request-pay-service-params';
export var requestInvoiceWithServiceParams = function (_a) {
    var params = _a.params, tokens = _a.tokens, comment = _a.comment, _b = _a.onionAllowed, onionAllowed = _b === void 0 ? false : _b, _c = _a.fetchGet, fetchGet = _c === void 0 ? getJson : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var callback, commentAllowed, min, max, invoiceParams, data, invoice;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    callback = params.callback, commentAllowed = params.commentAllowed, min = params.min, max = params.max;
                    if (!isValidAmount({ amount: tokens, min: min, max: max }))
                        throw new Error('Invalid amount');
                    if (!isUrl(callback))
                        throw new Error('Callback must be a valid url');
                    if (!onionAllowed && isOnionUrl(callback))
                        throw new Error('Onion requests not allowed');
                    invoiceParams = {
                        amount: tokens * 1000,
                    };
                    if (comment && commentAllowed > 0 && comment.length > commentAllowed)
                        throw new Error("The comment length must be ".concat(commentAllowed, " characters or fewer"));
                    if (comment)
                        invoiceParams.comment = comment;
                    return [4 /*yield*/, fetchGet({ url: callback, params: invoiceParams })];
                case 1:
                    data = _d.sent();
                    invoice = data && data.pr && data.pr.toString();
                    if (!invoice)
                        throw new Error('Invalid pay service invoice');
                    return [2 /*return*/, {
                            params: params,
                            invoice: invoice,
                            successAction: data.successAction,
                        }];
            }
        });
    });
};
export var requestInvoice = function (_a) {
    var lnUrlOrAddress = _a.lnUrlOrAddress, tokens = _a.tokens, comment = _a.comment, _b = _a.onionAllowed, onionAllowed = _b === void 0 ? false : _b, _c = _a.fetchGet, fetchGet = _c === void 0 ? getJson : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var params;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, requestPayServiceParams({
                        lnUrlOrAddress: lnUrlOrAddress,
                        onionAllowed: onionAllowed,
                        fetchGet: fetchGet,
                    })];
                case 1:
                    params = _d.sent();
                    return [2 /*return*/, requestInvoiceWithServiceParams({
                            params: params,
                            tokens: tokens,
                            comment: comment,
                            onionAllowed: onionAllowed,
                            fetchGet: fetchGet,
                        })];
            }
        });
    });
};
