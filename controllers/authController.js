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

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const connection = await dbConnection();
        const [result] = await connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const connection = await dbConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        if (rows.length > 0) {
            res.json({ message: 'Login successful', user: rows[0] });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}