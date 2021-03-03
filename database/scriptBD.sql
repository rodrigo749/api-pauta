---Rode o script no banco da sua aplicação

CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY IDENTITY,
	cpf VARCHAR(30) NOT NULL,	
)

CREATE TABLE voto(
	id INTEGER PRIMARY KEY IDENTITY,
	id_pauta VARCHAR(150) NULL,
	voto VARCHAR(50) NULL
)

CREATE TABLE pauta(
	id INTEGER PRIMARY KEY IDENTITY,
	pauta VARCHAR(150) NOT NULL,
)

INSERT INTO usuarios(cpf)
VALUES ('admin')

---A senha está em md5, é 123456