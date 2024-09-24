# Lung Cancer Prediction

## Descrição do Projeto

O **Lung Cancer Prediction** é um projeto simples que permite aos usuários estimar a probabilidade de câncer de pulmão com base em seus dados de saúde e estilo de vida. Utilizando um formulário interativo e uma API de machine learning, o projeto visa sensibilizar as pessoas sobre os fatores que podem aumentar o risco de câncer de pulmão.

## Funcionalidades

- **Interface intuitiva**: O usuário insere seus dados em um formulário simples e amigável.
- **Predição em tempo real**: Os dados são enviados para uma API Flask que retorna uma avaliação de risco de câncer de pulmão.
- **Design Responsivo**: A interface é otimizada para diversos dispositivos.
- **Documentação da API**: A API está documentada utilizando OpenAPI, facilitando o entendimento e o uso.

## Estrutura de Arquivos

- `index.html`: O arquivo HTML que define a interface da aplicação.
- `script.js`: Arquivo JavaScript que manipula o envio de dados do formulário e exibe os resultados da predição.
- `styles.css`: Arquivo CSS que define o estilo da aplicação.
- `lung-icon.png`: Ícone utilizado na interface.
- `lung-background.png`: Imagem de fundo sutil relacionada aos pulmões.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do layout da página.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Manipulação do DOM e comunicação com a API.
- **Flask (API)**: Backend responsável por processar as predições de câncer de pulmão.
- **Fetch API**: Realiza a comunicação entre o frontend e a API Flask.

## Como Usar

### 1. Executando a API

O projeto depende de uma API Flask que realiza a predição de câncer de pulmão. A API deve estar rodando localmente para que o frontend funcione corretamente.

1. **Clone o repositório da API**:
   ```bash
   git clone <url-do-repositorio>
   cd lung-cancer-prediction-api
   ```

2. **Instale as dependências e inicie a API**:
   ```bash
   pip install -r requirements.txt
   python app.py
   ```

A API estará disponível em `http://127.0.0.1:5000`.

### 2. Executando o Frontend

Basta abrir o arquivo `index.html` em qualquer navegador. A interface carregará e estará pronta para receber os dados do usuário e fazer a predição.

### 3. Preenchendo o Formulário

O formulário coleta os seguintes dados:

- Idade
- Gênero
- Hábito de fumar
- Presença de dedos amarelados
- Nível de ansiedade
- Pressão dos pares (peer pressure)
- Doenças crônicas
- Fadiga
- Alergias
- Chiado no peito (wheezing)
- Consumo de álcool
- Tosse persistente
- Falta de ar
- Dificuldade para engolir
- Dor no peito

Após preencher o formulário, clique em "Check Your Risk". O sistema enviará os dados para a API e exibirá a probabilidade de câncer de pulmão com base nas informações fornecidas.

## Exemplo de Uso

1. Abra o arquivo `index.html` em seu navegador.
2. Preencha suas informações de saúde e estilo de vida no formulário.
3. Clique no botão "Check Your Risk".
4. Veja o resultado da predição no final do formulário.

## Estilos Visuais

O design da página foi pensado para ser intuitivo e agradável. Ele utiliza uma paleta de cores suaves e elementos interativos que melhoram a experiência do usuário.

### Estilo CSS

- O formulário é centralizado na página e possui bordas arredondadas e uma leve sombra.
- Campos de entrada e botões possuem efeitos de foco para melhorar a interação.
- As cores principais são tons de azul e vermelho para os botões, com fontes de fácil leitura.
  
### Resultados da Predição

Os resultados são exibidos logo abaixo do formulário, mostrando se há **alto** ou **baixo** risco de câncer de pulmão.

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar o projeto, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.