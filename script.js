// Função para processar o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura todos os dados do formulário
    const formData = new FormData(document.getElementById("lungCancerForm"));
    
    // Converte o FormData em um objeto simples
    const dados = {};
    formData.forEach((value, key) => {
        dados[key] = value;
    });

    // Converte o objeto para JSON
    const jsonData = JSON.stringify(dados);
    console.log(jsonData)
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
