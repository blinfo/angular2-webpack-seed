import { Home } from "../../src/app/home/home.component";
describe("My Test", function () {

    it("should be true",function () {
        expect(true).toBe(true)
    })
});
describe('1st tests', () => {
    it('true is true', () => expect(true).toEqual(true));
});
it('null is not the same thing as undefined',  () =>
    {

        let home : Home = {errorMassage:"error"};
        expect(home.errorMessage).toEqual("test")

    }
);
