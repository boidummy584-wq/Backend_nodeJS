import { writeFileSync } from "node:fs";
const users = [{
        name: "qwer",
        email: "adam@gmail.com"
    },
    {
        name: "asjdbjk",
        email: "bfbio2gmail.com"
    }
]
const userJson = JSON.stringify(users);
writeFileSync("C:/dev17/backend/user.json", userJson);
console.log("Written Succesfully")