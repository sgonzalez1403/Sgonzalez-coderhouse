const contGrid = document.querySelector ('.contGrid');


try{
    fetch ('productos/elementos.json')
    .then (respuesta=>{
        return respuesta.json()
    })

    .then( datos=> {
        let contador = 0;
        while (datos.length > contador) {

            let producto = document.createElement ('div')
            let imgCont = document.createElement ('div')
            let img = document.createElement ('img')
            let contenido = document.createElement ('div')
            let titulo = document.createElement ('h2')
            let precio = document.createElement ('p')
            let addcarr = document.createElement ('button')

           producto.setAttribute ('class', '#producto')
           imgCont.setAttribute ('class', 'imgcont')
           img.setAttribute ('src', datos[contador].img)
           img.setAttribute ('alt', 'imgProducto')

           contenido.setAttribute ('class', 'contenido')

           titulo.setAttribute ('class', 'titulo')
           precio.setAttribute ('class', 'precio')

           titulo.innerHTML= datos[contador].nombre;
           titulo.innerHTML= datos[contador].precio + "$";

           addcarr.setAttribute ('class', 'btnAddCarr')
           addcarr.innerHTML='añadir al carrito'

           producto.appendChild (imgCont)
           imgCont.appendChild (img)
           producto.appendChild(contenido)
           contenido.appendChild(titulo)
           contenido.appendChild (precio)
           contenido.appendChild (addcarr)
           
           contGrid.appendChild (producto)

           contador++;

            
           
            
        }
        
    }) 

    } catch (e) {

        console.log(e);
    }