# Entrenamientos nacionales OMM Diciembre 2022 (1° entrenamiento de la OMM 2022)

Notas de los primeros entrenamientos nacionales de la OMM que se realizo en 2022 del Grupo 2 (Estoy en ese porque saque plata)


Mi meta es quedar top 3 de las platas y/o pasar al entrenamiento presencial (3er entrenamiento)

##  Modulos  (11-Dic 1E)

### Definicion 
$a \equiv b$ mod $n$ si $n|a-b$ 

### Propiedades:
Si $a\equiv b$ mod $n$ y $c \equiv d$ mod $n$:

1. $a+c\equiv b+d$ mod $n$
2. $a-c \equiv b-d$ mod $n$
3. $ac \equiv bd$ mod $n$
4. $a^n\equiv b^n$ mod $n$
5. Se puede dividir? $\frac a c \equiv \frac b d$ mod $n$ es cierto si  $c | a, d|b$ y que $(c,n)=1 \Rightarrow (d,n)=1$.
6. En caso de que no sean primos relativos 
    $$10 \equiv 6 \text{ mod } 4$$
    Dividimos entre 2
    $$5 \equiv 3 \text{ mod } 2$$

### Cuando $a^c\equiv b^d$ mod $n$
$a^c\equiv b^d$ mod $n$ funciona si $c\equiv d$ mod $\phi (n)$

### Pequeño Teorema Fermat

**Pequeño Teorema de Fermat.** Si $p$ es primo y $a\in \mathbb{Z}$ entonces 
$$a^p \equiv a \text{ mod } p$$

Tambien generalmente conocido como 

**Pequeño Teorema de Fermat.** Si $p$ es primo y $a\in \mathbb{Z}$ y $(a,p)=1$ entonces 
$$a^{p-1} \equiv 1 \text{ mod } p$$

**Prueba por inducción.** 
Notemos que $0^p\equiv 0$ mod $p$. y $1^p\equiv 1$ mod $p$. Son nuestros casos base, ahora supongamos que para algun $a$ se tiene que 
$$a^p\equiv a \text{ mod } p$$
entonces tenemos que por el binomio de newton
$$(a+1)^p=a^p+pa^{p-1}+\binom{p}{2}a^{p-2}+\ldots+\binom{p}{p-1}a+1$$
Pero $\binom{p}{k}=\frac{p!}{k!(p-k)!}$ asi que para $1\leq k \leq p-1$ se tiene que $p | \binom{p}{k}$, porque como k<p, entonces no hay ningun factor $p$ en $k!$ y como $p-k\leq p-1<p$ entonces tampoco tiene un factor $p$ y no hay ningun factor $p$ en el denominador pero si en el numerador porque es $p!$.

Entonces $\binom{p}{k}a^{p-k}\equiv 0$ mod $p$ para $k\geq 1$ (porque es multiplo de $p$) entonces queda que 
$$(a+1)^p\equiv a^p+1 \equiv a+1 \text{ mod } p$$
probando lo que queremos mediante inducción.

**Prueba mas de números.** 

Notemos que para $a$ tal que $p|a$ si cumple porque $a^p\equiv 0 \equiv a$ mod $p$.

Para los $a$ con $(p,a)=1$. se tiene que 
$$\{a,2a,3a, \ldots, (p-1)a\}$$
es una permutación de 
$$\{1,2,3,\ldots p-1\}$$
en mod $p$. 

**Prueba:** Todos los números $a,2a,3a,\ldots, (p-1)a$ tiene distintos modulos $p$, ya que si hay dos iguales $ia$ y $ja$ con $i\neq j$ entonces 
$$ia-ja= a(i-j) \equiv 0 \text{ mod } p$$
y como $(a,p)=1$ entonces $i-j \equiv 0$ mod $p \Rightarrow i\equiv j$ mod $p$, pero $1\leq i,j \leq p-1$ entonces $i=j$, una contradicción.
Entonces si es una permutación. 

Asi que si multiplicamos todos se tiene que 

