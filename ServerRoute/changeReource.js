import pool from "../db.js";

const changeResource = {
    path: '/changeresource',
    method:'post',
    handler: async(req, res) => {
        try {
            const {table, value, id} = req.body
            const result = await pool.query(`UPDATE resource SET ${table} = $1 where gameid = $2`,[value, id])
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
        }
    }
}

export default changeResource