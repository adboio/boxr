/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
import { BoxService } from "./api/resources/box/service/BoxService";
export declare function register(expressApp: express.Express | express.Router, services: {
    box: BoxService;
}): void;