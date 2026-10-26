export let users = [
    {
        id: 1,
        username: "Ali",
        password: "ali123"
    },
    {
        id: 2,
        username: "Sara",
        password: "sara123"
    }
];

export let nextUserId = 3;

export const getNextUserId = () => {
    return nextUserId++;
};