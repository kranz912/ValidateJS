class Validate {
    constructor(scope){
        this.scope= scope;
    }
    get Validate(){
      document.querySelector('[data-scope='+scope+']')  
    }
}