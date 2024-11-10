import {db} from '../database/connection.database.js';

const createUser = async ({email, password, username})=>{
    const query = {
        text: `
        INSERT INTO users (email, password, username)
        VALUES ($1, $2, $3)
        RETURNING email, username, uid
        `,
        values: [email, password, username]
    }
    const {rows} = await db.query(query)
    return rows[0]
};

const findUserByEmail = async (email)=>{
    const query = {
        text: `
        SELECT * FROM users
        WHERE email = $1
        `,
        values: [email]
    }
    const {rows} = await db.query(query)
    return rows[0]
};

const deleteUserByEmail = async (email)=>{
    const query = {
        text: `
        DELETE FROM users
        WHERE email = $1
        `,
        values: [email]
    }
}

export const userModel = {
    createUser,
    findUserByEmail,
    deleteUserByEmail
}