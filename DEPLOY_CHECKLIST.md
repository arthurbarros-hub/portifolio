# Deploy Checklist — Arthur Mansur Portfólio

Guia completo para preparar o portfólio para produção.

## ✅ Pré-Deploy

### 1. Verificação Local
- [ ] `npm run dev` funciona sem erros
- [ ] `npm run build` passa sem warnings críticos
- [ ] Teste em navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Teste em dispositivos móveis (iPhone, Android)
- [ ] Verificar performance com Lighthouse (>90)

### 2. SEO & Metadata
- [ ] Título e descrição configurados
- [ ] Open Graph tags corretos
- [ ] Twitter Cards configuradas
- [ ] Favicon adicionado
- [ ] Manifest.json presente
- [ ] Robots.txt configurado
- [ ] Sitemap gerado

### 3. Links & Contato
- [ ] Email funcional (barrosarthur312@gmail.com)
- [ ] LinkedIn URL correta (https://www.linkedin.com/in/arthur-mansur-05a617305/)
- [ ] GitHub URL correta (https://github.com/arthurbarros-hub)
- [ ] Links de navegação funcionam
- [ ] Botão "Voltar ao Topo" aparece após scroll
- [ ] Currículo PDF funciona (download e visualizar)

### 4. Performance
- [ ] Imagens otimizadas com next/image
- [ ] Nenhum console.log em produção
- [ ] Imports mortos removidos
- [ ] CSS não utilizado removido
- [ ] Code splitting ativo
- [ ] Lazy loading funcionando

### 5. Acessibilidade
- [ ] Alt text em todas as imagens
- [ ] Aria-labels em botões e links
- [ ] Foco visível em navegação por teclado
- [ ] Contraste WCAG AA verificado
- [ ] Navegação por teclado completa
- [ ] Leitor de tela testado (NVDA/JAWS)

### 6. Responsividade
- [ ] Mobile: 320px (iPhone SE)
- [ ] Mobile: 375px (iPhone 12)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1024px+
- [ ] Desktop: 1440px+
- [ ] Sem overflow horizontal
- [ ] Botões com boa área de toque (min 44x44px)

### 7. Segurança
- [ ] HTTPS habilitado (Vercel automático)
- [ ] Headers de segurança configurados
- [ ] Sem dados sensíveis no código
- [ ] .env.local não commitado
- [ ] Rate limiting em APIs (se houver)
- [ ] CORS configurado corretamente

## 🚀 Deployment em Vercel

### Passo 1: Preparar Repository

```bash
# Commit final
git add .
git commit -m "chore: production ready"
git push origin main
```

### Passo 2: Conectar Vercel

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Conecte seu GitHub
4. Selecione o repositório `portfolio`
5. Vercel detecta Next.js automaticamente

### Passo 3: Configuração

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Passo 4: Environment Variables

Adicione no Vercel Dashboard:

```
NEXT_PUBLIC_SITE_URL=https://arthurportfolio.dev
NEXT_PUBLIC_SITE_NAME=Arthur Mansur | Desenvolvedor Back-End
```

### Passo 5: Deploy

Clique em "Deploy" — Vercel fará build automaticamente

## 🔗 Configuração de Domínio

### Custom Domain (Vercel)

1. Dashboard → Project Settings → Domains
2. Adicione seu domínio personalizado
3. Siga instruções de DNS (se for domínio próprio)
4. Aguarde propagação (até 48h)

### Exemplo: arthurportfolio.dev

```
CNAME: cname.vercel-dns.com
```

## ✨ Pós-Deploy

### Verificações

- [ ] Site acessível em https://arthurportfolio.dev
- [ ] SSL certificate ativo (HTTPS)
- [ ] Redirecionamento de www → sem www
- [ ] 404 page funciona
- [ ] Loading state funciona
- [ ] Back to top button funciona
- [ ] Todos os links funcionam
- [ ] Navbar scroll suave funciona
- [ ] Currículo acessível

### SEO & Indexação

1. **Google Search Console**
   - Acesse https://search.google.com/search-console
   - Adicione propriedade
   - Submeta sitemap: `https://arthurportfolio.dev/sitemap.xml`
   - Aguarde indexação

2. **Bing Webmaster Tools**
   - Acesse https://www.bing.com/webmasters
   - Adicione site
   - Submeta sitemap

3. **Verificar Indexação**
   ```
   site:arthurportfolio.dev
   ```

### Analytics (Opcional)

Configure Google Analytics:

1. Acesse Google Analytics
2. Crie novo property
3. Copia ID
4. Adicione em `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXXXXX
   ```

### Monitoramento

- **Uptime**: Pingdom, StatusPage
- **Performance**: Vercel Analytics (automático)
- **Errors**: Sentry (opcional)
- **User Analytics**: Google Analytics

## 🔄 Maintenance

### Updates Periódicos

- [ ] Atualizar projetos a cada novo projeto completado
- [ ] Atualizar experiência/educação
- [ ] Revisar links quebrados (mensal)
- [ ] Atualizar tecnologias
- [ ] Verificar SSL renew automático

### Backup & Versioning

```bash
# Crie tags de release
git tag -a v1.0.0 -m "Initial deployment"
git push origin v1.0.0

# Mantenha histórico de versões
git log --oneline
```

## 📱 Social Media Links

Compartilhe em:
- LinkedIn
- Twitter/X
- GitHub
- Dev.to
- Medium

### Template de Post

```
Compartilho meu novo portfólio profissional! 🚀

Desenvolvido com:
✨ Next.js + React
🎨 Tailwind CSS + Framer Motion
♿ WCAG Acessibilidade
⚡ Performance otimizada
🎯 SEO completo

Confira: [link do portfólio]
```

## 🐛 Troubleshooting

### Build falha

```bash
# Limpe cache
rm -rf .next
npm run build
```

### Performance baixa

```bash
# Analise com Lighthouse
npm run build
npm start
# Abra DevTools → Lighthouse
```

### 404 no refresh

Next.js já resolve — Vercel redireciona para `_404.html`

### CORS erro

Verifique headers em `next.config.ts`:

```typescript
async headers() {
  return [{
    source: '/:path*',
    headers: [/* ... */],
  }]
}
```

## 📞 Suporte

Em caso de problemas:
- Documentação: https://nextjs.org
- Vercel Support: https://vercel.com/support
- Stack Overflow: `next.js` tag

---

**Deploy Data**: 2026-05-26
**Status**: Production Ready ✅
