# Wookie ecomerce
## Tienda online en React JS


Wookie ecomerce es una tienda en linea para la marca wookie vape desarrollada con la biblioteca React JS.

## Requerimientos

Para poder correr el proyecto es necesario:
-Tener instalado Node.JS
-Un editor de codigo
-Clonar el repositorio de git hub "https://github.com/Javix33/wookieComerce"
-Ejecutar en la consola el comando "npm install"

Si los requerimientos se cumplen sera posible correr el proyecto con el comando "npm start" que creara en servidor local para la aplicacion, compilando en tiempo real el codigo.

## Capacidades
-Wookie comerce es una apliación de React que obtiene y presenta información desde el servicio "Firestore" del servicio de google "Firebase"<br>
-La aplicacion es capaz de:<br>

>-Cargar una lista productos.<br>
>-Filtrar los productos por categoria.<br>
>-Mostrar el stock de producto almacenado en Firestore.<br>
>-Agregar productos al carrito de compra siempre que el stock lo permita.<br>
>-Recabar la información del usuario.<br>
>-Guardar la orden de compra de los usuarios en una coleccion de Firestore con los datos del usuario.<br>
>-Eliminar productos del carrito o bien vaciar el carrito por completo.
>
## Componentes

Wookie ecomerce cuenta con los siguientes componentes

-Cart
>Es el componente encargado de recibir los productos almacenados en el carrito y presentarlos en una lista mediante el componente "CartItem", muestra tambien el precio unitario de los productos asi como el subtotal segun la cantidad añadida de un producto y el precio total del carrito de compra, este componente navega hacia la ruta "/check:out" que muestra el componente "OrderView".
>
-CartItem
>Es el componente encargado de dar formato a los productos que recibe del componente "cart" asi como de proporcionar la opcion de remover un producto del carrito
>
-OrderView
>Es el componente encargado de dar una vista final a los productos añadidos al carrito, recibiendo la información correspondiente del componente "Cart", asi como de presentar el componente "UserInfo" dando aun la opcion de eliminar productos de forma individual del carrito de compre, este componente entrega tambien feedback al cliente respecto al estatus de la orden una vez esta se procesa, informa si la orden se proceso correctamente mostrando la información de la orden o si ha habido un error debido al stock actualizado de los productos en Firestore
>
-UserInfo
>Es el componente encargado de recabar la información del usuario, asi como de enviar la informacion de la orden hacia firestore
>
-CartContext
>Se encarga del intercambio de información entre los componentes del carrito asi como tambien del componente "ItemDatail" para que el carrito de compra pueda Funcionar
>
-ItemDetail
>Muestra una vista detallada de un producto recibido de "ItemDetailContainer" e integra a esta el componente "ItemCount"
>
-ItemCount
>Contiene la vista del contador, asi como la logica necesaria para añadir correctamente productos al carrito respetando el stock existente
>
-ItemDetailContainer
>Obtiene la informacion de un producto y lo muestra a traves del componente "ItemDatil"
>
-Item
>Da formato a la informacion de un producto
>
-ItemList
>Crea una lista de productos a traves de "Item" con la información obtenida de "ItemListContainer"
>
-ItemListContainer
>Obtiene la informacion de los productos de Firestore, y se encarga tambien de realizar el filtrado por categoria
>
-NavBar
>Muestra las categorias existentes a traves del componente "NavLink", el componente "CarWidget" en caso de tener productos en el carrito asi como el logotipo de la marca.
>
-CarWidget
>Muestra el numero total de productos añadidos en el carrito en caso de haber alguno, de lo ccontrario este componente no se visualiza, tiene la capacidad de navegar a "/Cart" donde se muestra el componente "Cart".
>
-NavLink
>Crea los elementos de navegación por medio de la informacion recibida de "NavBar" correspondiente a las categorias existentes en Firestore, y les da la capacidad de navegar a su respectiva categoria donde "ItemDetailContainer" filtra los productos de la categoria correspondiente
>

## Correr con Firestore

Para poder correr la aplicación con el ejemplo de Wookie ecomerce es necesario obtener el archivo ".env" de "https://mega.nz/file/FokXzKzL#w6UhWhn2pOrQl_8HwhmPaJjxkLM-Lj3-qEsa5wp7jzM" y colocarlo en la raiz del proyecto.

## Requerimientos Firestore
En caso de querer usar un proyecto diferente de Firestore se requiere cambiar las claves del proyecto en el documento "Index.js", la estructura del proyecto de Firestore es muy sencilla.
### colecciones Firestore
El proyecto de Firestore cuenta con 3 colecciones de documentos:
-categories
>La coleccion categories, provee a la aplicacion de los Id de categorias para crear el NavBar a traves de el componete NavLink, por lo que el numero de documentos en esta coleccion definira la cantidad de vinculos de navegación en la aplicacion, los documentos de esta coleccion constan de un Id para identificar la categoria y una descripcion que es la que entrega el nombre que llevara el vinculo de navegación.
>
-products
>La coleccion products es donde se agrupan todos los Items(productos) que se presentan en la aplicación, estos documentos(Productos) deben contener como minimo 6 campos, cuyos nombres y tipos de valor deben ser:
-category:"string"(Es el nombre de la categoria del producto, este se utiliza en la aplicacion para llevar a cabo el filtrado por categorias)
-descripcion:"string"(una descripcion breve del producto que es requeriada en los componentes que muestran alguna vista de los productos)
-image:"string"(una url de la imagen del producto alojada en algun servidor)
-price:number(precio unitario del producto, debe ser un numero ya que se utiliza para algunas operaciones dentro del cart)
-stock:number(Existencia del producto, debe ser un numero ya que se opera sobre este junto con el precio, ademas de ser el stock muy importante para el componente "Count" )
-title:"string"(El nombre del producto)
>
-orders
>Esta coleccion contiene los registros de ordenes creadas mediante la aplicación wookiecomerce, las cuales constan de:
#### Datos del comprador"buyer"
-name: "string"(nombre del comprador)
-phone: "string"(número telefonico del comprador)
-email:"string" (correo electronico del comprador)
#### date: fecha
#### items:"array" (un array con los productos procesados por el carrito de compras)

## A considerar
Si se quiere utilizar la aplicación con otro proyecto de firebase, debe considerarse mantener la estructura de las colecciones y documentes o bien implementar el adapter necesario para ello, de mantener la misma escritura, sera necesario, modificar las claves del proyecto de firebase en el archivo "index.js", debe tomarse en cuenta que el componente "OrderView" mantiene algunas funciones de firestore necesarias para la carga de los archivos de orden, por lo que muy posiblemente no requiera modificaciónes para funcionar con otro proyecto de firebase, siempre y cuando, se modifican correctamente las claves de firestore, sin embargo dicho componente requiriria adpatarse en caso de trabajar con algun otro tipo de servicio.
