import {dbConnection} from '../database/db.js';

export const getAllUsers = async (req, res) => {
    try {
        const connection = await dbConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const connection = await dbConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}