const pool = require('../config/db');

const Service = {
    async create({name, duration}) {
        const { rows } = await pool.query(
            'INSERT INTO services (name, duration) VALUES ($1, $2) RETURNING *',
            [name, duration]
        );
        return rows[0];
    },

    async findALL() {
        const { rows } = await pool.query('SELECT * FROM services');
        return rows
    },

    async findById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM services WHERE id = $1',
            [id]
        );

        return rows[0];
    },

    async update(id, { name, duration }) {
        const { rows } = await pool.query(
            'UPDATE services SET name = $1, duration = $2 WHERE id = $3 RETURNING *',
            [name, duration, id]
        );
        return rows[0];
    },

    async delete(id){
        await pool.query('DELETE FROM services WHERE id = $1', [id]);
    }
}

module.exports = Service;