class UserModule{
     addNewUser(){
       document.getElementById('content').innerHTML=
        `<div class="w-100 d-flex justify-content-center">
            <div class="card w-50">
                <div class="card-body">
                  <h5 class="card-title w-100 text-center">Зарегистрировать пользователя</h5>
                  <p class="card-text d-flex justify-content-end">Имя пользователя: <input class="w-50 ml-3" type="text" id="firstname"></p>
                  <p class="card-text d-flex justify-content-end">Фамилия пользователя: <input class="w-50 ml-3" type="text" id="lastname"></p>
                  <p class="card-text d-flex justify-content-end">email пользователя: <input class="w-50 ml-3" type="email" id="email"></p>
                  <p class="card-text d-flex justify-content-end">Логин: <input class="w-50 ml-3" type="text" id="login"></p>
                  <p class="card-text d-flex justify-content-end">Пароль: <input class="w-50 ml-3" type="text" id="password"></p>
                  <a href="#" id="btnAddUser" class="btn btn-primary w-100">Зарегистрировать пользователя</a>
                </div>
            </div>
          </div>`;
            document.getElementById('btnAddUser').onclick=function(){
                userModule.createUser();
            }
           
            
      }
}
let userModule = new UserModule();
export{userModule};