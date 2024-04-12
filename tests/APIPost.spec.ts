import { test,expect } from "@playwright/test";


test("api POST request", async({request})=>{

const response = await request.post('https://reqres.in/api/users',{
    data: {
        "name": "morpheus",
        "job": "leader"
    }
})

console.log(await response.status())
console.log(await response.json())
expect(response.status()).toBe(201)
//expect(await response.text()).toContain("janesfst")
})