declare const satoshisSymbol: unique symbol;
export declare type Satoshis = number & {
    [satoshisSymbol]: never;
};
declare type Json = {
    [key: string]: any;
};
export declare type LightningAddress = {
    username: string;
    domain: string;
};
export declare type FetcGetArgs = {
    url: string;
    params?: Json;
};
export declare type LnUrlPayServiceArgs = {
    lnUrlOrAddress: string;
    onionAllowed?: boolean;
    fetchGet?: (args: FetcGetArgs) => Promise<Json>;
};
export declare type LnUrlPayServiceResponse = {
    callback: string;
    fixed: boolean;
    min: Satoshis;
    max: Satoshis;
    domain?: string;
    metadata: Array<Array<string>>;
    identifier: string;
    description: string;
    image: string;
    commentAllowed: number;
};
export declare type LnUrlRequestInvoiceBaseArgs = {
    tokens: Satoshis;
    comment?: string;
    onionAllowed?: boolean;
    fetchGet?: (args: FetcGetArgs) => Promise<Json>;
};
export declare type LnUrlrequestInvoiceWithServiceParamsArgs = LnUrlRequestInvoiceBaseArgs & {
    params: LnUrlPayServiceResponse;
};
export declare type LnUrlRequestInvoiceArgs = LnUrlRequestInvoiceBaseArgs & {
    lnUrlOrAddress: string;
};
export declare type LnUrlRequestInvoiceResponse = {
    params: LnUrlPayServiceResponse;
    invoice: string;
    successAction?: Json;
};
export {};
