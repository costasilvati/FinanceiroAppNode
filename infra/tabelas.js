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
        '(id_login_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'email VARCHAR(255) UNIQUE NOT NULL,'+
        "senha VARCHAR(100) DEFAULT 'senha12345')"
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
        '(id_carteira_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(150) NOT NULL,'+
        'descricao VARCHAR(255),'+
        'saldo double,'+
        'limite double,'+
        'id_login_fk INT,'+
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
        '(id_categoria_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(150) NOT NULL,'+
        'descricao VARCHAR(255))'
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
        '(id_despesa_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'valor double NOT NULL,'+
        'descricao VARCHAR(150),'+
        "tipo CHAR NOT NULL DEFAULT 'D',"+
        'data DATE NOT NULL,'+
        'id_categoria_fk INT,'+
        'id_carteira_fk INT,'+
        'FOREIGN KEY (id_categoria_fk) REFERENCES categoria(id_categoria_pk),'+
        'FOREIGN KEY (id_carteira_fk) REFERENCES carteira(id_carteira_pk))'
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