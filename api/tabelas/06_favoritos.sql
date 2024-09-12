USE websiteInfo;

CREATE TABLE IF NOT EXISTS favoritos (
    clienteID INT,
    imovelID INT,
    PRIMARY KEY (clienteID, imovelID),
    FOREIGN KEY (clienteID) REFERENCES clientes(clienteId) ON DELETE CASCADE,
    FOREIGN KEY (imovelID) REFERENCES imoveis(imoveisID) ON DELETE CASCADE
);