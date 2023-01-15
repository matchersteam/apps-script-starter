# Apps Script Template

Template pour les projets Google Apps Script

## :package: Installation

**1.** Cloner le repo et installer les dépendances et les [outils](TOOLS.md) avec npm.

```
git clone git@github.com:matchersteam/gestion-formations.git
cd gestion-formations
pnpm install
```

Si ça ne marche pas :
- S'assurer d'avoir une [clé ssh permettant la connexion](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) avec son compte Github
- S'assurer d'avoir node v16.17+ sinon [installer nvm](https://github.com/nvm-sh/nvm) puis installer node avec la commande `nvm use 16`
- S'assurer d'avoir installé pnpm : `corepack enable && corepack prepare pnpm@latest --activate`

**2.** Se connecter à Google Clasp et autoriser l'accès à son compte Google.

```
pnpm clasp login
```

**3.** Configurer l'environnement de développement

- Copier .clasp.example.json en .clasp.json et insérer l'id du script lié au Spreadsheet de développement sur lequel on veut pouvoir déployer
- Se placer sur la branche correspondant à la feature : git checkout xxx-feature-à-développer
- Déployer le code grâce à la commande :
```
pnpm push
```

Note : Le code sera compilé dans le dossier dist avant d'être déployé sur le script.

## Tester son code

Les tests sont effectués pas Jest

```bash
pnpm test
```

Seul le code sans dépendance avec Gas peut être testé par Jest :

- Exemple sans dépendance avec Gas

```js
const hasCpuTime = () => !(Date.now() - START_TIME > ONE_MINUTE * 4);
```

- Exemple non testable

```js
function notTestable() {
    Logger.log("notTestable"); // <-- Google Apps Script function. Not callable in dev
    SpreadsheetApp.getUi(); // <-- Google Apps Script function. Not callable in dev
    ...
}
```

Note : [jest 'expects'](https://jestjs.io/docs/expect)

### .claspignore

The `.claspignore` file allows you to specify file and directories that you do not wish to not upload to your Google Apps Script project via `clasp push`.

The default `.claspignore` file in the Apps Script Starter kit will push all the JS and HTML inside the `rootDir` folder and ignore all the other files.

## :fire: Basé sur le starter npm pour GAS par Labnol

Basé sur le [starter GAS/npm de Labnol](https://github.com/labnol/apps-script-starter), voir la [documentation originale](https://github.com/labnol/apps-script-starter/blob/master/README.md)

<img align="left" width="100" height="100" src="https://pbs.twimg.com/profile_images/1320276905271070727/zQUrdqxO_200x200.jpg">

[Amit Agarwal](https://www.labnol.org/about) is a web geek, Google Developers Expert (Google Workspace, Google Apps Script) and author of [labnol.org](https://www.labnol.org/), a popular tech how-to website.

He frequently uses [Google Apps Script](https://ctrlq.org/) to automate workflows and enhance productivity. Reach him on [Twitter](https://twitter.com/labnol) or email `amit@labnol.org`

### :cherry_blossom: Contribution

Contributions and feature requests are welcome. If you are using the Google Apps Script starter package and fixed a bug for yourself, please consider submitting a PR!

### :lock: License

[MIT License](https://github.com/labnol/apps-script-starter/blob/master/LICENSE) (c) [Amit Agarwal](https://www.labnol.org/about/)
