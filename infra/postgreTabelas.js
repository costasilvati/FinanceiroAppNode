class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao
        this.criarLogin()
        this.criarCategoria()
        this.criarCarteira()
        this.criarDespesa()
    }


    criarLogin(){
        let sql = 'CREATE TABLE IF NOT EXISTS login '+
        '(id_login_pk SERIAL NOT NULL,'+
        'email TEXT UNIQUE NOT NULL,'+
        "senha TEXT DEFAULT 'senha12345',"+
        "PRIMARY KEY(id_login_pk))"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela LOGIN criada com sucesso!')
            }
        })
    }

    criarCarteira(){
        let sql = 'CREATE TABLE IF NOT EXISTS carteira '+
        '(id_carteira_pk SERIAL NOT NULL,'+
        'nome TEXT NOT NULL,'+
        'descricao TEXT,'+
        'saldo double precision,'+
        'limite double precision,'+
        'id_login_fk INT,'+
        'PRIMARY KEY(id_carteira_pk),'+
        'FOREIGN KEY (id_login_fk) REFERENCES login(id_login_pk))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela CARTEIRA criada com sucesso!')
            }
        })
    }

    criarCategoria(){
        let sql = 'CREATE TABLE IF NOT EXISTS categoria '+
        '(id_categoria_pk SERIAL NOT NULL,'+
        'nome TEXT NOT NULL,'+
        'descricao TEXT,'+
        'PRIMARY KEY(id_categoria_pk))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela CATEGORIA criada com sucesso!')
            }
        })
    }

    criarDespesa(){
        let sql = 'CREATE TABLE IF NOT EXISTS despesa '+
        '(id_despesa_pk SERIAL NOT NULL,'+
        'valor double precision NOT NULL,'+
        'descricao TEXT,'+
        "tipo TEXT NOT NULL DEFAULT 'D',"+
        'data DATE NOT NULL,'+
        'id_categoria_fk INT,'+
        'id_carteira_fk INT,'+
        'FOREIGN KEY (id_categoria_fk) REFERENCES categoria(id_categoria_pk),'+
        'FOREIGN KEY (id_carteira_fk) REFERENCES carteira(id_carteira_pk),'+
        'PRIMARY KEY(id_despesa_pk))'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela despesa criada con sucesso!')
            }
        })
    }
}
module.exports = new Tabelas