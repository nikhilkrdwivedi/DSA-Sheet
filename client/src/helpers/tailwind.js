import { getRandomInt } from "./maths"

const LEVELS = {
    'easy':'bg-green-300 text-gray-700',
    'medium':'bg-yellow-400 text-gray-800',
    'hard':'bg-red-300 text-gray-800',
}
const TAGS = [
    'bg-green-300 text-gray-700',
     'bg-yellow-400 text-gray-800',
     'bg-red-300 text-gray-800',
     'bg-pink-300 text-gray-800',
     'bg-sky-300 text-gray-800',
]
export const getLevelClassName = (level='easy') => {
    return LEVELS[level.toLowerCase()]
}

export const getTagsClassName = () => {
    return TAGS[getRandomInt()]
}