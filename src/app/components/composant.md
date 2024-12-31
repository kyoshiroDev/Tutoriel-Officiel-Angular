# Introduction aux Composants Angular

Les **composants** sont la pierre angulaire d'une application Angular. Un composant représente une vue (UI) et la logique associée, comme la gestion des événements et des données. Un composant contient généralement :

- **HTML** pour la structure de l'interface utilisateur.
- **CSS** pour la mise en forme de l'interface.
- **TypeScript** pour la logique métier.

Chaque composant Angular est une classe TypeScript qui est décorée avec le décorateur `@Component`.

## À quoi sert un composant Angular ?

Les composants Angular servent à plusieurs fins :

- **Structure l'application** : Chaque composant gère une partie spécifique de l'interface utilisateur.
- **Séparation des responsabilités** : Chaque composant est responsable de son propre comportement et de son rendu.
- **Réutilisation du code** : Les composants peuvent être réutilisés à travers l'application ou dans d'autres applications.
- **Modularité** : Ils permettent de créer des applications modulaires et évolutives.

## Structure d'un Composant Angular

Un composant Angular se compose généralement de trois éléments principaux :
1. **Classe TypeScript** : Contient la logique du composant.
2. **Template HTML** : Définit la structure de l'interface utilisateur.
3. **Styles CSS** : Gère la mise en forme du composant.

#### 1. Créer un composant

Pour créer un composant, vous pouvez utiliser Angular CLI :

```bash
ng generate component mon-composant
```

### Exemple de code

Voici un exemple simple d'un composant Angular.

1. mon-composant.component.ts : 

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {
  message: string = 'Bonjour, bienvenue dans mon composant!';

  // Méthode pour changer le message
  changerMessage(): void {
    this.message = 'Le message a été changé!';
  }
}
```

2. mon-composant.component.html : 

```html
<h1>{{ message }}</h1>
<button (click)="changerMessage()">Changer le message</button>
```

3. mon-composant.component.css : 

```css
h1 {
  color: blue;
}
```

