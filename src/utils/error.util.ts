export function errorResponse(code: number | string, title: string, description: string) {
    return {
        errorCode: code,
        title: title,
        description: description
    }
}