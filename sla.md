
```mermaid
sequenceDiagram
    actor Fornecedor
    participant Sistema as Sistema do Restaurante

    Fornecedor->>Sistema: Registrar separação dos ingredientes
    Sistema->>Sistema: Atualizar disponibilidade dos itens no estoque
    Fornecedor->>Sistema: Informar previsão de chegada dos itens

    opt Emitir nota fiscal/recibo
        Fornecedor->>Sistema: Solicitar emissão da nota fiscal/recibo
        Sistema-->>Fornecedor: Emitir nota fiscal/recibo
    end
```
