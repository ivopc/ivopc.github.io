---
index: 7
title: "Desenvolvedor Web Full Stack (Tempo Integral)"
workTime: "Setembro, 2024 - Outubro, 2025"
company: ZnapTxt
companyLink: "https://znaptxt.com/"
companyLogo: "/assets/img/portfolio/znaptxt-logo.png"
location: "Remoto - São Paulo, São Paulo - Brasil"
showcase: "znaptxt-showcase"
techInfoDescription: ""
techInfoList:
    - "TypeScript com Vite, VueJS, NuxtJS, TailWindCSS no FrontEnd."
    - "TypeScript com NestJS e TypeORM (Postgres), Redis, Bull, Server Sent Events e cluster no BackEnd."
    -  "Server-Sent Events (SSE) foi utilizado para receber o resultado dos envios de SMS em tempo real"
    - "Bull+Redis trabalhava na mensageria aonde em conjunto balanceava a quantia de SMS disparados dentro de lotes para não sobrecarregar o envio"
    - "Cluster foi feito em um módulo do sistema para receber as callbacks do SMS (resultado se foi enviado, entregue ou recebido) para o sistema escalar e dedicar clusters para receber entregas massivas sobre o status atual do SMS"
---

ZnapTxt é uma plataforma corporativa SaaS de envio massivo de SMS com progresso de envio de SMS exibido em tempo real. Garante uma API de uso para os clientes.