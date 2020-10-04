# Instruções

### Para começar o servidor é necessário digitar o comando abaixo no terminal instalando assim as dependências:
```
$ yarn install
```
Após esse comando é necessário solicitar as credenciais do firebase para rodar o servidor em localhost, criando a pasta credentials.js na raiz do código, como no exemplo abaixo:
```javascript
module.exports = {
	api_key:information_key,
	auth_domain:information_key,
	database_url:information_key,
	project_id:information_key,
	storage_bucket:information_key,
	sender_id:information_key,
	app_id:information_key
}
```
Para começar o servidor, basta digitar o comando abaixo no terminal:
```
$ yarn start
```
Servidor será executado em localhost8080, se o mesmo tiver ocupado irá para o 8081...

