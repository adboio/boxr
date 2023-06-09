/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { Box } from "./api/resources/box/client/Client";
export declare namespace AdboioApiClient {
    interface Options {
        environment: string;
    }
}
export declare class AdboioApiClient {
    private readonly options;
    constructor(options: AdboioApiClient.Options);
    private _box;
    get box(): Box;
}
