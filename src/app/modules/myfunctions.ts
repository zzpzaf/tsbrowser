
export const capitalizeFirst = (sentence: string) => {
    return `${sentence.charAt(0).toUpperCase()}${sentence
    .slice(1)
    .toLowerCase()}`;
};