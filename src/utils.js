// src/utils.js
export const slugify = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Remove invalid characters
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/-+/g, '-') // Replace multiple - with single -
        .trim();
};
