# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Avaliação da Solução
O processo de realização dos testes da solução desenvolvida está documentado na seção que se segue e traz os planos de testes de software e de usabilidade, na sequência, o registro dos testes realizados.
6.1 Plano de Testes de Software
Requisitos para realização do teste:
Site publicado na Internet
Navegador da Internet - Chrome
Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

Caso de Teste
CT-01 - Interação do sistema ao usuário

Requisitos Associados
RF-01 - O site deve apresentar na página principal comércios próximos a localização do usuário (API)
RF-02 - O site deve apresentar, para cada comercio seus serviços, imagens, avaliações, informações sobre o prestador.

Objetivo do Teste
Verificar se o fluxo estáentre prestador e usuário está acontecendo corretamente

Passos
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4)Visualizar página serviços
5)Campo de busca 
6)Filtro de seleção por serviços

Critérios de Êxito
Deve haver uma requisição AJAX no painel de cardápio aos serviços (recurso do Navegador).
Os dados do usuário deveme prestados  ser exibidas corretamente no site, sendo .
As informações no cadastro devem ser mantidas no bacndo de dados, dando confidencialidade ao prestador e usuário.
Funcionamento de buscas do usuário  por requisição AJAX .
Interatividade com API como busca de seleção a localidade de mapa.
Atualização de dados do usuário e prestador.



Caso de Teste
CT-02 - Visualizar detalhes da notícia

Requisitos Associados
RF-03 - O site deve permitir ao usuário favoritar, comentar,selecionar e filtrar os serviços que busca.

Objetivo do Teste
Verificar se a interação de cliente e prestador  estão sendo informados localização atual .


Passos
1) Acessar o Navegador
2) Informar o endereço do Site

3) Cadastro ao site 
4) Efetuar login
5)Busca de serviços 

Critérios de Êxito
A página deve apresentar o respectivo cabeçalho com filtro de seleção, cardápio de serviços,cadastro com dados atuais .


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
