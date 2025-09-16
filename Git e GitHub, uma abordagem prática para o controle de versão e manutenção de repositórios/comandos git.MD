# 📌 Git Cheatsheet

Um guia rápido com os principais comandos do Git.

---

## 🔹 Início
- `git init` → inicia repositório  
- `git clone <repo>` → clona repositório remoto  

---

## 🔹 Status e Histórico
- `git status` → verifica alterações  
- `git log` → histórico de commits  
- `git reflog` → histórico detalhado (inclui resets e branch changes)  

---

## 🔹 Controle de Arquivos
- `git add <arquivo>` → adiciona ao staging  
- `git commit -m "msg"` → cria commit  
- `git commit -a -m "msg"` → commit de todos arquivos rastreados  
- `git rm <arquivo>` → remove arquivo do Git  
- `git mv <antigo> <novo>` → renomeia/move arquivo  
- `git checkout <arquivo>` → descarta alterações locais  
- `git reset --hard` → reseta tudo  
- `git reset --hard <hash>` → volta repo para commit específico  

---

## 🔹 Branches
- `git branch` → lista branches  
- `git branch <nome>` → cria branch  
- `git branch -d <nome>` → deleta branch  
- `git checkout -b <nome>` → cria e muda para nova branch  
- `git merge <nome>` → mescla branches  

---

## 🔹 Stash
- `git stash` → guarda alterações temporárias  
- `git stash list` → lista stashes  
- `git stash pop` / `git stash apply` → aplica stash  
- `git stash clear` → limpa todas  
- `git stash drop <nome>` → remove stash específica  

---

## 🔹 Tags
- `git tag -a <nome> -m "msg"` → cria tag anotada  
- `git show <tag>` → mostra tag  
- `git checkout <tag>` → muda código para o estado da tag  
- `git push origin <tag>` → envia tag para remoto  
- `git push origin --tags` → envia todas as tags  

---

## 🔹 Remoto
- `git remote add origin <url>` → conecta repositório local a um remoto  
- `git fetch` → busca branches/tags sem mesclar  
- `git pull` → baixa e mescla alterações do remoto  
- `git push` → envia commits locais para o remoto  

---

## 🔹 Submódulos
- `git submodule add <repo>` → adiciona submódulo  
- `git submodule` → lista submódulos  
- `git push --recurse-submodules=on-demand` → envia atualizações de submódulos  

---

## 🔹 Análises
- `git show` → detalhes de commit/tag  
- `git diff` → diferenças não commitadas  
- `git diff <arquivo> <arquivo_b>` → diferenças entre arquivos  
- `git shortlog` → log resumido por autor  
- `git describe --tags` → mostra tag mais próxima  
- `git describe --all` → mostra referências de tags/branches  

---

## 🔹 Administração
- `git clean` → remove arquivos não rastreados  
- `git gc` → otimiza repositório  
- `git fsck` → checa integridade  
- `git archive --format zip --output master_files.zip master` → exporta branch como .zip  

---

## 🔹 Avançado
- `git rebase <atual> <funcionalidade> -i` → reescreve histórico de commits (squash, reword, etc.)  

---
