# Questrade 1st Hackathon - 2023.07

Repositório com o projeto desenvolvido para o 1º Hackathon Questrade.

## O problema

Desenvolver uma plataforma online que permita aos usuários solicitar empréstimos e receber decisões instantâneas com base em sua pontuação de crédito.

## Solução

Foi desenvolvido uma página para coleta de leads, simulação de crédito, e pedido de análise de crédito. Bem como uma API/BFF para servir a página e se comunicar com serviços internos de score e validação.

A ideia de oferecer simulação e depois pedido avaliação de crédito segue padrões encontrados em plataformas de mercado como Creditas, Caixa, BV, Webmotors, e MeuFinanciamentoSolar. No final é gerado um lead que entrará no funil do time de financiamento e será tratado enquanto os documentos e informações do cliente são validados assincronamente pelo motor de crédito. Informações sobre o andamento do processo podem ser enviadas automaticamente por meio de email ou whatsapp. E atendimento personalizado, suporte, e ajuda para enviar documentos, assinar contratos e escolher melhor opção de financiamento podem ser feitas pelo time de financiamento, entrando em contato direto com o cliente.

## Tecnologias utilizadas

### Frontend

- Typescript: O projeto se utilizou extensamente de tipagem e integração das bibliotecas com o TS para garantir uma ótima experiência de desenvolvimento e detectar bugs rapidamente, diminuindo o loop de feedback durante o desenvolvimento;
- Vite + SWC: O Vite é uma das bibliotecas recomendadas pela última documentação do React, permite renderização em servidor (SSR) e geração estática (SSG), hot-reload automático, e boa integração com typescript;
- React: O projeto buscou uma aplicação de clean architecture/feature-sliced architecture, separando componentes visuals, funcionalidades, páginas e configurações globais;
- React Query: Para gerenciar estados externos (APIs), aproveitando e invalidando o cache das respostas;
- Zustand: Para gerenciar estados internos da aplicação, com stores coesos isolando pedaços do estado global;
- NextUi Design System + Tailwind: Para componentes genéricos, temas, e classes utilitárias, acelerando o desenvolvimento;
- React Hook Forms + Yup: Para gerenciamento de formulários, validação de dados fornecidos pelo usuário ou retornos da API, integrando com Typescript;
- Eslint + Prettier: Para automatizar a formatação do projeto e alertar sobre inconsistências;
- Husky + Commitlint: Para automatizar tarefas durante o commit, como a padronização de mensagens de commit.

### Backend

- C# .net Core: Para o serviço qu expõe a API de simulação e requisição de crédito;
- Docker: Para automatizar e padronizar o ambiente de construção e deploy da aplicação;
- Nginx: Para terminação de SSL e redirecionar chamadas da API para o serviço backend;
- Terraform: Para prover infraestrutura no Google Cloud Platform.

## Próximos passos

### Portal administrativo

Um portal administrativo para gerenciar leads e pedidos de financiamento. Cabe avaliar integração de nosso ecossistema de microsserviços com ferramentas de mercado, como Salesforce e Retool.

Salesforce fornece API e sistema de gerenciamento de funis de vendas, que podem se integrar com nossos microsserviços. Retool é uma alternativa para criação da interface frontend do portal administrativo, devendo o time de desenvolvedores apenas expor uma API de entrada. Nesse caso pode ser um microsserviço agindo como Backend for Frontend (BFF). Ou uma ferramenta de API Gateway como Apigee, Mulesoft ou Kong (ou até um Nginx) expondo acesso às APIs já existentes.

### Autenticação

Um serviço de autenticação. Aqui minha recomendação é integrar ferramentas como Keycloak, Google Identity Platform (Google IdP), Azure Active Directory (Azure AD), or Auth0.

Keycloak pode ser facilmente adicionado a infraestrutura como uma solução containerizada. É bastante flexível, mas exige gerenciamento próprio. As outras soluções funcionam como SaaS. A vantagem do Google IdP é estar integrado ao Google Cloud Platform, enquanto o Azure AD é bem conhecido por fornecer funcionalidades a nível empresarial e pode ser integrado com serviços em outras clouds facilmente.

### Gerenciar pagamentos

Dividindo em dois microsserviços:

O primeiro como gateway para provedores de serviço de pagamento (PSP), recebe webhooks informando a entrada de valores e os registra como crédito para o cliente.

O segundo faz o abatimento de débitos, consumindo créditos da conta do cliente. Execução em lote, podendo usar frameworks como Apache Beam, Apache Spark, ou ferramentas mais simples de agendamento de execução como Cron.

Esses créditos usualmente serão entradas por pagamento (microsserviço acima), mas casos como descontos, créditos bônus por cobranças indevidas ou duplicadas, ou devoluções entram no processamento de abatimento de débitos. Assim o histórico de contabilidade fica condizente mesmo com erros da operação ou do cliente.

Um pagamento (crédito) pode abater mais de uma parcela de dívida (débito). Como pode abater parcialmente uma parcela. Essa arquitetura permite pagamentos parciais, pagamento de valor mínimo da mensalidade, e adiantamento de parcelas para abater juros futuros.

### Motor de crédito e avaliação

Microsserviço para gerenciar o estágio da análise de crédito do cliente, e o estágio da análise de cada documento fornecido. Confia fortemente em integrações com diversos outros serviços, internos e externos, para validar documentos pessoas, de veículos e imóveis, consultar situação fiscal, protestos e dívidas em abertos em diversos órgãos.

Este serviço deve ser resiliente, não confiando na disponibilidade de suas integrações. Para isso deve contar com mecanismo de retry com jitter e backoff exponencial, transactional outbox para garantir consistência dos dados, cache de dados, e ter uma arquitetura de máquina de estados com processamento assincrono e em lote para gerenciar cada fase que foi concluída ou que precisa ser executada/re-executada.

Uma ferramenta que pode ser útil aqui é um sistema de Change data capture (CDC) como Debezium, lendo uma tabela de outbox messages devidamente escrita dentro das transações do banco de dados SQL (garantindo consistência, ACID), e escrevendo para tópicos do Kafka, para serem depois processadas por um sistema em lotes.
