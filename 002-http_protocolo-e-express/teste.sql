CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
    -- VARCHAR é um tido de dado que ira receber character, outra opção e o CHAR.
    -- SHOW DATABASES Comando usado para verificar quais bando de dados tem no MySqL.
    -- USE "NOME DO BANCO DE DADOS" Comando usado para entrar no banco de dados.
    -- DESCRIBE "NOME DA TABELA" Comando usado para ver a tabela que deseja.

    INSERT INTO usuarios(nome, email,idade) VALUES(
        "Arthur Brandão",
        "email@teste5.com",
        4
    );

    SELECT * FROM usuarios;
    -- Comando para acessar os dados de uma tabeka .

    SELECT * FROM usuarios where idade = 4;
    -- "WHERE" Comando para selecionar os usuarios usando condições, neste caso os usuarios com idade igual a 4 anos.

    SELECT * FROM usuarios where nome = "Mauricio de Lima";
    -- Neste comando por ser uma variavel do tipo "VARCHAR" o que tem dentro da variavek tem que estar entre aspas ("").

    DELETE FROM usuarios WHERE nome = "Mauricio de Lima";
    -- Comando para deletar os dados que estiver em uma tabele.

    UPDATE usuarios SET nome = "Nome teste" WHERE nome = "Mauricio de Lima";
    -- Comando para atualizar uma informação de um serto dado da tabela. no caso o comando esta substituindo o noma "Mauridio de Lima" para "Noma teste".

    DROP TABLE postagens;
    -- Comando para deletar uma tabela.
