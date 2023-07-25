# Informations sur le projet 

- Template Nextjs de base
- Contient le framework CSS [TailwindCSS](https://tailwindcss.com/)
- Contient une librarie d'icone [Lucide react](https://lucide.dev/)
- Contient prettier avec un configuration de base ainsi qu'un plugin Tailwindcss pour formatter les classes Tailwindcss
- Contient également eslint avec une configuration de base
- Contient une bdd Prisma avec 2 entités de base User et Post
  - Lancer une migration après une modification des schemas :
```bash
npx prisma generate
# et ensuite
npx prisma db push
```

## Commencer

1. Cloner le projet
2. Setup l'origin du projet avec les commandes suivantes :
```bash
# Pour voir l'origin actuelle du projet
git remote -v
# Pour supprimer l'origin actuelle du projet
git remote remove origin
# Pour ajouter l'origin de votre futur projet
git remote add origin <url_de_votre_projet_git>
```
3. npm install
4. npm run dev
5. Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat
