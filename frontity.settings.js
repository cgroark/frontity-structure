const settings = {
  "name": "frontity-proofofconcept",
  "state": {
    "frontity": {
      "url": "http://localhost:8888/",
      "title": "Plant Shop",
      "description": "What a website could look like"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:8888/wp-demo/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
