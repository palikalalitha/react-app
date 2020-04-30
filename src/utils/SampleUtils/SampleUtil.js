export const add = (x, y) => {
    if (typeof x === "string" || typeof y === "string") {
        return null;
    }
    if (typeof x === "object" || typeof y === "object") {
        return null;
    }
    return x + y
}
