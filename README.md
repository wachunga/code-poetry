# code-poetry

### install

`npm install -g code-poetry`

### usage

within a poem repository, just `recite`

poem repositories are expected to have a poem.json something like this:

```js
{
	"title": <string>, 
	"body":  <path to body of poem>, // required
	"form": <path to structure of your poem>, // set up globals
	"run": <boolean> // whether or not your poem should actually be executed
}
```

### poetry

try reciting the following:

 - [delicious](https://github.com/wachunga/delicious-poem)
