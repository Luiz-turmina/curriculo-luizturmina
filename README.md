# Currículo esportivo — Luiz Gustavo Turmina (#27)

Site estático (HTML + CSS + JS, sem build). Conteúdo em `data.js`; fotos e o vídeo do Daytona na mesma pasta.

## Gerar o PDF
1. Abra `index.html` no Google Chrome.
2. Clique em **Salvar em PDF** (ou Cmd+P).
3. Destino: **Salvar como PDF** · Papel: **A4** · Margens: **Nenhuma** · marque **Gráficos de plano de fundo**.
O vídeo do Daytona não sai no PDF (a foto dele sai no lugar).

## Editar
- Textos, datas, resultados: `data.js`.
- Contato: campo `contato` (vazio = não aparece).
- Trocar/adicionar foto: coloque o arquivo na pasta e ajuste `capitulos` ou `galeria` em `data.js`.

## Publicar (opcional)
Suba todos os arquivos na raiz do repositório (sem subpastas) e importe na Vercel.
