// Colocando os dados no padrão utilizado pela API
function padraoAPI(obj) {
    // Mapeamento de valores
    const valueMapping = {
        "y": "2",
        "m": "2",
        "n": "1",
        "f": "1"
    };

    // Colocando os dados no padrão utilizado pela API
    const transformedObject = {};

    for (const key in obj) {
        let value = obj[key];

        // Substituindo valores com base no mapeamento
        transformedObject[key] = valueMapping[value] || value; // Mantém o valor original se não houver mapeamento

        // Renomeando GENDER para MALE
        if (key === "GENDER") {
            transformedObject["MALE"] = transformedObject[key];
            delete transformedObject[key]; // Remove a chave original
        }
    }

    return transformedObject;
}

// Função para processar o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura todos os dados do formulário
    const formData = new FormData(document.getElementById("lungCancerForm"));
    
    // Converte o FormData em um objeto simples
    const dados = {};
    formData.forEach((value, key) => {
        dados[key.toUpperCase()] = value;
    });

    // Converte para o padrão da requisição
    const dadosPadronizados = padraoAPI(dados);

    // Converte o objeto para JSON
    const jsonData = JSON.stringify(dadosPadronizados);

    // Faz a requisição POST para a URL
    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(result => {
        // Exibe o resultado na página
        document.getElementById("result").textContent = result.cancer === "YES"
            ? 'High Risk of Lung Cancer' 
            : 'Low Risk of Lung Cancer';
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("result").textContent = "An error occurred.";
    });
}

// Adiciona o listener ao formulário
document.getElementById("lungCancerForm").addEventListener("submit", handleFormSubmit);
