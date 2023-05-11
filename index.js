let option, numeroDeVagas = 0
let arrayJob = []
let confirmacao = false
let teste = ""
let vagasDisponiveis = ''
arrayJob.forEach(function(vaga, index) {
  vagasDisponiveis += `${index} - ${vaga.nome}\n`
})


function exibirElemento(elemento, indice, array){
  alert("Vagas Cadastradas:" + numeroDeVagas)

  arrayJob.forEach(function(value, index, array) {
    alert("Índice da vaga: " + index + "\nNome da vaga: " + value.nome + "\nQuantidade de candidatos inscritos: " + value.candidatos.length)
  })
}

do{
  option = parseFloat(prompt(
    "Bem vindo ao nosso Sistema de Vagas de Emprego.\nSelecione a opção desejada no menu abaixo:\n" + 
    "\n1- Listar vagas disponíveis." + 
    "\n2- Criar uma nova vaga." +
    "\n3- Visualizar uma vaga." +
    "\n4- Inscrever um candidato em uma vaga:" + 
    "\n5- Excluir uma vaga." +
    "\n6- Sair."
  ))

  switch(option){
    case 1:
        if (numeroDeVagas === 0) {
            alert("No momento não possuímos nenhuma vaga disponível!")
          } else {
            alert("Vagas Cadastradas: " + numeroDeVagas)
            arrayJob.forEach(function(value, index, array) {
              alert("Índice da vaga: " + index + "\nNome da vaga: " + value.nome + "\nQuantidade de candidatos inscritos: " + value.candidatos.length)
              numeroDeVagas += numeroDeVagas
            })
          }
      break
    case 2:
      const objectJob = {}
      
      objectJob.nome = prompt(
        "Criando nova vaga.\n\n" +
        "Digite o nome para a sua vaga."
      )
      objectJob.descricao = prompt("Digite a descrição da sua vaga.")
      objectJob.dataLimite = prompt("Digite a data limite da sua vaga no formato(00/00/00).")
      objectJob.candidatos = []
      
      confirmacao = confirm(
        "Por favor, confira os dados antes de inserir sua vaga ao nosso sistema:" +
        "\n\nVaga: " + objectJob.nome +
        "\nDescricao: " + objectJob.descricao +
        "\nData: " + objectJob.dataLimite 
      )

      if(confirmacao){
        arrayJob.push(objectJob)
        numeroDeVagas = numeroDeVagas + 1
        alert("Vaga inserida com sucesso!")
      }else{
        alert("Voltando ao menu...")
      }    
      
      break
    case 3:
        if (numeroDeVagas === 0) {
          alert("Não há vagas disponíveis!")
        } else {
          const indiceVaga = parseInt(prompt("Digite o índice da vaga:"))
      
          if (indiceVaga < 0 || indiceVaga >= numeroDeVagas) {
            alert("Índice de vaga inválido!")
          } else {
            const vagaSelecionada = arrayJob[indiceVaga]
            let candidatos = "Nenhum candidato inscrito."
      
            if (vagaSelecionada.candidatos.length > 0) {
              candidatos = vagaSelecionada.candidatos.join(", ")
            }
      
            alert(
              "Informações da vaga:" +
              "\nÍndice da vaga: " + indiceVaga +
              "\nNome da vaga: " + vagaSelecionada.nome +
              "\nDescrição: " + vagaSelecionada.descricao +
              "\nData limite: " + vagaSelecionada.dataLimite +
              "\nQuantidade de candidatos inscritos: " + vagaSelecionada.candidatos.length +
              "\nCandidatos inscritos: " + candidatos
            )
          }
        }
      break
    case 4:
        if (numeroDeVagas === 0) {
            alert("Não há vagas disponíveis!")
        } else {
            const nomeCandidato = prompt("Digite o nome do candidato:")
                
            let vagasDisponiveis = ''
            arrayJob.forEach(function(vaga, index) {
                  vagasDisponiveis += `${index} - ${vaga.nome}\n`
            })
            const indiceVaga = parseInt(prompt(`Digite o índice da vaga:\n\n${vagasDisponiveis}`))
                
            if (indiceVaga < 0 || indiceVaga >= numeroDeVagas) {
            alert("Índice de vaga inválido!")
            } else {
            const vagaSelecionada = arrayJob[indiceVaga]
            const confirmacao = confirm(
                "Por favor, confirme os dados antes de inscrever o candidato na vaga:" +
                "\n\nNome do candidato: " + nomeCandidato +
                "\nVaga selecionada: " + vagaSelecionada.nome +
                "\nDescrição: " + vagaSelecionada.descricao +
                "\nData limite: " + vagaSelecionada.dataLimite 
            );
                
            if (confirmacao) {
                if (!vagaSelecionada.candidatos) {
                vagaSelecionada.candidatos = []
                }
                vagaSelecionada.candidatos.push(nomeCandidato)
                alert("Candidato inscrito com sucesso!")
            } else {
                alert("Operação cancelada.")
            }
            }
        }
      break
    case 5:
        if (numeroDeVagas === 0) {
            alert("Não há vagas disponíveis para excluir!")
          } else {
            // exibir as vagas disponíveis
            let mensagemVagas = "Vagas disponíveis para exclusão:\n\n";
            for (let i = 0; i < arrayJob.length; i++) {
              mensagemVagas += i + " - " + arrayJob[i].nome + "\n";
            }
            alert(mensagemVagas);
          
            // pedir o índice da vaga para excluir
            const indiceVagaExcluir = parseInt(prompt("Digite o índice da vaga que deseja excluir:"))
          
            if (indiceVagaExcluir < 0 || indiceVagaExcluir >= numeroDeVagas) {
              alert("Índice de vaga inválido!");
            } else {
              const confirmacaoExclusao = confirm("Você tem certeza que deseja excluir a vaga:\n" +
                "Nome: " + arrayJob[indiceVagaExcluir].nome + "\n" +
                "Descrição: " + arrayJob[indiceVagaExcluir].descricao + "\n" +
                "Data Limite: " + arrayJob[indiceVagaExcluir].dataLimite + "\n\n" +
                "Todos os candidatos inscritos nesta vaga também serão excluídos permanentemente!")
          
              if (confirmacaoExclusao) {
                arrayJob.splice(indiceVagaExcluir, 1)
                numeroDeVagas = arrayJob.length
                alert("Vaga excluída com sucesso!")
              } else {
                alert("Operação cancelada.")
              }
            }
          }          
      break
    case 6:
        alert("Encerrando o programa...")
      break
    default:
      alert("Opção inválida, encerrando o programa...")
      break
  }
} while(option !== 6)