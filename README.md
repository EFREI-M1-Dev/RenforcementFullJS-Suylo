# JavaScript avec Express (API) & Vue JS (Front)

## Installation
Créer un fichier `.env.local` à la racine du projet reprenant le même contenu que le fichier `.env`

## Express
Run le serveur express (mode dev) :
    
```bash
npm run dev 
```

Liens utiles de l'API :
- **getAllUsers** - GET : http://localhost:3000/api/user/
- **addUser** - POST : http://localhost:3000/api/user/add-user
- **DeleteUserById** - DELETE : http://localhost:3000/api/user/delete-user/:ID
- **getUserById** - GET : http://localhost:3000/api/user/:ID

Corps de la requête POST à envoyer : 
```json
{
    "username": "nomUtilisateur"
}
```