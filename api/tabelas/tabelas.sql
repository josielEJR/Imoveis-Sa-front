USE websiteInfo;

CREATE TABLE IF NOT EXISTS clientes (
  clienteId  INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  cpf VARCHAR(50) NOT NULL,
  celular VARCHAR(25) NOT NULL,
  comentario VARCHAR(500),
  foto_perfil VARCHAR(255)
);

INSERT INTO clientes (nome, email, senha, cpf, celular, comentario, foto_perfil ) 
VALUES ('James', 'teste@gmail.com', '456713', '85674231856', '11953578434', 'A corretora foi IMPECÁVEL! Super atenciosa e verdadeira! Estava total a disposição para que conseguíssemos conquistar nossa casinha!', 'imagens/foto1.jpg');

INSERT INTO clientes (nome, email, senha, cpf, celular, comentario, foto_perfil ) 
VALUES ('Lara', 'teste02@gmail.com', '987654', '96854713264', '17963145278', 'Experiência impecável com a corretora! Ela me acompanhou de perto em cada etapa da compra, desde a busca pelo imóvel ideal até a assinatura do contrato. Sua atenção e profissionalismo foram fundamentais para a realização do meu sonho', 'imagens/foto2.jpg');

INSERT INTO clientes (nome, email, senha, cpf, celular, comentario, foto_perfil ) 
VALUES ('Oscar', 'teste06@gmail.com', '654321', '78956321406', '21915748953', 'Encontrei na corretora a parceira ideal para a compra do meu imóvel! Ela me deu total segurança e tranquilidade durante todo o processo, com um atendimento impecável e um conhecimento profundo do mercado imobiliário. Sou muito grato por sua ajuda!', 'imagens/foto3.jpg');

CREATE TABLE IF NOT EXISTS consultores (
  consultorId  INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  consultor_email VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  cpf VARCHAR(50) NOT NULL,
  celular VARCHAR(25) NOT NULL,
  tipo VARCHAR(25) NOT NULL,
  sobre VARCHAR(500) NOT NULL
);

INSERT INTO consultores (nome, consultor_email, senha, cpf, celular, tipo, sobre) 
VALUES ('Roberto', 'ralves@gmail.com', '123456', '85923791256', '11953486834', 'consultor', 'Especialista em marketing de conteúdo, com paixão por storytelling e criação de conteúdo de alta qualidade.');

INSERT INTO consultores (nome, consultor_email, senha, cpf, celular, tipo, sobre)
VALUES ('Igor', 'rogi@gmail.com', 'senha123', '12345678987', '11948695738', 'consultor', 'Especialista em transformação digital, auxiliando empresas a otimizarem seus processos e adotarem novas tecnologias' );

INSERT INTO consultores (nome, consultor_email, senha, cpf, celular, tipo, sobre)
VALUES ('Alana', 'anala@gmail.com', '543210', '76814682347', '11967896547', 'consultor', 'Especialista em gestão de talentos, auxiliando empresas a atrair, desenvolver e reter os melhores profissionais. ');

INSERT INTO consultores (nome, consultor_email, senha, cpf, celular, tipo, sobre)
VALUES ('Miguel', 'leugim@gmail.com', '987654', '98765432146', '11936547826', 'consultor', 'Especialista em gestão de riscos, auxiliando empresas a identificar e mitigar riscos em suas operações.');

INSERT INTO consultores (nome, consultor_email, senha, cpf, celular, tipo, sobre)
VALUES ('Ana', 'leu@gmail.com', '658743', '874563218794', '21985867432', 'consultor', 'Consultora de recursos humanos com foco em desenvolvimento de pessoas e cultura organizacional. Possui experiência em recrutamento, seleção, treinamento e avaliação de desempenho.');

