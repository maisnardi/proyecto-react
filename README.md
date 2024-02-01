# Proyecto E-Comerse Curso React Coderhouse 2022

Este proyecto fue desarrollado en React para el curso de React de Coderhouse comisión 45060. Se trata de un e-comerse de ropa. En el que se pueden ver todos los productos a la venta.

La base de datos de los productos se encuentra alojada en [Firebase](https://firebase.google.com/?hl=es).

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477314/proyecto%20react%20coder/capturas%20de%20pantalla/index_objymf.png)

La pantalla de inicio cuenta con:
+	Logo de la marca en la esquina superior izquierda.
+	Un menú de navegación en la parte superior derecha.
+	Mensaje de bienvenida.
+	Filtro lateral por talle o por color.
+	Lista de productos en formato de grilla.
+	Footer con redes sociales de contacto.

Desde el menú de navegación se pueden acceder a todas las categorías de productos y al carrito de compras. El carrito de compras cuenta con un indicador que muestra la cantidad de productos agregados. 

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/nabvar_zng5yc.png)

Desde el filtro lateral se puede refinar la búsqueda por talle o por color y un botón para limpiar los filtros.
![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477812/proyecto%20react%20coder/capturas%20de%20pantalla/filtros_a1i0ov.png)

El filtrado es dinámico.
![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477812/proyecto%20react%20coder/capturas%20de%20pantalla/filtradodinamico_x5bxvi.png)

Haciendo clic en el botón de Ver Producto se accede al detalle del producto. Donde se puede ver una descripción del producto y agregar al carrito la cantidad a comprar. Se pueden agregar de a una o varias unidades al mismo tiempo.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477812/proyecto%20react%20coder/capturas%20de%20pantalla/detalle_wgn8lv.png)

Veremos:
+   Imagen del producto.
+   Título del producto.
+   Precio del producto.
+   Talle del producto.
+   Contador para sumar unidades al carrito.

El contador de agregar producto al carrito no permitirá agregar un numero de elementos que supere el numero de Stock de ese producto.
Luego de agregar un ítem al carrito aparecerán dos mensajes uno que avisa que el producto se agrego al carrito y otro que indica la cantidad de elementos de ese producto que ya están en el carrito.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477812/proyecto%20react%20coder/capturas%20de%20pantalla/detalle_2_fzuhjl.png)

Si el usuario vuelve a ingresar a este producto se le mostrara un mensaje en el que le indica que ese producto ya se encuentra en el carrito y la cantidad de unidades.

Continuando al carrito de compras:
![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/cart_qu42ob.png)

En pantalla se puede ver:
+	Imagen del producto.
+	Resumen del producto: Titulo, unidades y precio por unidades.
+	Botón para quitar todas las unidades de un mismo producto.
+	Total de unidades del carrito.
+	Costo total del carrito en pesos.
+	Botón para vaciar el carrito.
+	Botón para finalizar la compra y pasar al Checkout.
Si se eliminan todos los productos del carrito aparece un mensaje indicando que no hay productos y un botón para regresar al home.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/cart-vacio_ziahi9.png)

Si luego de tener el carrito cargado continuamos con la compra pasaremos al Checkout.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/checkout_ghmqwr.png)

Allí encontraremos:
+	Formulario para que el usuario complete sus datos.
+	Resumen de la compra.

Este formulario cuenta con campos obligatorios y una validación del correo electrónico. Los inputs de Teléfono y correo tienen una validación de formato. El número de teléfono ingresado se compara con una mascara que en este caso fue configurada para números de celular de buenos aires. Con las direcciones de correo electrónico se verifica que lo ingresado por el cliente cuente con un @.
El botón de finalizar compra se encuentra deshabilitado y grisado hasta que el cliente complete todos los campos del formulario. Si los correos electrónicos no coinciden el botón también queda deshabilitado.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/checkout_-completo_baradb.png)

Del lado derecho se encuentra un resumen de la compra, donde figuran los productos con sus cantidades y el costo total de la compra expresada en pesos.
Luego de hacer clic en el botón finalizar aparecerá una pantalla de carga y luego de unos segundos el cliente recibe por pantalla un mensaje de “Gracias por su compra” y un numero de orden de compra. Los datos del comprador son almacenados en Firebase. Este número de compra es el id que nos da Firebase.

![](https://res.cloudinary.com/dho3gtxbk/image/upload/v1669477811/proyecto%20react%20coder/capturas%20de%20pantalla/mensaje_final_g1hrvc.png)

De esta forma finaliza la compra.


### Librerias Utilizadas

+   [react-router-dom](https://reactrouter.com/en/main): Se utilizó para manejo de rutas dentro del proyecto.
+   [react-spinners](https://www.npmjs.com/package/react-spinners): Se utilizó para los efectos de carga del proyecto.
+   [firebase](https://firebase.google.com/?hl=es): Se utilizó para almacenar la base de datos del proyecto.
+	[Google fonts](https://fonts.google.com/about):Se utilizó para darle estilos a los textos.

### Repositorio GitHub
[GitHub - maisnardi](https://github.com/maisnardi/proyecto-react)


# Preparación para ejecutar la App localmente
## 1.Clonar repositorio
```
git clone https://github.com/maisnardi/proyecto-react
```
## 2.Instalar dependencias:
```
npm install
```

Ya esta todo listo para ejecutar la App. 

## 3.Ejecutar la app
```
npm start
``` 

Tras unos segundos se abrirá la aplicación dentro del navegador.

# Consideraciones para la carga de productos:
Campos:
+   id tipo string
+	category tipo string
+	color tipo string
+	img tipo string 
+	Price tipo number
+	size tipo string
+	stock tipo numer
+	title tipo string

Resolucion recomendada para imagenes 1024x1024px.
