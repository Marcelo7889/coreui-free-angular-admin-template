import { Destinatario } from "./Destinatario";
import { Embarcador } from "./Embarcador";

export interface Pedido {
    id:               number;
    createdDate:      Date;
    lastModifiedDate: Date;
    codigo:           string;
    titulo:           string;
    rua:              string;
    numeroCasa:       string;
    bairro:           string;
    estado:           string;
    cidade:           string;
    cep:              string;
    complemento:      string;
    referencia:       string;
    latitude:         string;
    longitude:        string;
    status:           string;
    dataCriacao:      Date;
    dataEntrega:      Date;
    recebedor:        string;
    cpfRecebedor:     string;
    remetente:        Embarcador;
    destinatario:     Destinatario;
    observacao:       string;
    chaveAcesso:      string;
    numeroNotaFiscal: string;
    ativo:            boolean;
}



