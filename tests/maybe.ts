import { expect } from 'chai';
import { Maybe, maybePartial, raiseMaybe } from '../src/maybe';


describe('isJust', () => {
    it('returns true on Just', () => {
        expect( Maybe.just(5).isJust() ).to.be.true;
    });

    it('returns false on Nothing', () => {
        expect( Maybe.nothing<number>().isJust() ).to.be.false;
    });
});


describe('useDefault', () => {
    describe('used on Just', () => {
        it('returns a Just', () => {
            expect( Maybe.just(5).useDefault(3).isJust() ).to.be.true;
        });

        it('keeps the old value', () => {
            expect( Maybe.just(3).useDefault(9).value).to.be.equal(3);
        });
    });

    describe('used on Nothing', () => {
        it('returns a Just', () => {
            expect( Maybe.nothing<number>().useDefault(3).isJust() ).to.be.true;
        });

        it('should have value equal to default value', () => {
            expect( Maybe.nothing<number>().useDefault(1).value ).to.be.equal(1);
        });
    });
});


describe('bind', () => {
    describe('used on Just', () => {
        describe('given a function returning Just', () => {
            const x = Maybe.just(3);
            const y = x.bind(v => Maybe.just(v + 1));

            it('should return a Just', () => {
                expect(y.isJust()).to.be.true;
            });

            it('should have value returned by function', () => {
                if ( y.isJust() )
                {
                    expect(y.value).to.be.equal(4);
                }
                else
                {
                    expect.fail();
                }
            });
        });

        describe('given a function returning Nothing', () => {
            const x = Maybe.just(3);
            const y = x.bind(_ => Maybe.nothing<string>());

            it('should return Nothing', () => {
                expect(y.isJust()).to.be.false;
            });
        });
    });

    describe('used on Nothing', () => {
        describe('given a function returning Just', () => {
            const x = Maybe.nothing<number>();
            const y = x.bind(v => Maybe.just(v + 1));

            it('should return Nothing', () => {
                expect(y.isJust()).to.be.false;
            });
        });

        describe('given a function returning Nothing', () => {
            const x = Maybe.nothing<number>();
            const y = x.bind(_ => Maybe.nothing<string>());

            it('should return Nothing', () => {
                expect(y.isJust()).to.be.false;
            });
        });
    });
});


describe('lift', () => {
    describe('used on Just', () => {
        const x = Maybe.just(5);
        const y = x.lift(v => v + 1);

        it('should return Just', () => {
            expect(y.isJust()).to.be.true;
        });

        it('should should have value returned by function', () => {
            if ( y.isJust() )
            {
                expect(y.value).to.be.equal(6);
            }
            else
            {
                expect.fail();
            }
        });
    });

    describe('used on Nothing', () => {
        const x = Maybe.nothing<number>();
        const y = x.lift(v => v + 1);

        it('should return Nothing', () => {
            expect(y.isJust()).to.be.false;
        });
    });
});


describe('maybePartial', () => {
    it('turns missing properties in nothing', () => {
        const original : { x ?: number } = {};
        const transformed = maybePartial(original);

        expect( transformed.x.isJust() ).to.be.false;
    });

    it('turns existing properties in just', () => {
        const original : { x ?: number } = { x: 5 };
        const transformed = maybePartial(original);

        expect( transformed.x.isJust() ).to.be.true;
        expect( (transformed.x as any).value ).to.be.equal(5);
    });
});


describe('raiseMaybe', () => {
    it('returns just if all properties are just', () => {
        const original = { x : Maybe.just(1), y : Maybe.just('x') };
        const actual = raiseMaybe(original);

        expect( actual.isJust() ).to.be.true;

        if ( actual.isJust() )
        {
            expect(actual.value.x).to.be.equal(1);
            expect(actual.value.y).to.be.equal('x');
        }
    });

    it('returns nothing if not all properties are just', () => {
        const original = { x : Maybe.just(1), y : Maybe.just('x'), z : Maybe.nothing<boolean>() };
        const actual = raiseMaybe(original);

        expect( actual.isJust() ).to.be.false;
    });
});