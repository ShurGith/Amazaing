//import HomePage from "./HomePage";

describe("Homepage Testing", ()=>{
    it("Simple test", ()=>{
        expect(1).toEqual(1)
    })
    it("HomePage", ()=>{
         const{ getByTestId } = render(<HomePage />)
         const homePageTitle = getByTestId("homepage-title").textContent
         expect(homePageTitle).toEqual('HomePage')
    })
})