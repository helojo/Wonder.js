/// <reference types="wonder-frp" />
import { EEventName } from "./object/EventNameHandler";
import { EEngineEvent } from "./EEngineEvent";
import { EntityObject } from "../core/entityObject/EntityObject";
import { Event } from "./object/Event";
import { FromEventPatternStream } from "wonder-frp/dist/commonjs/stream/FromEventPatternStream";
export declare class EventManager {
    static on(eventName: EEventName | EEngineEvent | string, handler: Function): void;
    static on(eventName: EEventName | EEngineEvent | string, handler: Function, priority: number): void;
    static on(target: EntityObject, eventName: EEventName | EEngineEvent | string, handler: Function): void;
    static on(dom: HTMLElement, eventName: EEventName | EEngineEvent | string, handler: Function): void;
    static on(target: EntityObject, eventName: EEventName | EEngineEvent | string, handler: Function, priority: number): void;
    static on(dom: HTMLElement, eventName: EEventName | EEngineEvent | string, handler: Function, priority: number): void;
    static off(): void;
    static off(eventName: EEventName | EEngineEvent | string): void;
    static off(target: EntityObject): void;
    static off(dom: HTMLElement): void;
    static off(eventName: EEventName | EEngineEvent | string, handler: Function): void;
    static off(target: EntityObject, eventName: EEventName | EEngineEvent | string): void;
    static off(dom: HTMLElement, eventName: EEventName): void;
    static off(target: EntityObject, eventName: EEventName | EEngineEvent | string, handler: Function): void;
    static off(dom: HTMLElement, eventName: EEventName, handler: Function): void;
    static trigger(event: Event): void;
    static trigger(event: Event, userData: any): void;
    static trigger(target: EntityObject, event: Event): void;
    static trigger(dom: HTMLElement, event: Event): void;
    static trigger(target: EntityObject, event: Event, userData: any): void;
    static trigger(target: EntityObject, event: Event, userData: any, notSetTarget: boolean): void;
    static broadcast(target: EntityObject, event: Event): any;
    static broadcast(target: EntityObject, event: Event, userData: any): any;
    static emit(target: EntityObject, event: Event): any;
    static emit(target: EntityObject, event: Event, userData: any): any;
    static fromEvent(eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
    static fromEvent(eventName: EEventName | EEngineEvent | string, priority: number): FromEventPatternStream;
    static fromEvent(target: EntityObject, eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
    static fromEvent(dom: HTMLElement, eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
    static fromEvent(target: EntityObject, eventName: EEventName | EEngineEvent | string, priority: number): FromEventPatternStream;
    static fromEvent(dom: HTMLElement, eventName: EEventName | EEngineEvent | string, priority: number): FromEventPatternStream;
    static setBubbleParent(target: EntityObject, parent: any): void;
}