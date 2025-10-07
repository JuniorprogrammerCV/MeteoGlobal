# 🌦️ Meteorologia Simples

Um projeto de página web simples e elegante para consultar as condições climáticas atuais de qualquer cidade do mundo em tempo real. A aplicação utiliza a API do [OpenWeatherMap](https://openweathermap.org/api) para buscar e exibir os dados meteorológicos.

 
*(Sugestão: substitua o link acima por uma captura de tela real do seu projeto)*

## ✨ Funcionalidades

- **Busca por Cidade**: Permite ao usuário digitar o nome de uma cidade para ver suas informações climáticas.
- **Dados Atuais**: Exibe a temperatura atual, sensação térmica, umidade, velocidade do vento e pressão atmosférica.
- **Ícones Dinâmicos**: Mostra um ícone que representa a condição climática atual (ensolarado, nublado, chuvoso, etc.).
- **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, funcionando bem em desktops e dispositivos móveis.
- **Tratamento de Erros**: Exibe mensagens amigáveis caso a cidade não seja encontrada ou ocorra um erro na comunicação com a API.
- **Cidade Padrão**: Carrega automaticamente o clima de uma cidade padrão ("Mindelo") ao abrir a página.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para a estilização, incluindo Flexbox, Grid Layout e um efeito de "glassmorphism" para o card de clima.
- **JavaScript (ES6+)**: Para a interatividade, manipulação do DOM e consumo da API.
- **OpenWeatherMap API**: Para fornecer os dados meteorológicos.

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório** (ou baixe os arquivos para uma pasta em seu computador).
    ```bash
    git clone https://github.com/JuniorprogrammerCV/MeteoGlobal.git
    ```

2.  **Obtenha uma chave da API**:
    - Crie uma conta gratuita no site [OpenWeatherMap](https://openweathermap.org/api).
    - No seu painel, gere uma chave de API (API Key).

3.  **Configure a chave da API**:
    - Abra o arquivo `meteo.js`.
    - Encontre a linha que contém a variável `apiKey`.
    - Substitua o valor existente pela sua chave de API.
    ```javascript
    // Chave da API (substitua pela sua chave)
    const apiKey = 'SUA_CHAVE_DA_API_AQUI'; 
    ```

4.  **Abra a aplicação**:
    - Abra o arquivo `meteo.html` no seu navegador de preferência.

Pronto! Agora você pode usar a aplicação para consultar o clima.

## 📂 Estrutura dos Arquivos

```
.
├── 📄 meteo.html      # Arquivo principal com a estrutura da página
├── 🎨 meteo.css       # Folha de estilos para a aplicação
└── ⚙️ meteo.js        # Lógica da aplicação e comunicação com a API
```

## ✒️ Autor

**Junior Nelson Dias Delgado**

---
*Projeto desenvolvido como parte de PROJECTOS DO MEU CURSO DE DESENVOLVIMENTO DE SOFTWARES.
Todos os direitos reservados.*
