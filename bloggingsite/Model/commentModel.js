export let comments = [
    {
        id: 1,
        blogId: 1,
        username: "Sara",
        text: "Very useful article!"
    }
];

export let nextCommentId = 2;

export const getNextCommentId = () => {
    return nextCommentId++;
};