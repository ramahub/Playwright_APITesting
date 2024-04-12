import { test,expect } from "@playwright/test";


test("api PUT request", async({request})=>{

const response = await request.delete('https://reqres.in/api/users/2',{
    data: {
        "name": "morpheus",
        "job": "zion resident"
    }
})

console.log(await response.status())
console.log(await response.json())
expect(response.status()).toBe(200)
//expect(await response.text()).toContain("janesfst")
})