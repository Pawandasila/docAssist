import getEnv from "../utils/getEnv.js"

const envConfig = () => ({
    PORT : getEnv("PORT", "5000") 
})
const env = envConfig();
export default env;