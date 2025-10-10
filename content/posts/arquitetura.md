---
title: 'Software Architect Basics'
date: '2025-10-10'
tipo: 'Tech'
excerpt: 'Sobre arquitetura de software.'
---

## Intro

Olá pessoal, decidi fazer essa postagem sobre arquitetura de software, porque sei lá, eu quis.  
Leia isso aí e aproveite.

# **Software Architect Basics**



## **ANTES DE MAIS NADA, PELO AMOR DE DEUS: Evite Overengineering**

> "Superengenharia" (over-engineering) refere-se a **projetar ou solucionar problemas de forma excessivamente complexa**, usando recursos que não são necessários ou que poderiam ser simplificados sem perder a eficácia.  
> Lembre-se do **KISS** (*Keep It Simple, Stupid*): “Não complique o que pode ser simples.”

---

## **O que é Arquitetura de Software**

Arquitetura de software **refere-se às estruturas de alto nível (componentes, módulos)** de um sistema de software e à disciplina responsável por sua criação (estilos — *monólitos ou microserviços* — e padrões).

Formalmente, a arquitetura de um sistema de computador pode ser definida como:

- **A estrutura ou estruturas do sistema**, que compreendem elementos, as propriedades externamente visíveis desses elementos e os relacionamentos entre eles.
- **A maneira como essas estruturas atendem aos requisitos funcionais e não funcionais**, bem como aos comportamentos do sistema.

A arquitetura envolve decisões significativas sobre a organização do sistema, incluindo:

- Seleção de elementos estruturais e suas interfaces;  
- Definição de comportamentos nas colaborações entre esses elementos;  
- Organização fundamental para atingir requisitos e atributos de qualidade.

> A arquitetura de software **está na base da engenharia de software** e desempenha papel fundamental ao fornecer a organização fundamental de um sistema.

Ela **influencia diretamente a qualidade** do software e é **crítica para desempenho e modificações futuras**.

A arquitetura fornece uma **visão abstrata** do sistema — não entra em detalhes de implementação ou algoritmos, mas **se concentra em componentes, módulos e padrões** de projeto, como:

- Cliente-Servidor  
- Camadas (*Layered Architecture*)  
- Event-Driven Architecture

Os princípios de **abstração**, **decomposição** e **composição** organizam o projeto de forma estruturada e facilitam a evolução de sistemas complexos.

---

## **A Importância da Arquitetura**

Uma boa arquitetura visa preencher tanto **os requisitos funcionais** (o que o sistema faz) quanto **os não funcionais** (como o sistema faz).  
Com requisitos bem definidos, as decisões arquiteturais se tornam mais assertivas, garantindo qualidade e eficiência.

Imagine um sistema de cadastro de clientes:

1. Levante os requisitos funcionais.  
2. Defina os requisitos não funcionais.  
3. Tome decisões arquiteturais baseadas nessa documentação.

Sem esses passos, o projeto fica sem direção clara.

---

## **Entenda Levantamento de Requisitos: Funcionais e Não Funcionais**

### **O que são requisitos**

Requisitos são **itens e características indispensáveis** para alcançar um objetivo específico.  
No desenvolvimento de software, **analisar requisitos é essencial**.

> “Sem requisitos como conectividade, sistema operacional, plataforma e interface, torna-se impossível desenvolver um software operacional para o usuário.”

---

## **Especificação de Requisitos**

A especificação bem feita **impacta positivamente todo o ciclo de vida do sistema**:

- Reduz custos,  
- Diminui tempo de produção,  
- Minimiza retrabalhos.

### **Funcionalidade**

Um requisito deve ser **específico e claro**, mostrando o que determinada parte do sistema faz e como deve funcionar.

### **Interface**

A interface influencia diretamente a experiência do usuário. Devem ser considerados:

- Posição do elemento,  
- Tamanho,  
- Cor,  
- Ação executada.

---

## **Requisitos Funcionais**

São as necessidades explícitas do sistema — **o que ele deve fazer**.

Eles atendem às necessidades dos usuários e definem as funcionalidades do sistema.

### Exemplo — Sistema de Gestão Hospitalar (SGH)

- **RF001 – Cadastro de Pacientes**  
  O sistema deve permitir o cadastro completo de pacientes.

- **RF002 – Gestão de Agendamentos**  
  O sistema deve permitir o agendamento de consultas, exames e cirurgias.

- **RF003 – Prontuário Eletrônico**  
  O sistema deve manter um prontuário eletrônico único por paciente.

