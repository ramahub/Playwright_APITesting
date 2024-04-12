import { test,expect } from "@playwright/test";


test("api Delete request", async({request})=>{

const response = await request.delete('https://reqres.in/api/users/2')

console.log(await response.status())
expect(response.status()).toBe(204)
//expect(await response.text()).toContain("janesfst")
})