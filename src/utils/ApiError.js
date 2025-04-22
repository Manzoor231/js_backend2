class ApiError extends Error{
    constructor(message ="Something went wrong", statusCode , error, stacks){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.stacks = stacks;
        this.error = error;
    }
}
export default ApiError