USE websiteInfo;

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