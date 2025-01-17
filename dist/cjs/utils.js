"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJson = exports.isValidAmount = exports.toSats = exports.checkedToSats = exports.isOnionUrl = exports.isUrl = exports.parseLightningAddress = exports.isLightningAddress = exports.isLnurl = exports.parseLnUrl = exports.decodeUrlOrAddress = void 0;
var url_1 = require("url");
var bech32_1 = require("bech32");
var axios_1 = __importDefault(require("axios"));
var LNURL_REGEX = /^(?:http.*[&?]lightning=|lightning:)?(lnurl[0-9]{1,}[02-9ac-hj-np-z]+)/;
var LN_ADDRESS_REGEX = /^((?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@((?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var ONION_REGEX = /^(http:\/\/[^/:@]+\.onion(?::\d{1,5})?)(\/.*)?$/;
/**
 * Decode a bech32 encoded url (lnurl) or lightning address and return a url
 * @method decodeUrlOrAddress
 * @param  lnUrlOrAddress string to decode
 * @return  plain url or null if is an invalid url or lightning address
 */
var decodeUrlOrAddress = function (lnUrlOrAddress) {
    var bech32Url = (0, exports.parseLnUrl)(lnUrlOrAddress);
    if (bech32Url) {
        var decoded = bech32_1.bech32.decode(bech32Url, 20000);
        return Buffer.from(bech32_1.bech32.fromWords(decoded.words)).toString();
    }
    var address = (0, exports.parseLightningAddress)(lnUrlOrAddress);
    if (address) {
        var username = address.username, domain = address.domain;
        var protocol = domain.match(/\.onion$/) ? 'http' : 'https';
        return "".concat(protocol, "://").concat(domain, "/.well-known/lnurlp/").concat(username);
    }
    return null;
};
exports.decodeUrlOrAddress = decodeUrlOrAddress;
/**
 * Parse an url and return a bech32 encoded url (lnurl)
 * @method parseLnUrl
 * @param  url string to parse
 * @return  bech32 encoded url (lnurl) or null if is an invalid url
 */
var parseLnUrl = function (url) {
    if (!url)
        return null;
    var result = LNURL_REGEX.exec(url.toLowerCase());
    return result ? result[1] : null;
};
exports.parseLnUrl = parseLnUrl;
/**
 * Verify if a string is a valid lnurl value
 * @method isLnurl
 * @param  url string to validate
 * @return  true if is a valid lnurl value
 */
var isLnurl = function (url) {
    if (!url)
        return false;
    return LNURL_REGEX.test(url.toLowerCase());
};
exports.isLnurl = isLnurl;
/**
 * Verify if a string is a lightning adress
 * @method isLightningAddress
 * @param  address string to validate
 * @return  true if is a lightning address
 */
var isLightningAddress = function (address) {
    if (!address)
        return false;
    return LN_ADDRESS_REGEX.test(address.toLowerCase());
};
exports.isLightningAddress = isLightningAddress;
/**
 * Parse an address and return username and domain
 * @method parseLightningAddress
 * @param  address string to parse
 * @return  LightningAddress { username, domain }
 */
var parseLightningAddress = function (address) {
    if (!address)
        return null;
    var result = LN_ADDRESS_REGEX.exec(address.toLowerCase());
    return result ? { username: result[1], domain: result[2] } : null;
};
exports.parseLightningAddress = parseLightningAddress;
/**
 * Verify if a string is an url
 * @method isUrl
 * @param  url string to validate
 * @return  true if is an url
 */
var isUrl = function (url) {
    if (!url)
        return false;
    try {
        return !!new url_1.URL(url);
    }
    catch (_a) {
        return false;
    }
};
exports.isUrl = isUrl;
/**
 * Verify if a string is an onion url
 * @method isOnionUrl
 * @param  url string to validate
 * @return  true if is an onion url
 */
var isOnionUrl = function (url) {
    return (0, exports.isUrl)(url) && ONION_REGEX.test(url.toLowerCase());
};
exports.isOnionUrl = isOnionUrl;
/**
 * Parse a number to Satoshis
 * @method checkedToSats
 * @param  value number to parse
 * @return  Satoshis or null
 */
var checkedToSats = function (value) {
    if (value && value >= 0)
        return (0, exports.toSats)(value);
    return null;
};
exports.checkedToSats = checkedToSats;
/**
 * Cast a number to Satoshis type
 * @method toSats
 * @param  value number to cast
 * @return  Satoshis
 */
var toSats = function (value) {
    return value;
};
exports.toSats = toSats;
var isValidAmount = function (_a) {
    var amount = _a.amount, min = _a.min, max = _a.max;
    var isValid = amount > 0 && amount >= min && amount <= max;
    var isFixed = min === max;
    return isValid && isFixed ? amount === min : isValid;
};
exports.isValidAmount = isValidAmount;
var getJson = function (_a) {
    var url = _a.url, params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, axios_1.default.get(url, { params: params }).then(function (response) {
                    if (response.data.status === 'ERROR')
                        throw new Error(response.data.reason + '');
                    return response.data;
                })];
        });
    });
};
exports.getJson = getJson;
