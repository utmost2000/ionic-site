import { Subject } from 'rxjs/Subject';
import { DomController, DomCallback } from './dom-controller';
export declare class ScrollView {
    private _dom;
    ev: ScrollEvent;
    isScrolling: boolean;
    scrollStart: Subject<ScrollEvent>;
    scroll: Subject<ScrollEvent>;
    scrollEnd: Subject<ScrollEvent>;
    initialized: boolean;
    private _el;
    private _js;
    private _t;
    private _l;
    private _lsn;
    private _endTmr;
    constructor(_dom: DomController);
    init(ele: HTMLElement, contentTop: number, contentBottom: number): void;
    private enableNativeScrolling();
    /**
     * @private
     * JS Scrolling has been provided only as a temporary solution
     * until iOS apps can take advantage of scroll events at all times.
     * The goal is to eventually remove JS scrolling entirely. When we
     * no longer have to worry about iOS not firing scroll events during
     * inertia then this can be burned to the ground. iOS's more modern
     * WKWebView does not have this issue, only UIWebView does.
     */
    enableJsScroll(contentTop: number, contentBottom: number): void;
    /**
     * DOM READ
     */
    getTop(): number;
    /**
     * DOM READ
     */
    getLeft(): number;
    /**
     * DOM WRITE
     */
    setTop(top: number): void;
    /**
     * DOM WRITE
     */
    setLeft(left: number): void;
    scrollTo(x: number, y: number, duration: number, done?: Function): Promise<any>;
    scrollToTop(duration: number): Promise<any>;
    scrollToBottom(duration: number): Promise<any>;
    stop(): void;
    /**
     * @private
     */
    destroy(): void;
}
export interface ScrollEvent {
    timeStamp: number;
    scrollTop: number;
    scrollLeft: number;
    scrollHeight: number;
    scrollWidth: number;
    contentHeight: number;
    contentWidth: number;
    contentTop: number;
    contentBottom: number;
    startY: number;
    startX: number;
    deltaY: number;
    deltaX: number;
    velocityY: number;
    velocityX: number;
    directionY: string;
    directionX: string;
    domWrite: {
        (fn: DomCallback, ctx?: any): void;
    };
    contentElement?: HTMLElement;
    fixedElement?: HTMLElement;
    scrollElement?: HTMLElement;
    headerElement?: HTMLElement;
    footerElement?: HTMLElement;
}
