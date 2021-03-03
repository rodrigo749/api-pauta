const { poolPromise } = require('../../config/database');

exports.getAll = async() =>{

    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`SELECT * FROM voto`)

                return rs.recordset;
}

exports.create = async(dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`INSERT INTO voto (id_pauta, voto )
                        VALUES ('${dados.id_pauta}','${dados.voto}') `);
                        
    return rs.rowsAffected;                                
}