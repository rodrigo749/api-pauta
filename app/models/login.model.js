const { poolPromise } = require('../../config/database')


//verifique o nome da sua tabela e os campos e altere se necessário no select

exports.login = async(dados) => {
	// console.log(dados);
// criptografa a senha para verificação
    
    const pool = await poolPromise
    const rs = await pool
                .request()
                .query(`SELECT * FROM usuarios 
                		WHERE cpf = '${dados.cpf}' `);
    
    if(rs.recordset == ''){
        return null;
    }else{
        return rs.recordset;
    }
    
}
