# Récapitulatif sur le décorateur `@Input()` dans Angular

## 1. `@Input()`

Le décorateur `@Input()` permet de transmettre des données du composant parent vers un composant enfant.

### Exemple de syntaxe
```typescript
// Composant parent (parent.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child [data]="parentData"></app-child>',
})
export class ParentComponent {
  parentData = 'Bonjour, enfant !';  // Propriété à passer à l'enfant
}


// Composant enfant (child.component.ts)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ data }}</p>',
})
export class ChildComponent {
  @Input() data: string;  // Déclare une propriété 'data' comme entrée
}
```

**Explication :**
- `@Input()` est utilisé pour déclarer une propriété comme entrée.
- `data` est le nom de la propriété qui sera passée au composant enfant.
- `parentData` est la valeur de la propriété qui sera passée au composant enfant.

