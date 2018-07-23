export abstract class Maybe<T>
{
    public static just<T>(x : T) : Just<T>
    {
        return new Just<T>(x);
    }

    public static nothing<T>() : Nothing<T>
    {
        return new Nothing<T>();
    }

    public abstract bind<U>(f : (t : T) => Maybe<U>) : Maybe<U>;

    public abstract lift<U>(f : (t : T) => U) : Maybe<U>;

    public abstract caseOf<U>( cases : { just: (t : T) => U, nothing: () => U } ) : U;

    public abstract isJust() : this is Just<T>;

    public abstract useDefault(t : T) : Just<T>;
}

export class Just<T> extends Maybe<T>
{
    public constructor(public value : T)
    {
        super();
    }

    public bind<U>(f : (t : T) => Maybe<U>) : Maybe<U>
    {
        return f(this.value);
    }

    public lift<U>(f : (t : T) => U) : Maybe<U>
    {
        return Maybe.just<U>( f(this.value) );
    }

    public caseOf<U>( cases : { just: (t : T) => U, nothing: () => U } ) : U
    {
        return cases.just(this.value);
    }

    public isJust() : this is Just<T>
    {
        return true;
    }

    public useDefault(_ : T) : Just<T>
    {
        return this;
    }
}

export class Nothing<T> extends Maybe<T>
{
    public bind<U>(_ : (t : T) => Maybe<U>) : Maybe<U>
    {
        return Maybe.nothing<U>();
    }

    public lift<U>(_ : (t : T) => U) : Maybe<U>
    {
        return Maybe.nothing<U>();
    }

    public caseOf<U>( cases : { just: (t : T) => U, nothing: () => U } ) : U
    {
        return cases.nothing();
    }

    public isJust() : this is Just<T>
    {
        return false;
    }

    public useDefault(t : T) : Just<T>
    {
        return Maybe.just(t);
    }
}