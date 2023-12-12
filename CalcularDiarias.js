function calcularDiarias() {
    // Obtenha os valores dos campos
    var suiteSelecionada = document.getElementById("suite").value;
    var numeroDiarias = parseInt(document.getElementById("diarias").value);

    // Valor das diárias com base na suite selecionada
    var valorDiaria;
    switch (suiteSelecionada) {
        case "standard":
            valorDiaria = 1000;
            break;
        case "exclusive":
            valorDiaria = 1100;
            break;
        case "luxo":
            valorDiaria = 1200;
            break;
            case "familia":
                valorDiaria= 900;
                break;
            case"reservado":
                valorDiaria=800;
                break;
                
        default:
            valorDiaria = 0;
    }

    // Verifique os serviços adicionais selecionados
    var servicosAdicionais = document.getElementsByName("servicos");
    var valorServicos = 0;
    for (var i = 0; i < servicosAdicionais.length; i++) {
        if (servicosAdicionais[i].checked) {
            // Atribua valores fictícios aos serviços adicionais, ajuste conforme necessário
            switch (servicosAdicionais[i].value) {
                case "lavanderia":
                    valorServicos += 120;
                    break;
                case "refeicoes":
                    valorServicos += 500;
                    break;
                case "cityTour":
                    valorServicos += 100;
                    break;
                    case"PasseioDebalao":
                        valorServicos +=300;
                        break;
                    // Adicione outros serviços conforme necessário
            }
        }
    }

    // Calcule o valor total
    var valorTotal = (valorDiaria * numeroDiarias) + valorServicos;

    // Atualize o campo "total" com o resultado
    document.getElementById("total").value = "R$" + valorTotal.toFixed(2);
}
