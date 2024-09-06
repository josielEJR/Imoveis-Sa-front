USE websiteInfo;

CREATE TABLE IF NOT EXISTS imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imoveisID INT,
    url VARCHAR(255),
    FOREIGN KEY (imoveisID) REFERENCES imoveis(imoveisID) ON DELETE CASCADE
);

INSERT INTO imagens (imoveisID, url) VALUES 
(1, 'imagens-imovel/imagem.jpg'),
(1, 'imagens-imovel/imagem1.jpg');

INSERT INTO imagens (imoveisID, url) VALUES 
(2, 'imagens-imovel/imagem2.jpg'),
(2, 'imagens-imovel/imagem3.jpg');

INSERT INTO imagens (imoveisID, url) VALUES 
(3, 'imagens-imovel/imagem4.jpg'),
(3, 'imagens-imovel/imagem5.jpg');

INSERT INTO imagens (imoveisID, url) VALUES 
(4, 'imagens-imovel/imagem6.jpg'),
(4, 'imagens-imovel/imagem7.jpg');

INSERT INTO imagens (imoveisID, url) VALUES 
(5, 'imagens-imovel/imagem8.jpg'),
(5, 'imagens-imovel/imagem9.jpg');

INSERT INTO imagens (imoveisID, url) VALUES 
(6, 'imagens-imovel/imagem10.jpg'),
(6, 'imagens-imovel/imagem11.jpg');

