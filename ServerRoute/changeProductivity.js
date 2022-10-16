import pool from '../db.js'

const changeProductivity = {
    path:'/changeproductivity/:name/:id',
    method:'post',
    handler: async(req, res) => {
        try {
            const {label} = req.body
        const {name, id} = req.params

        await pool.query(`UPDATE ${name} SET productivity = $1 where gameid=$2`, [label, id])
        res.sendStatus(200)
        } catch (error) {
            console.log(error)
        }
    }
}

export default changeProductivity