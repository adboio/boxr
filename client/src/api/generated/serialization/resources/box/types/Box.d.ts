/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { AdboioApi } from "../../../..";
import * as core from "../../../../core";
export declare const Box: core.serialization.ObjectSchema<serializers.Box.Raw, AdboioApi.Box>;
export declare namespace Box {
    interface Raw {
        id?: serializers.BoxId.Raw | null;
        title: string;
        items?: serializers.BoxItem.Raw[] | null;
    }
}