## Comment faire une recherche Google dans ce script

Ce guide explique comment effectuer une recherche Google directement depuis votre script. 

**Prérequis:**

* Vous devez avoir accès à internet.
* Vous devez avoir installé une bibliothèque Python pour effectuer des requêtes web, comme `requests`.

**Instructions:**

1. **Installez la bibliothèque `requests`:**

   ```bash
   pip install requests
   ```

2. **Ajoutez le code suivant à votre script:**

   ```python
   import requests

   def google_search(query):
       """Effectue une recherche Google pour la requête donnée et retourne les résultats."""
       url = f"https://www.google.com/search?q={query}"
       response = requests.get(url)
       return response.text

   # Exemple d'utilisation
   query = "Comment faire une omelette parfaite"
   results = google_search(query)
   print(results)
   ```

3. **Explication du code:**

   * La fonction `google_search` prend une requête en argument.
   * Elle construit l'URL de la recherche Google en utilisant la requête.
   * Elle utilise la bibliothèque `requests` pour effectuer une requête GET à l'URL.
   * Elle retourne le code HTML de la page de résultats de recherche.

4. **Astuces:**

   * Vous pouvez utiliser la fonction `BeautifulSoup` pour analyser le code HTML et extraire les informations pertinentes des résultats de recherche.
   * Soyez conscient des conditions d'utilisation de Google et ne surchargez pas leur API.

**Ressources:**

* [Documentation de la bibliothèque `requests`](https://requests.readthedocs.io/en/latest/)
* [Documentation de la bibliothèque `BeautifulSoup`](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)




