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
