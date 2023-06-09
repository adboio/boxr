/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { AdboioApi } from "../../../..";
export declare namespace Box {
    interface Options {
        environment: string;
    }
}
export declare class Box {
    private readonly options;
    constructor(options: Box.Options);
    /**
     * Create a new box
     * @throws {AdboioApi.BoxNotFoundError}
     */
    createBox(request: AdboioApi.CreateBoxRequest): Promise<AdboioApi.BoxId>;
    /**
     * get box by ID
     */
    getBox(id: AdboioApi.BoxId): Promise<AdboioApi.Box>;
}
