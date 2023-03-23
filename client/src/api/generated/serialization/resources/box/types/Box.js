/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
export const Box = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).BoxId).optional(),
    title: core.serialization.string(),
    items: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).BoxItem))
        .optional(),
});