import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../../services/housing.service';
import {HousingLocation} from '../../interfaces/housinglocation';
@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
// Déclare une variable `route` de type `ActivatedRoute` qui permet d'accéder aux informations de la route actuelle, telles que les paramètres de l'URL.
// L'injection de dépendance est réalisée grâce à la fonction `inject()`.
route: ActivatedRoute = inject(ActivatedRoute);

// Déclare une variable `housingService` de type `HousingService` qui fournit des méthodes pour interagir avec les données liées aux logements.
// Cette dépendance est également injectée via la fonction `inject()`.
housingService = inject(HousingService);

// Déclare une variable `housingLocation` qui peut contenir une instance de `HousingLocation` ou être `undefined`.
// Elle est utilisée pour stocker les informations sur un logement spécifique récupéré via l'ID passé dans l'URL.
housingLocation: HousingLocation | undefined;

// Le constructeur est utilisé pour initialiser l'instance du composant ou du service.
// Il est ici utilisé pour récupérer l'ID d'un logement à partir des paramètres de l'URL et récupérer les données correspondantes.
constructor() {
  // Récupère l'ID du logement à partir des paramètres de la route (paramètre `id` dans l'URL).
  const housingLocationId = Number(this.route.snapshot.params['id']);

  // Utilise le service `housingService` pour obtenir les détails du logement en fonction de l'ID récupéré.
  // Le résultat est affecté à la variable `housingLocation`.
  this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
}

}