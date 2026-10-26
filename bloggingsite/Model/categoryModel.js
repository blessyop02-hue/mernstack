export let categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Education" },
    { id: 3, name: "Travel" }
];

export let nextCategoryId = 4;

export const getNextCategoryId = () => {
    return nextCategoryId++;
};