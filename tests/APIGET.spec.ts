import { test,expect } from "@playwright/test";


test("api GET request", async({request})=>{

const response = await request.get('https://reqres.in/api/users/2')
console.log(response.status())
console.log(await response.json())
expect(response.status()).toBe(200)
//expect(await response.text()).toContain("janesfst")
})

