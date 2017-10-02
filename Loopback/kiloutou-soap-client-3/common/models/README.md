# Models

For create the Model we must just write this commande:
```sh
$ lb model
```
After this an interactive CLI wizard guides us asking questions.

When we create a model, Two files are added, the_model.js and the_model.json. 
- The .json file is where we define properties, fields, relationships, permissions, etc. 
- The .js file is where we gonna to create the remote methods, hooks and any related code of the model, etc.
[Create Models](https://loopback.io/doc/en/lb3/Create-a-simple-API.html)

Additionally a datasource of the model was added in the [server/model-config.json](server/model-config.json) file file

### Connect to Data Source
Connectors for Oracle, MySQL, PostgreSQL, and SQL Server provide APIs that enable you to "discover" model definition information from existing databases, including schema information such as column names and datatypes and relation information such as primary and foreign keys.
```sh
$ lb datasource
```
### Define model relations
```sh
$ lb relation
```