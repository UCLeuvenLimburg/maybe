import { expect } from 'chai';
import { Maybe } from '../src/maybe';


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