USE websiteInfo;

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
    qualidade DECIMAL(3, 1) CHECK (qualidade <= 5.0),
    disponibilidade ENUM('venda', 'aluguel', 'venda_e_aluguel') NOT NULL,
    consultorId INTEGER,
    FOREIGN KEY (consultorId) REFERENCES consultores (consultorId),
    condominio DECIMAL(10, 2) DEFAULT 0,
    iptu DECIMAL(5, 2) DEFAULT 0,
    seguro_incendio DECIMAL(5, 2) DEFAULT 0,
    taxa_de_servicos DECIMAL(5, 2) DEFAULT 0,
    vagas INTEGER NOT NULL,
    mobiliado ENUM('mobiliado') DEFAULT NULL
);

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas) 
VALUES 
(1, 'Casa', 'Rua das Flores', '123', 'Centro', 'São Paulo', '01000-000', 4, 3,
'Casa incrível com 4 quartos e 3 banheiros. Espaçosa e bem iluminada. Localizada no coração da cidade.', 
500000.00, 250, 3.5, 'venda', 300, 90, 30, 60, 2);

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, preco_aluguel, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas, mobiliado) 
VALUES 
(2, 'Apartamento', 'Avenida Atlântica', '456', 'Copacabana', 'Rio de Janeiro', '22000-000', 3, 2,
'Espetacular apartamento de frente para o mar, com 3 quartos e 2 banheiros. Totalmente mobiliado e decorado.', 
800000.00, 10000, 350, 5.0, 'venda_e_aluguel', 400, 80, 25, 50, 1, 'mobiliado');

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_aluguel, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas) 
VALUES 
(3, 'Casa', 'Rua das Palmeiras', '789', 'Barra da Tijuca', 'Rio de Janeiro', '23000-000', 3, 2,
'Casa charmosa com 3 quartos e 2 banheiros. Área externa com jardim e churrasqueira.', 
8000, 100, 3.0, 'aluguel', 250, 75, 35, 55, 1);

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_aluguel, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas, mobiliado) 
VALUES 
(4, 'Apartamento', 'Rua dos Girassóis', '101', 'Pinheiros', 'São Paulo', '05000-000', 2, 1,
'Apartamento aconchegante com 2 quartos e 1 banheiro. Próximo a mercados e restaurantes.', 
2000.00, 90, 4.0, 'aluguel', 333, 55, 45, 65, 1, 'mobiliado');

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, preco_aluguel, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas, mobiliado) 
VALUES 
(5, 'Casa', 'Rua das Acácias', '456', 'Botafogo', 'Rio de Janeiro', '21000-000', 5, 4,
'Casa espaçosa e confortável com 5 quartos e 4 banheiros. Área externa com piscina e churrasqueira.', 
700000.00, NULL, 300, 5.0, 'venda', 425, 33, 47, 85, 4, 'mobiliado');

INSERT INTO imoveis (consultorId, tipo, endereco, numero, bairro, cidade, cep, quartos, banheiros, descricao, preco_venda, preco_aluguel, tamanho, qualidade, disponibilidade, condominio, iptu, seguro_incendio, taxa_de_servicos, vagas, mobiliado) 
VALUES 
(3, 'Apartamento', 'Avenida Paulista', '789', 'Bela Vista', 'São Paulo', '01300-000', 1, 1,
'Ótimo apartamento de 1 quarto e 1 banheiro. Próximo ao metrô e comércios.', 
400000.00, 15000, 200, 4.5, 'venda_e_aluguel', 450, 44, 26, 68, 2, 'mobiliado');
