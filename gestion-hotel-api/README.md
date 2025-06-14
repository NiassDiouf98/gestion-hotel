# Gestion d'Hôtel API

Ce projet est une API pour la gestion d'hôtels, construite avec Node.js, Express et MongoDB. Il permet de gérer les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les hôtels, ainsi que le téléchargement et la gestion des images associées.

## Structure du Projet

```
gestion-hotel-api
├── controllers
│   └── hotel.controller.js       # Contrôleur pour gérer les opérations CRUD sur les hôtels
├── models
│   └── hotel.model.js            # Modèle Mongoose pour le schéma des hôtels
├── routes
│   └── hotel.route.js            # Routes de l'API pour les hôtels
├── uploads
│   └── (dossier pour stocker les images uploadées)
├── index.js                      # Point d'entrée de l'application
├── package.json                  # Métadonnées et dépendances du projet
└── README.md                     # Documentation du projet
```

## Installation

1. Clonez le dépôt :
   ```
   git clone <URL_DU_DEPOT>
   cd gestion-hotel-api
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

3. Configurez votre base de données MongoDB dans le fichier `index.js`.

## Utilisation

1. Démarrez le serveur :
   ```
   npm start
   ```

2. L'API sera disponible à l'adresse `http://localhost:3000/api/hotels`.

## Endpoints

- `GET /api/hotels` : Récupérer la liste de tous les hôtels.
- `GET /api/hotels/:id` : Récupérer un hôtel par son ID.
- `POST /api/hotels` : Créer un nouvel hôtel.
- `PUT /api/hotels/:id` : Mettre à jour un hôtel existant.
- `DELETE /api/hotels/:id` : Supprimer un hôtel.

## Gestion des Images

Pour gérer les images des hôtels, ce projet utilise le middleware `multer`. Les images uploadées seront stockées dans le dossier `uploads`.

## Lien avec le Frontend Angular

Pour lier cette API à un frontend Angular, utilisez le service `HttpClient` d'Angular pour effectuer des requêtes HTTP vers les endpoints de l'API. Assurez-vous d'importer `HttpClientModule` dans votre module Angular.

## Auteurs

- Ibrahima Niasse Diouf - Développeur junior

## License

Ce projet est sous licence MIT.