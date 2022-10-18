const SHEET_ID  = '16ZuAmXEfKBsBthr62TDXuEx7OWof34HSLueIaANsl9c';
const TOKEN = 'ya29.a0Aa4xrXPpIeBmg_4F10-pT83YX0hJxGLoyv3ccKArMQwp-ZJnCwLrsshQ92UYplB25-_MZN8b2wAPtWhl-pjooVsH4kiqeZUjrtZcpR9KXOiSWTJxTEFLaf5m08m_loF22nCkCMGhg92jfC6cbhdxX5ON5GlFaCgYKATASARESFQEjDvL9gc4GFL6LIDF2LUM7qi8NPQ0163';

fetch( //peticion
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A2:Dn`,
  {
    headers:{
        "content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
    }
  }
).then( //cuando responde
    function(response){
        response.json().then(
            function(data){
                const VALUES = data.values;
                console.log(VALUES)
                const LISTA = document.getElementById("lista-menu")

                for (let i = 0; i < VALUES.length; i++){
                    const PRODUCTO = document.createElement("div");
                    PRODUCTO.className = "menu-item";

                    //productos
                    const ITEM_PRODUCTO = document.createElement("span");
                    ITEM_PRODUCTO.innerHTML = VALUES[i][0];
                    ITEM_PRODUCTO.className = "item producto";

                    //descripcion
                    const ITEM_DESCRIPCION = document.createElement("span");
                    ITEM_DESCRIPCION.className= "item descripcion";
                    ITEM_DESCRIPCION.innerHTML= VALUES[i][1];

                    //precio
                    const ITEM_PRECIO = document.createElement("span");
                    ITEM_PRECIO.className= "item precio";
                    ITEM_PRECIO.innerHTML = VALUES[i][2];

                    //tipo
                    const ITEM_TIPO = document.createElement("span");
                    ITEM_TIPO.className = "item tipo";
                    ITEM_TIPO.innerHTML = VALUES[i][3];
                
                    // se agregan los elementos al div de producto
                    PRODUCTO.appendChild(ITEM_PRODUCTO);
                    PRODUCTO.appendChild(ITEM_PRECIO);
                    PRODUCTO.appendChild(ITEM_DESCRIPCION);
                    PRODUCTO.appendChild(ITEM_TIPO);

                    //agrega el producto a la lista
                    LISTA.appendChild(PRODUCTO);
                }
            }
        );
    
    }
);