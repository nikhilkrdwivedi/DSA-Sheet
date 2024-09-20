export const TextToAvatarText = (text = "") => {
    return text.split(" ").filter(item => item.trim()).map(item => item[0]).slice(0, 2).join("")?.toUpperCase()
}

export const shortenText = (text = "", limit = 120) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
}