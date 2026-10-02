# 06. Quiz geek

**Rascunho assistido para estudo.** Revise, execute e explique o código antes de usar em atividade acadêmica. Este exemplo não declara autoria independente do estudante. A publicação do código não equivale à entrega da atividade acadêmica.

## Executar
Abra `index.html` no navegador, mantendo os arquivos desta pasta juntos. Funciona offline; não exige instalação, servidor, dependências ou conta.

## Requisitos cobertos
- Exatamente 3 perguntas sobre jogos/cultura geek
- Três alternativas por pergunta
- Feedback de acerto/erro com explicação e pontuação final

## O que observar no código
- `fieldset` e `legend` agrupam alternativas acessíveis
- `preventDefault` evita navegar ao enviar o formulário
- `map`, `findIndex` e `forEach` percorrem respostas
- Um estado `finished` impede corrigir a mesma rodada novamente

## Testes manuais
1. Clique Conferir sem responder: mensagem deve pedir a pergunta 1
2. Marque Link, Role-Playing Game e Minecraft: 3 de 3 e três “Acertou!”
3. Recomece e marque Zelda, Rapid Pixel Graphics e Tetris: 0 de 3 e três “Errou.”
4. Recomece e acerte só a primeira: 1 de 3
5. Após corrigir, as opções e o botão Conferir ficam desativados

## Alteração sugerida para aprender
Personalize nomes, cores e conteúdo; explique em suas palavras a função de cada elemento, seletor e evento usado. Teste novamente depois de alterar.

## Créditos e limites
Os exercícios 1 e 3 usam referências a obras existentes: Link (Nintendo) e The Mandalorian (Star Wars). Link e The Legend of Zelda pertencem à Nintendo; Star Wars e The Mandalorian pertencem à Lucasfilm/Disney. A representação SVG de Link foi desenhada para o exemplo e não é arte oficial. As demais artes e personagens Aurora são originais. Não há dados pessoais, rastreamento ou carregamento externo; links de referência só abrem quando clicados. Menções no quiz não usam imagens ou logos de franquias.

## Estado da verificação
Em 02/10/2026, o conjunto dos nove exercícios passou por 68 verificações de lógica em DOM simulado, verificações de sintaxe dos seis scripts e de estrutura e referências locais. Testes visuais e comportamentos nativos de navegador ainda não foram concluídos: o navegador de teste não iniciou e a prévia local não abriu. Os testes automatizados não substituem os testes manuais acima.
