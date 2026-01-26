# Como Hospedar no GitHub Pages

## Passo 1: Preparar o Repositório

1. Crie um repositório no GitHub chamado `aniver-coisa`
2. Inicialize o Git no projeto:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[SEU-USERNAME]/aniver-coisa.git
git push -u origin main
```

## Passo 2: Configurar o package.json

Antes de fazer o deploy, edite o `package.json` e substitua:
```json
"homepage": "https://[SEU-USERNAME].github.io/aniver-coisa"
```

Substitua `[SEU-USERNAME]` pelo seu usuário do GitHub.

## Passo 3: Fazer o Deploy

Execute o comando de deploy:
```bash
npm run deploy
```

## Passo 4: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em `Settings`
3. Na seção `Pages`, em `Build and deployment`
4. Em `Source`, selecione `Deploy from a branch`
5. Em `Branch`, selecione `gh-pages`
6. Clique em `Save`

## Passo 5: Aguardar o Deploy

O site ficará disponível em:
```
https://[SEU-USERNAME].github.io/aniver-coisa
```

## Observações Importantes

### Roteamento
- O projeto usa **HashRouter** automaticamente no GitHub Pages
- Isso permite que as rotas `/admin` e `/admin/login` funcionem corretamente
- Em desenvolvimento local, continua usando BrowserRouter

### Links
- No GitHub Pages, os links terão `#` na URL:
  - Principal: `https://[SEU-USERNAME].github.io/aniver-coisa/#/`
  - Admin: `https://[SEU-USERNAME].github.io/aniver-coisa/#/admin`

### Atualizações
- Para atualizar o site após mudanças:
```bash
git add .
git commit -m "Update"
git push
npm run deploy
```

### Solução de Problemas

#### Página 404
Se encontrar página 404, verifique:
1. Se o branch `gh-pages` foi criado
2. Se as configurações do GitHub Pages estão corretas
3. Se o `homepage` no package.json está correto

#### Rotas não funcionando
- O projeto já está configurado para usar HashRouter no GitHub Pages
- Isso resolve problemas com rotas no GitHub Pages

#### CSS não carregando
- Verifique se o arquivo `.nojekyll` está na pasta `public`
- Isso evita que o Jekyll processe os arquivos

## Estrutura Final

```
aniver-coisa/
├── build/                 # Gerado pelo npm run build
├── public/
│   └── .nojekyll         # Importante para GitHub Pages
├── src/
│   ├── components/
│   ├── utils/
│   └── App.jsx           # Com detecção automática de roteador
├── package.json          # Com scripts de deploy
└── DEPLOY-GITHUB-PAGES.md
```

## Benefícios

✅ **Grátis** - Hospedagem gratuita no GitHub Pages
✅ **Automático** - Deploy com um comando
✅ **Compatível** - Funciona em mobile e desktop
✅ **Seguro** - Área admin protegida
✅ **Profissional** - URL personalizada e rápido
