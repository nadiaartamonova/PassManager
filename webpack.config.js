const path = require ('path');
module.exports={
    entry:{
        main: path.resolve(__dirname,'web/js/App.js')
    },
    output:{
        path: path.resolve(__dirname,'web/dist')
    }
}

