/**
 * @returns {Promise<boolean>} True if the databse exists.
 */
async function getDBExists() {
    return (await window.indexedDB.databases()).map(db => db.name).includes("pantry");
}

export const db = {
    GetDBExists: getDBExists
}
