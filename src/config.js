import {config} from 'dotenv'
config()

console.log(process.env.PORT)

export default {
    port: process.env.port || 3000,
}