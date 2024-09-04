export interface Destinatario {
    id:               number;
    createdDate:      Date;
    lastModifiedDate: Date;
    codigo:           string;
    cpf:              string;
    nome:             string;
    endereco:         string;
    complemento:      string;
    telefone:         string;
    email:            string;
    cidade:           string;
    bairro:           string;
    latitude:         string;
    longitude:        string;
    ativo:            boolean;
    geolocalizado:    boolean;
}