- **RF004 – Prescrição Eletrônica**  
  O sistema deve permitir que médicos emitam prescrições eletrônicas.

- **RF005 – Módulo de Faturamento**  
  O sistema deve gerar cobranças automáticas com base em atendimentos.

- **RF006 – Gestão de Leitos**  
  O sistema deve controlar ocupação de leitos, admissões e altas.

- **RF007 – Controle de Acesso**  
  O sistema deve permitir perfis de acesso diferenciados.

- **RF008 – Integração com Laboratórios**  
  O sistema deve se integrar com laboratórios para resultados de exames.

- **RF009 – Painel de Indicadores (BI)**  
  O sistema deve fornecer indicadores de desempenho.

- **RF010 – Notificações e Alertas**  
  O sistema deve enviar alertas automatizados para eventos críticos.

Esses requisitos definem **o comportamento funcional** do sistema sob a perspectiva do usuário.

---

## **Requisitos Não Funcionais**

Requisitos não funcionais tratam de **como o sistema executa as funcionalidades**.  
Também chamados de **atributos de qualidade**, influenciam fortemente a arquitetura.

### Exemplo — SGH

- **RNF001 – Segurança da Informação**  
  Criptografia de dados em trânsito e repouso (HTTPS, AES-256).

- **RNF002 – Autenticação e Autorização**  
  Login com 2FA para perfis sensíveis.

- **RNF003 – Disponibilidade**  
  Disponível 24/7 com no máximo 0,5% de downtime mensal.

- **RNF004 – Performance**  
  Respostas em até 2 segundos em 95% das requisições.

- **RNF005 – Escalabilidade**  
  Suportar aumento de usuários e transações.

- **RNF006 – Backup e Recuperação**  
  Backups automáticos diários com recuperação em até 2 horas.

- **RNF007 – Compatibilidade**  
  Compatível com navegadores modernos e responsivo.

- **RNF008 – Conformidade Legal**  
  LGPD, ANVISA e CFM.

- **RNF009 – Auditabilidade**  
  Registro de ações com logs detalhados por 5 anos.

- **RNF010 – Usabilidade**  
  Interface intuitiva, padronizada e com feedback visual.

Os requisitos não funcionais se alinham à **ISO 9126**, que define categorias de qualidade:

- Funcionalidade  
- Usabilidade  
- Manutenibilidade  
- Portabilidade  
- Confiabilidade  
- Eficiência

---

## **Fundamentos da Arquitetura de Software**

> Na engenharia de software, arquitetura refere-se às **estruturas fundamentais** de um sistema de software e à **disciplina responsável por sua criação**.  
> A arquitetura descreve componentes e como interagem — **funciona como um projeto de todo o sistema**.

O objetivo é **projetar um sistema livre de desafios comuns**, atendendo a:

- Desempenho,  
- Confiabilidade,  
- Manutenibilidade,  
- Escalabilidade.

---

## **Engenharia Reversa — Atenção**

Engenharia reversa significa reconstruir a arquitetura a partir do código existente.  
Porém:

- O código costuma divergir da arquitetura ao longo do tempo;  
- A arquitetura reconstruída pode não refletir a intenção original;  
- Código não documentado carece de abstração e justificativas.

> É melhor **documentar a arquitetura antes da implementação** para evitar divergências.

---

## **Princípios Fundamentais**

### 1. **Estrutura de Alto Nível**

- Define componentes e módulos;  
- Estabelece fronteiras claras entre partes do sistema.

### 2. **Decisões Arquiteturais**

- Escolhas fundamentais e difíceis de mudar:  
  - Padrões (MVC, CQRS),  
  - Estilos (monólito, microservices, event-driven),  
  - Tecnologias e frameworks.

### 3. **Atributos de Qualidade**

- Desempenho  
- Escalabilidade  
- Manutenibilidade  
- Segurança  
- Disponibilidade  
- Usabilidade  
- Reutilização

> Melhorar um atributo pode impactar negativamente outro. O arquiteto deve equilibrar.

### 4. **Padrões Arquiteturais**

- Camadas (*Layered*)  
- Cliente-Servidor  
- Microsserviços  
- Event-Driven Architecture  
- Domain-Driven Design

### 5. **Documentação e Comunicação**

- Facilita entendimento e evolução;  
- Modelos úteis:
  - C4 Model  
  - UML  
  - ADR (*Architecture Decision Records*)

### 6. **Proatividade e Antecipação**

- Arquitetura deve prever mudanças futuras;  
- Garantir flexibilidade e modularidade.

---
SDG.