CREATE TABLE IF NOT EXISTS imoveis (
    imoveisID INTEGER PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL,
    endereco VARCHAR(150) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep VARCHAR(15) NOT NULL,
    quartos INTEGER NOT NULL, 
    banheiros INTEGER NOT NULL,
    descricao TEXT NOT NULL,
    preco_venda DECIMAL(10, 2) DEFAULT 0,
    preco_aluguel DECIMAL(10, 2) DEFAULT 0,
    tamanho DECIMAL(10, 2) DEFAULT 0,
    qualidade DECIMAL(3, 1) CHECK (qualidade <= 5.0) ,
    disponibilidade ENUM('venda', 'aluguel', 'venda_e_aluguel') NOT NULL,
    consultorId  INTEGER,
    FOREIGN KEY (consultorId) REFERENCES consultores (consultorId)
);

INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros,  descricao, preco_venda, tamanho, qualidade, disponibilidade) 
VALUES 
( 1,'Casa', 'Rua das Flores', '123', 'Centro', 'São Paulo', '01000-000', 4, 3,
'Casa incrível com 4 quartos e 3 banheiros. Espaçosa e bem iluminada. Localizada no coração da cidade.', 
500000.00, 250, 3.5,  'venda');

INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, preco_aluguel, tamanho, qualidade, disponibilidade) 
VALUES 
( 2, 'Apartamento', 'Avenida Atlântica', '456', 'Copacabana', 'Rio de Janeiro', '22000-000', 3, 2,
'Espetacular apartamento de frente para o mar, com 3 quartos e 2 banheiros. Totalmente mobiliado e decorado.', 
800000.00, 10000, 350, 5.0, 'venda_e_aluguel');


INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_aluguel, tamanho, qualidade, disponibilidade) 
VALUES 
( 3, 'Casa', 'Rua das Palmeiras', '789', 'Barra da Tijuca', 'Rio de Janeiro', '23000-000', 3, 2,
'Casa charmosa com 3 quartos e 2 banheiros. Área externa com jardim e churrasqueira.', 
8000, 100, 3.0, 'aluguel');

INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_aluguel, tamanho, qualidade, disponibilidade) 
VALUES 
( 4, 'Apartamento', 'Rua dos Girassóis', '101', 'Pinheiros', 'São Paulo', '05000-000', 2, 1,
'Apartamento aconchegante com 2 quartos e 1 banheiro. Próximo a mercados e restaurantes.', 
2000.00, 90, 4.0, 'aluguel');


INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, tamanho, qualidade, disponibilidade) 
VALUES 
( 5, 'Casa', 'Rua das Acácias', '456', 'Botafogo', 'Rio de Janeiro', '21000-000', 5, 4,
'Casa espaçosa e confortável com 5 quartos e 4 banheiros. Área externa com piscina e churrasqueira.', 
700000.00, 300, 5.0, 'venda');

INSERT INTO imoveis ( consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, preco_aluguel, tamanho, qualidade, disponibilidade) 
VALUES 
( 3, 'Apartamento', 'Avenida Paulista', '789', 'Bela Vista', 'São Paulo', '01300-000', 1, 1,
'Ótimo apartamento de 1 quarto e 1 banheiro. Próximo ao metrô e comércios.', 
400000.00, 15000, 200, 4.5,  'venda_e_aluguel');

CREATE TABLE IF NOT EXISTS visitas (
    visitaId INTEGER PRIMARY KEY AUTO_INCREMENT,
    clienteId INTEGER ,
    imoveisID INTEGER ,
    data_visita DATETIME NOT NULL,
    status ENUM('agendada', 'realizada', 'cancelada') NOT NULL DEFAULT 'agendada',
    FOREIGN KEY (clienteId) REFERENCES clientes(clienteId),
    FOREIGN KEY (imoveisID) REFERENCES imoveis(imoveisID)
);

CREATE TABLE IF NOT EXISTS favoritos (
    clienteID INT,
    imovelID INT,
    PRIMARY KEY (clienteID, imovelID),
    FOREIGN KEY (clienteID) REFERENCES clientes(clienteId) ON DELETE CASCADE,
    FOREIGN KEY (imovelID) REFERENCES imoveis(imoveisID) ON DELETE CASCADE
);