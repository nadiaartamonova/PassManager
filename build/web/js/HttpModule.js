class HttpModule{
    
    status(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return Promise.resolve(response)  
        } else {  
            return Promise.reject(new Error(response.statusText))  
        }  
  }
    json(response) {  
        return response.json()  
    }
    
    parseOptions(opt){
      if(opt.method === 'POST'){
      return {
              method: opt.method,
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              credentials: 'include',
              body: JSON.stringify(opt.data)
            };
    }else{
      return {
              method: opt.method,
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              credentials: 'include'
            };
    } 
}
    
    //POST запрос формат: httpModule.http({url:'createUser',options:{method:'POST',data:user}})
    //GET запрос формае: httpModule.http({url:'listUsers',options:{method:'GET'}})
    
    http(httpOptions){
        let options = httpModule.parseOptions(httpOptions.options);
         return fetch(httpOptions.url, options)
              .then(httpModule.status)
              .then(httpModule.json)
              .catch((ex) => console.log("Fetch Exception", ex));
    }
}
let httpModule = new HttpModule();
export{httpModule};