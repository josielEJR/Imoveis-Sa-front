USE websiteInfo;

CREATE TABLE IF NOT EXISTS visitas (
    visitaId INTEGER PRIMARY KEY AUTO_INCREMENT,
    clienteId INTEGER NOT NULL,
    imoveisID INTEGER NOT NULL,
    consultorId INTEGER NOT NULL,
    data_visita DATETIME NOT NULL,
    FOREIGN KEY (clienteId) REFERENCES clientes(clienteId),
    FOREIGN KEY (imoveisID) REFERENCES imoveis(imoveisID),
    FOREIGN KEY (consultorId) REFERENCES consultores(consultorId)
);