$$a\cdot 2a\cdot 3a \cdots (p-1)a \equiv 1\cdot 2 \cdots (p-1) \text{ mod } p$$
entonces
$$ \Rightarrow(p-1)!a^{p-1}\equiv (p-1)! \text{ mod } p $$
$$ \Rightarrow a^{p-1}\equiv 1 \text{ mod }p$$
Probando el teorema.

### Teorema de Euler
**Teorema de Euler:** Si $a$ es primo relativo con $n$ entonces $a^{\phi(n)}\equiv 1$ mod $n$


**Prueba parecida a la 2da de Fermat.**
Sea $a$ un entero tal que $(a,n)=1$.

Vamos a considerar el conjunto $S=\{ja: 1\leq j \leq n \text{ y } (j,n)=1\}$ y vamos a probar que es una permutación de los primos relativos a $n$.

- Los números $ja$ pertenicientes a $S$ son primos relativos a $n$, ya que es la multiplicacion de dos primos relativos a $n$, y entonces su multiplicación no comparte ningun factor con $n$.
- Hay $\phi (n)$ distintos modulos primos relativos a $n$ por definición.
- Si hay dos $1\leq j_1,j_2 \leq n$ distintos primos relativos a $n$ tal que $j_1a\equiv j_2 a$ mod $n$ entonces $(j_1-j_2)a\equiv 0$ mod $n$ entonces $n|(j_1-j_2)a$ pero como $(a,n)=1$ entonces $n|j_1-j_2$ y $j_1\equiv j_2$ mod $n$ pero como $1\leq j_1,j_2 \leq n$ entonces $j_1=j_2$ una contradicción.
- Entonces los $\phi (n)$ $j$ son distintos y entonces hay $\phi (n)$ $ja$ diferentes y son primos relativos con $n$ entonces $S$ si es una permutacion de los primos relativos con $n$ en mod $n$.

Entonces 
$$\prod_{(j,n)=1}^{n} ja \equiv \prod_{(j,n)=1}^{n} j \text{ mod } n $$
$$\Rightarrow \prod_{(j,n)=1}^{n} ja = (\prod_{(j,n)=1}^{n}j) a^{\phi (n)} \equiv \prod_{(j,n)=1}^{n} j \text{ mod } n$$
y como $\prod_{(j,n)=1}^{n} j$ es la multiplicación de primos relativos con $n$ entonces es primo relativo con $n$ y 
$$a^{\phi(n)}\equiv 1 \text{ mod } n$$


### Wilson
**Teorema de Wilson**
Si $p$ es primo entonces $(p-1)! \equiv -1$ mod $p$. 

**Prueba.** 

Sea $a$ un entero con $1\leq a \leq p-1$ y sea $b$ su inverso multiplicativo mod $p$. ($1\leq b \leq p-1$).

Tenemos que $ab\equiv 1$ mod $p$  y como es una ecuacion lineal sabemos que $ax\equiv 1$ mod $p$ tiene una solucion unica mod $p$, entonces el inverso de $a$ es $b$ y viceversa.

Entonces separamos los números del $1$ al $p-1$ en parejas de la forma $(a,b)$ donde $ab\equiv 1$ mod $p$ excepto cuando se tiene que $a=b$ es decir es el inverso de si mismo.
$$a^2\equiv 1 \text{ mod } p $$
$$(a+1)(a-1) \equiv 0 \text{ mod } p$$
$$a\equiv 1,-1 \text{ mod } p$$

Entonces todos los números del 2 al $p-2$ se emparejan y su producto es 1 mod $p$. 
Asi que 
$$(p-1)!=1\cdot(2\cdot3\cdots (p-2))\cdot (p-1)\equiv 1\cdot 1 \cdot (p-1)\equiv -1 \text{ mod } p$$
probando el teorema.

** **

### Algoritmo de Euclides

Sea $a,b \in \mathbb{N}$ entonces podemos escribir
$$a=bq+r \text{  con } 0<r<b$$
$$b=rq_1+r_1$$
