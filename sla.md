
```mermaid
sequenceDiagram
    actor Fornecedor
    participant Sistema as Sistema do Restaurante

    Note over Fornecedor,Sistema: Registro dos ingredientes
    Fornecedor->>Sistema: Registra a separação dos ingredientes
    Sistema-->>Fornecedor: Confirma o registro
    Fornecedor->>Sistema: Informa os itens e quantidades
    Sistema-->>Fornecedor: Atualiza a disponibilidade no estoque

    Note over Fornecedor,Sistema: Previsão de entrega
    Fornecedor->>Sistema: Informa o tempo previsto de chegada
    Sistema-->>Fornecedor: Confirma a atualização do status

    opt Emissão de nota fiscal/recibo
        Fornecedor->>Sistema: Envia a nota fiscal/recibo
        Sistema-->>Fornecedor: Confirma o recebimento
    end
```
