import pool from "../db.js";
const values = {
    complexScreen:50,
        simpleScreen:120,
        complexDatabase:80,
        simpleDatabase:40,
        complexApi:120,
        simpleApi:60,
        complexReport:70,
        simpleReport:30,
        total: 570
}
const changeWbs = {
    path:'/wbs',
    method:'post',
    handler: async(req, res)=>{
        try {
            const {coloumn, value, id} = req.body;
            console.log(values[coloumn])
            let Cvalue = parseInt(value)
            await pool.query(`UPDATE WBS SET ${coloumn} = $1 WHERE  gameid = $2`,[ Cvalue, id])
            const result = await pool.query(`SELECT * FROM WBS where gameid =$1 `,[id])
            const {complexscreen, simplescreen, complexdatabase, simpledatabase, complexapi, simpleapi, complexreport, simplereport} = result.rows[0]
            const total = complexscreen + simplescreen + complexdatabase + simpledatabase + complexapi + simpleapi + complexreport + simplereport
            await pool.query('UPDATE WBS SET total = $1 WHERE gameid = $2', [total,id])
            res.json(total).status(200)
        } catch (error) {
            console.error(error)
        }
    }
}

export default changeWbs