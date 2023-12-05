Feature: Testando API Pokemon

Background:
  * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno de um Pokémon específico por nome (GET)
  Given url url_base
  And path 'pokemon/Entei'
  When method get
  Then status 200
  And match response.name == "entei"
  And match response.id == 244

Scenario: Testando retorno de um Pokémon inexistente por nome (Caso Negativo - GET)
  Given url url_base
  And path 'pokemon/cachorro'
  When method get
  Then status 404

Scenario: Testando retorno de informações de uma versão específica (GET)
  Given url url_base
  And path 'version/1/'
  When method get
  Then status 200
  And def idioma = $.names[5].language.url
  And url idioma 
  When method get
  Then status 200
  And match response.name == "es"
  And match response.id == 7

Scenario: Testando retorno de tipos de Pokémon (GET)
  Given url url_base
  And path 'type/1'
  When method get
  Then status 200
  And match response.name == "normal"
  And match response.pokemon.length > 0

Scenario: Testando retorno de uma habilidade específica (POST)
  Given url url_base
  And path 'ability/1'
  When method post
  Then status 405
