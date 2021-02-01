---Rode o script no banco da sua aplicação

CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY IDENTITY,
	cpf VARCHAR(30) NOT NULL,
	
)

INSERT INTO usuarios(cpf)
VALUES ('admin')

---A senha está em md5, é 123456