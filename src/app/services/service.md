# Les Services Angular : Utilisation et Exemple

## Qu'est-ce qu'un Service Angular ?

Dans Angular, un service est une classe qui permet de partager des fonctionnalités et des données entre les composants de l'application. Un service est généralement utilisé pour encapsuler des logiques métiers, des appels API, la gestion de l'état global de l'application, etc.

Les services permettent de :
- Gérer des données de manière centralisée.
- Réduire la duplication de code entre les composants.
- Faciliter la réutilisation du code.
- Interagir avec des API ou d'autres sources de données.

### Pourquoi utiliser des services ?
- **Encapsulation** : Les services permettent d'encapsuler des logiques complexes, ce qui les rend réutilisables dans plusieurs composants.
- **Injection de dépendances** : Angular utilise l'injection de dépendances (DI) pour injecter des services dans des composants ou d'autres services, ce qui facilite la gestion des dépendances et rend le code plus testable.
- **Séparation des préoccupations** : En isolant la logique métier des composants, les services favorisent une meilleure organisation du code et une architecture plus claire.

## Comment créer un Service Angular ?

1. **Générer un Service** : Utilisez la commande CLI Angular pour créer un service :
   ```bash
   ng generate service nom-du-service
   ```

**Exemple de service :**

```typescript
// nom-du-service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Fournisseur singleton (disponible dans toute l'application)
})
export class NomDuServiceService {
  constructor() { }

  getData() {
    return 'Données du service';
  }
}
```