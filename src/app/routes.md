# Récapitulatif des Routes dans Angular 19

## 1. Introduction

Dans Angular, le système de routage permet de naviguer entre les différentes vues de l'application en fonction de l'URL. Le fichier `routes.ts` est généralement utilisé pour définir et configurer les routes d'une application Angular. Ce fichier est un point central dans la gestion de la navigation et de l'affichage des composants en fonction des URL.

Angular 19 continue d'améliorer le système de routage, avec de nouvelles fonctionnalités et des optimisations.

## Structure de base d'un fichier `routes.ts`

Un fichier `routes.ts` contient une ou plusieurs définitions de routes. Chaque route mappe une URL spécifique à un composant Angular. Voici une structure de base :

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },           // Route par défaut
  { path: 'about', component: AboutComponent },     // Route pour la page "about"
  { path: '**', component: NotFoundComponent }      // Route pour les pages introuvables
];
```

## 2. Définition des routes

### 2.1. Route par défaut

La route par défaut est la première route définie dans le fichier `routes.ts`. Elle est utilisée lorsque l'utilisateur navigue à l'URL racine de l'application.

```typescript
{ path: '', component: HomeComponent },
```

### 2.2. Routes spécifiques

Les routes spécifiques sont les routes définies dans le fichier `routes.ts`. Elles sont utilisées lorsque l'utilisateur navigue à une URL spécifique.

```typescript
{ path: 'about', component: AboutComponent },
```

### 2.3. Route pour les pages introuvables

La route pour les pages introuvables est la dernière route définie dans le fichier `routes.ts`. Elle est utilisée lorsque l'utilisateur navigue à une URL qui ne correspond à aucune route définie.

```typescript
{ path: '**', component: NotFoundComponent }
```

### 2.4. Utilisation du <router-outlet> dans le HTML 

Le <router-outlet> est un élément HTML qui permet de spécifier l'emplacement où les composants associés aux routes seront insérés.
```html
app.component.html
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
```

## 3. Utilisation du router dans un composant

Pour utiliser le router dans un composant, vous pouvez injecter le service `Router` dans le composant.

```typescript
// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
``` 

## 4. Les différents types de routes

### 4.1. Route par défaut

La route par défaut est la première route définie dans le fichier `routes.ts`. Elle est utilisée lorsque l'utilisateur navigue à l'URL racine de l'application.

```typescript
{ path: '', component: HomeComponent },
```

### 4.2. Route avec paramètres

La route avec paramètres est une route qui utilise des paramètres dans l'URL.

```typescript
{ path: 'product/:id', component: ProductComponent },
```

### 4.3. Redirection

La redirection est une route qui redirige l'utilisateur à une autre URL.

```typescript
{ path: '**', redirectTo: '/home' },
```

### 4.4 Route lazy loading

Le lazy loading permet de charger les modules de manière asynchrone au moment où l'utilisateur accède à la route associée. 
Cela peut améliorer la performance de l'application en réduisant la taille du bundle initial.

``` typescript
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
```
Dans ce cas, le module AdminModule ne sera chargé que lorsque l'utilisateur naviguera vers /admin.

### 4.5 Route Guard
Les gardiens permettent de contrôler l'accès aux routes. Par exemple, 
vous pouvez empêcher un utilisateur de naviguer vers une route si une condition n'est pas remplie (authentification, permissions, etc.).

Exemple de garde canActivate: 

```typescript
canActivate.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = false;  // Remplacer par une logique d'authentification
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```
Ajoutez le garde à la route dans routes.ts :

```typescript
{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
```

## 5. Conclusion

Le système de routage dans Angular est une fonctionnalité puissante qui permet de gérer la navigation dans l'application de manière fluide et structurée. 
Angular 19 a introduit des améliorations qui facilitent l'utilisation des routes et l'optimisation des performances grâce au lazy loading et aux nouvelles options de configuration.

N'oubliez pas d'utiliser les gardiens pour sécuriser l'accès aux routes, de définir des routes dynamiques pour une meilleure expérience utilisateur, et d'explorer le lazy loading pour des applications plus performantes.


