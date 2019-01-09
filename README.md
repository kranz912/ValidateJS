# Getting Started

`Automating frontend validations

## Usage

```html
   <div data-scope='laytime'>
        <input data-required='No date has been selected'>
    </div>
```

```js
    requiredValidation('laytime')
      .then(function(response){
      //todo when valid
       } ,function(err){
      todo when invalid
    });
```
