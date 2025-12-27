const getEnv = (key : string, defaultValue ?: string) : string => {
    const value = process.env[key];
    if(value === undefined || value === "") {
        if(defaultValue === undefined) {
            throw new Error("environment values not provided");
        }
        return defaultValue;
    } 
    return value;
}

export default getEnv;