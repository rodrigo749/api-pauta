const { poolPromise } = require('../../config/database');

exports.getAll = async() =>{

    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`SELECT * FROM pauta`)

                return rs.recordset;
}

exports.create = async(dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`INSERT INTO pauta (pauta)
                        VALUES (UPPER('${dados.pauta}'))`);
                        
    return rs.rowsAffected;                                
}