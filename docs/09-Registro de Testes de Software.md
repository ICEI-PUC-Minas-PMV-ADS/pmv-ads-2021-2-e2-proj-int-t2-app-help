# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
* Site publicado na Internet
* Navegador da Internet - Chrome, Firefox ou Edge 
* Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


| **Caso de Teste** |**CT-01 - Cadastrar Usuário**| 
|---|----|
|Requisitos Associados |RF-01 O site deve permitir o usuário cadastrar-se com um login e senha. O login deverá ser seu endereço de e-mail ou número do telefone celular. A senha é opcional.<br/> RF-02 O site deverá sugerir senhas de fácil memorização. Ex: os 5 primeiros dígitos do CPF.<br/> RF-05 O site deve possuir uma tela de cadastro de dados pessoais do paciente.|
|Objetivo do Teste | Verificar a possibilidade de cadastro de novos usuários|
|Passos |1) Acessar o navegador <br/> 2) Acessar o site <br/> 3) Na tela inicial clicar em "Cadastre-se"<br/> 4) Informar os campos solicitados: Nome Completo, email e senha <br/> 5) Clicar em"Cadastre-se"|
|Critérios de Êxito |Uma mensagem de sucesso deve ser exibida <br/> Os dados devem ser salvos no banco de dados e serem possíveis de acessar posteriormente|
|Resultados obtidos | Requisito atendido - Ao acessar o site foi possivel fazer cadastro por meio de email e senha |

|**Caso de Teste** |**CT-02 - Realizar Login**| 
|---|----|
|Requisitos Associados | RF-03 O site deverá permitir validar o e-mail ou telefone do usuário <br/> RF-04	O site deve permitir o acesso do paciente cadastrado, seu cuidador e seu familiar.<br/>|
|Objetivo do Teste |Verificar a possibilidade do usuário realizar o login|
|Passos |1) Acessar o navegador <br/> 2) Acessar o site <br/> 3) Na tela inicial clicar em "Acessar"<br/> 4) Informar os campos solicitados: Email e senha <br/> 5) Clicar em "Acessar" |
|Critérios de Êxito |Ao serem informados os dados cadastrados anteriormente, o usuário será direcionado para a página home |
|Resultados obtidos |Requisito atendido - Ao acessar o site foi possivel acessar por meio de email e senha pré cadastrados |

|**Caso de Teste** |**CT-03 - Cadastrar Medicação**| 
|---|----|
|Requisitos Associados |RF-07 O site deve possuir uma tela de cadastro de medicamentos.<br/> RF-09 O site deve possuir uma tela para cadastro do medicamento do paciente.|
|Objetivo do Teste | Verifica a possibilidade do usuário cadastrar medicações |
|Passos |1) Acessar o navegador <br/> 2) Acessar o site <br/> 3) Na tela inicial clicar em "Acessar"<br/> 4) Realizar Login <br/> 5) Clicar em "Medicamentos" <br/> 6) Preencher todos os campos disponiveis <br/> 7) Clicar em "Salvar" |
|Critérios de Êxito | Os dados cadastrados devem ser salvos no banco de dados <br/>Ao acessar "Medicamentos" o medicamento cadastrado deve ser exibido |
|Resultados obtidos | Requisito atendido  - Por meio do link na barra de ferramentas, é possivel cadatrar medicamentos |



|**Caso de Teste** |**CT-04 - Gerenciar acessos**| 
|---|----|
|Requisitos Associados | RF-14 O site deverá permitir gerencias os acessos dos usuários.|
|Objetivo do Teste |Verificar a possibilidade do usuário gerenciar todos os perfis que acessam seus dados|
|Passos |1) Acessar o navegador <br/> 2) Acessar o site <br/> 3) Na tela inicial clicar em "Acessar"<br/> 4) Realizar Login <br/> 5) Clicar em "Gerenciamento de acessos" <br/> 6) Clicar em "Editar" e "Excluir" <br/> 7) Modificar dados cadastrados 8) Clicar em "Salvar" |
|Critérios de Êxito |Após a edição ou exclusão uma mensagem de sucesso deve ser exibida <br/> O perfil selecionado deve ser editado ou excluído do banco de dados <br/> As novas informações atualizadas do perfil editado deve aparecer na página de gerenciamento de acessos |
|Resultados obtidos | Requisito atendido - É possivel acessar os usuários cadastrados, verificar o perfil de acesso definido, alterar e salvar |

