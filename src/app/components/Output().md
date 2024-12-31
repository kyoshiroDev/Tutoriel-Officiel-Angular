# Récapitulatif sur le décorateur `@Output()` dans Angular

## 1. `@Output()`

Le décorateur `@Output()` permet au composant enfant d'émettre des événements vers le composant parent. 
Cela est généralement utilisé pour notifier le parent d'une action effectuée dans l'enfant.

### Exemple de syntaxe
```typescript
// Composant parent (parent.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child (notify)="handleNotification($event)"></app-child>',
})
export class ParentComponent {
  handleNotification(message: string) {
    console.log('Message de l\'enfant : ', message);  // Réception de l'événement
  }
}

// Composant enfant (child.component.ts)
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="notifyParent()">Cliquez-moi</button>',
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();  // Création d'un EventEmitter

  notifyParent() {
    this.notify.emit('Action de l\'enfant déclenchée !');  // Émission de l'événement
  }
}
```

**Explication :**
- `@Output()` est utilisé pour déclarer une propriété comme sortie.
- `notify` est le nom de la propriété qui sera émise par le composant enfant.
- `new EventEmitter<string>()` crée un nouvel objet `EventEmitter` qui émet des chaînes de caractères.
- `notifyParent()` est une méthode qui émet l'événement `notify` avec la valeur `'Action de l\'enfant déclenchée !'`.

