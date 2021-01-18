# Taller Práctico de HTML y Javascript

Realice los siguientes ejercicios utilizando HTML y Javascript:

# Matriz identidad

Una matriz identidad es un tipo de matriz que se usa en Geometría Vectorial y Álgebra Lineal, y
que tiene como valores, 1 en su diagonal principal y 0 en el resto de sus posiciones. Por ejemplo, la
siguiente es una matriz identidad de 4x4:
<br>
                                      1 0 0 0<br>
                                      0 1 0 0<br>
                                      0 0 1 0<br>
                                      0 0 0 1<br>
<br>
Implemente una página que cuente con un formulario que permita ingresar un número (N), y que
al hacer clic en un botón, se imprima en un elemento <DIV> una matriz identidad de NxN. Use una
tabla para imprimir dicha matriz.
Tip: Es posible que sea necesario convertir los datos obtenidos mediante cajas de textos en
números, ya que estos se obtienen por defecto como strings, para esto se puede usar la función
Number(), que recibe como parámetro una string y devuelve una variable de tipo number (es
similar a una conversión de tipo en Java).
Sumas, restas…
Implemente una página con un formulario con dos cajas de texto y cuatro botones (Sumar, Restar,

# Multiplicar y Dividir

Al hacer clic en cualquiera de los botones, que se muestre el resultado de la
operación respectiva en un párrafo (elemento <P>).


# Colorear dinámicamente

Modifique la página anterior para que, una vez se realice la operación, si el resultado es menor
que cero, éste se muestre con fuente de color rojo.
Tips:
> En HTML, comúnmente se asignan los colores usando su código hexadecimal (para
obtener el código hexadecimal del rojo y otros colores, basta con buscar color hex en
Google).
> Para asignarle el color a un elemento de HTML basta con usar el siguiente código:
elemento.style.color = "#hexadecimal";
> Donde elemento es el elemento de Java al que se le desea cambiar el color. Este
elemento se puede obtener usando getElementById (como al momento de imprimir).
