import pool from "../db.js";

const changeEffort = {
    path:'/changeeffort',
    method:'post',
    handler: async(req, res) => {
        try {
            const {id, value} = req.body;
            const result = await pool.query("Update effort set effortpercentage = $1 where gameid = $2",[value, id])
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
        }
    }
}

export default changeEffort