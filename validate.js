
let validation = (function(){
    function requiredValidation(scope) {
        var currentScope = document.querySelector('[data-scope=' + scope + ']');
        var missingfields = [];
        return new Promise(function (resolve, reject) {
          //get all required input fields inside the scope
          var requiredfields = currentScope.querySelectorAll('[data-required]');
          //for each input field
          for (var i = 0; i < requiredfields.length; i++) {
            //check if values are empty
            if (requiredfields[i].value == '' || requiredfields[i].value == null) {
              missingfields.push(requiredfields[i].getAttribute('data-required'));
            }
          }
          //returns resolve when there are no missing fields
          if (missingfields.length == 0) {
            resolve(missingfields);
          }
          else {
            //pop up error when there are missing fields
            var dataissues = missingfields.join('\n');
            reject(missingfields);
          }
        });
      }
})();