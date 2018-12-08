export declare abstract class Maybe<T> {
    static just<T>(x: T): Just<T>;
    static nothing<T>(): Nothing<T>;
    abstract bind<U>(f: (t: T) => Maybe<U>): Maybe<U>;
    abstract lift<U>(f: (t: T) => U): Maybe<U>;
    abstract caseOf<U>(cases: {
        just: (t: T) => U;
        nothing: () => U;
    }): U;
    abstract isJust(): this is Just<T>;
    abstract useDefault(t: T): Just<T>;
}
export declare function absorbUndefined<T>(x: Maybe<T | undefined>): Maybe<T>;
export declare function getProperty<T, K extends keyof T>(obj: Partial<T>, key: K): Maybe<T[K]>;
export declare type MaybePartial<T> = {
    [P in keyof T]: Maybe<T[P]>;
};
export declare function maybePartial<T>(obj: Partial<T>): MaybePartial<T>;
export declare class Just<T> extends Maybe<T> {
    value: T;
    constructor(value: T);
    bind<U>(f: (t: T) => Maybe<U>): Maybe<U>;
    lift<U>(f: (t: T) => U): Maybe<U>;
    caseOf<U>(cases: {
        just: (t: T) => U;
        nothing: () => U;
    }): U;
    isJust(): this is Just<T>;
    useDefault(_: T): Just<T>;
}
export declare class Nothing<T> extends Maybe<T> {
    bind<U>(_: (t: T) => Maybe<U>): Maybe<U>;
    lift<U>(_: (t: T) => U): Maybe<U>;
    caseOf<U>(cases: {
        just: (t: T) => U;
        nothing: () => U;
    }): U;
    isJust(): this is Just<T>;
    useDefault(t: T): Just<T>;
}
/**
 * Takes an object with Maybe properties. If every property is Just,
 * an object with Maybes replaced by their values is returned.
 * If one property is Nothing, undefined is returned.
 * Non-maybe properties are simply copied.
 *
 * @param obj Object to unpartialize.
 */
export declare function raiseMaybe<T>(obj: MaybePartial<T>): Maybe<T>;
