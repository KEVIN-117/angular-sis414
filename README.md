# AngularSis414Curso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use 

`ng generate directive` for generate a new directive
`ng generate pipe` for generate a new pipe
`ng generate service` for generate a new service
`ng generate class` for generate a new class
`ng generate guard` for generate a new guard
`ng generate interface` for generate a new interface
`ng generate enum` for generate a new enum
`ng generate module` for generate a new module
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Temario

## Fase 1: Fundamentos de Angular

1. Prerequisitos

   - JavaScript y ES6
   - TypeScript
   - HTML y CSS

2. Introduction a Angular
 

3. Tener configurado su entorno de desarrollo
   
   - Node.js
   - Angular CLI
   - Visual Studio Code
   - Git
   - GitHub
   - Firebase

## Fase 2 : Componentes y Arquitectura de Basica de Angular

###  Componentes

Los componentes son la unidad básica de una aplicación Angular. esta nos permite crear una aplicación modular y reutilizable, con los componentes podemos dividir la aplicación en partes más pequeñas y fáciles de mantener.

Para poder trabajar y poder explotar al maximo los componentes para que estas no se repitan y se puedan reutilizar, es necesario cononcer los siguientes conceptos:

- **Creacion de Componentes**
- **Ciclo de Vida de los Componentes**
- **Comunicación entre Componentes**

#### Crear un componente:
Para crear un componente en Angular, podemos utilizar el comando `ng generate component` o `ng g c` seguido del nombre del componente.

```bash
ng generate component nombre-componente
# o
ng g c nombre-componente
```
El comaando generara los siguientes archivos:

- `nombre-componente.component.ts`: Archivo TypeScript que contiene la lógica del componente.
- `nombre-componente.component.html`: Archivo HTML que contiene la vista del componente.
- `nombre-componente.component.css`: Archivo CSS que contiene los estilos del componente.
- `nombre-componente.component.spec.ts`: Archivo TypeScript que contiene las pruebas unitarias del componente, pero podemos omitir con `--skipTests`.

#### Ciclo de Vida de los Componentes

Los componentes en Angular tienen un ciclo de vida que se compone de varios eventos que ocurren desde la creacion hasta la destrucción del componente. Angular proporciona varios métodos que puden ser utilizados para inializar datos, escuchar cambios, limpiar recursos, etc.

Los eventos del ciclo de vida de un componente son los siguientes en el orden en que se ejecutan:

- **ngOnChanges**: Se ejecuta cuando un valor de una propiedad de entrada cambia.

```ts
ngOnChanges(changes: SimpleChanges): void {
  // código para manejar cambios
}
```

- **ngOnInit**: Se ejecuta después de que Angular haya inicializado el componente.

```ts
ngOnInit(): void {
  // código para inicializar el componente
}
```

- **ngDoCheck**: Se ejecuta durante cada detección de cambios.

```ts
ngDoCheck(): void {
  // código para detectar cambios
}
```

- **ngAfterContentInit**: Se ejecuta después de que Angular proyecte contenido en el componente.

```ts
ngAfterContentInit(): void {
  // código para inicializar contenido proyectado
}
```

- **ngAfterContentChecked**: Se ejecuta después de que Angular verifique el contenido proyectado.

```ts
ngAfterContentChecked(): void {
  // código para verificar contenido proyectado
}
```
- **ngAfterViewInit**: Se ejecuta después de que Angular inicialice las vistas del componente.

```ts
ngAfterViewInit(): void {
  // código para inicializar vistas
}
```

- **ngAfterViewChecked**: Se ejecuta después de que Angular verifique las vistas del componente.

```ts
ngAfterViewChecked(): void {
  // código para verificar vistas
}
```

- **ngOnDestroy**: Se ejecuta justo antes de que Angular destruya el componente.

```ts
ngOnDestroy(): void {
  // código para limpiar recursos
}
```
  

### Directivas y Pipes

#### Directivas

Las directivas en angular son una caracteristica fundqamental de angular ya que nos permiten manipular el DOM de manera declarativa, es decir, podemos agregar, modificar o eliminar elementos del DOM de manera dinámica.

Angular proporciona tres tipos de directivas:

- **Directivas Estructurales** 
- **Directivas de Atributo**
- **Directivas Personalizadas**

##### Directivas Estructurales

Estas directivas nos permiten renderizar elementos HTML de manera condicional o repetitiva. En verciones anteriores de angular estas directivas se utilizaban de la siguiente manera `*ngIf`, `*ngFor`, `*ngSwitch`, pero en la versión actual de angular estas directivas se utilizan de la siguiente manera:

```html
<div>
  @if (a > b) {
    <p> {{a}} is greater than {{b}} </p>
  } @else if (b > a) {
    <p> {{b}} is greater than {{a}} </p>
  } @else {
    <p> {{a}} is equal to {{b}} </p>
  }
</div>
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  }@empty {
    <li>No items found</li>
  }
</ul>

<div>
  @switch (value) {
    @case('A') {
      <p>Value is A</p>
    }
    @case('B') {
      <p>Value is B</p>
    }
    @default {
      <p>Value is neither A nor B</p>
    }
  }
</div>
```

##### Directivas de Atributo

Las directivas de atributo nos permiten modificar el comportamiento de un elemento HTML, estas directivas se utilizan de la siguiente manera:

```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Texto con clases dinámicas</div>

<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">Texto con estilos dinámicos</div>

<div [hidden]="isHidden">Este div puede ser ocultado</div>
```

#### Pipes

Los pipes en angular son una caracteristica que nos permite transformar datos antes de ser mostrados en la vista, angular proporciona varios pipes integrados que podemos utilizar para transformar datos de diferentes maneras.

Algunos de los pipes integrados de angular son los siguientes:

- **DatePipe**: formato de fecha segun las especificaciones de la localización.
- **UpperCasePipe**: convierte el texto en mayúsculas.
- **LowerCasePipe**: convierte el texto en minúsculas.
- **CurrencyPipe**: formato de moneda segun las especificaciones de la localización.
- **DecimalPipe**: formato de número decimal segun las especificaciones de la localización.
- **PercentPipe**: transforma un número en una cadena de porcentaje, formateada según las reglas locales.
- **JsonPipe**: convierte un valor en formato JSON.
- **AsyncPipe**: maneja observables y promesas de manera asincrona. Muy utilizado para suscribirse y desuscribirse a observables.

```html
<p>The hero's birthday is {{ birthday | date }}</p>
<p>The hero's birthday is {{ birthday | date:'fullDate' }}</p>
<p>The hero's birthday is {{ birthday | date:'dd/MM/yyyy' }}</p>
<p>The hero's birthday is {{ birthday | date:'dd/MM/yyyy HH:mm:ss' }}</p>
<p>The hero's birthday is {{ birthday | date:'dd/MM/yyyy HH:mm:ss Z' }}</p>
<p>The hero's birthday is {{ birthday | date:'shortTime' }}</p>
<p>The hero's birthday is {{ birthday | date:'mediumTime' }}</p>
```

Explicacion del ejemplo anterior:

- **date**: es el nombre del pipe que se utiliza para formatear la fecha, como resultado se obtiene la fecha en formato `MM/dd/yyyy`.
- **fullDate**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `EEEE, MMMM d, y` que se traduce a `Monday, June 15, 2015`.
- **dd/MM/yyyy**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `dd/MM/yyyy`. es decir `15/06/2015`.
- **dd/MM/yyyy HH:mm:ss**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `dd/MM/yyyy HH:mm:ss`. es decir `15/06/2015 15:30:00`.
- **dd/MM/yyyy HH:mm:ss Z**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `dd/MM/yyyy HH:mm:ss Z`. es decir `15/06/2015 15:30:00 +0530` seidno `Z` la zona horaria.
- **shortTime**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `h:mm a`. es decir `3:30 PM`.
- **mediumTime**: es un argumento que se pasa al pipe `date` para formatear la fecha, como resultado se obtiene la fecha en formato `h:mm:ss a`. es decir `3:30:00 PM` siendo `a` la zona horaria puede ser `AM` o `PM`.

```ts
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe],
})
export class AppComponent {
  birthday = new Date();
}
```

##### Crear un Pipe Personalizado

para crear un pipe personalizado en angular, podemos utilizar el comando `ng generate pipe` o `ng g p` seguido del nombre del pipe.

```bash
ng generate pipe nombre-pipe
# o
ng g p nombre-pipe
```

El comando generara los siguientes archivos:

- `nombre-pipe.pipe.ts`: Archivo TypeScript que contiene la lógica del pipe.
- `nombre-pipe.pipe.spec.ts`: Archivo TypeScript que contiene las pruebas unitarias del pipe, pero podemos omitir con `--skipTests`.

```ts
import { Pipe } from '@angular/core';
@Pipe({
  name: 'greet', // nombre del pipe
  standalone: true, // para que el pipe sea independiente
})
export class GreetPipe {}
```

```html
<p>{{ 'World' | greet }}</p>
```

### Servicios

Los servicios en angular son una caracteristica que nos permite encapsular la lógica de negocio de una aplicación, los servicios son clases que se pueden inyectar en los componentes, directivas, pipes, etc.

Para poder trabajar y poder explotar al maximo los servicios para que estos no se repitan y se puedan reutilizar, es necesario cononcer los siguientes conceptos:

- **Creacion de Servicios**
- **Inyección de Dependencias**
- **Comunicación entre Servicios y Componentes**

#### Crear un Servicio

Para crear un servicio en Angular, podemos utilizar el comando `ng generate service` o `ng g s` seguido del nombre del servicio.

```bash
ng generate service nombre-servicio
# o
ng g s nombre-servicio
```

El comando generara los siguientes archivos:
  - `nombre-servicio.service.ts`: Archivo TypeScript que contiene la lógica del servicio.
  - `nombre-servicio.service.spec.ts`: Archivo TypeScript que contiene las pruebas unitarias del servicio, pero podemos omitir con `--skipTests`.

#### Inyección de Dependencias

La inyección de dependencias en angular es un patrón de diseño que nos permite inyectar dependencias en una clase en lugar de crearlas dentro de la clase, esto nos permite desacoplar las clases y hacerlas más reutilizables. Hablaremos mas de ello en la siguiente sección.

#### Comunicación entre Componentes y Servicios

La comunicación entre componentes y servicios en angular es una caracteristica que nos permite intercambiar datos entre componentes y servicios, esto nos permite crear aplicaciones más dinámicas y reactivas.

### Inyección de Dependencias (DI):

La inyección de dependencias en angular es un patrón de diseño que nos permite inyectar dependencias en una clase en lugar de crearlas dentro de la clase, esto nos permite desacoplar las clases y hacerlas más reutilizables.

Y en angular es uno de los conceptos fundamentales ya que nos permite inyectar dependencias en los componentes, directivas, pipes, servicios, etc. De esta manera poder crear un contexto de ejecución y poder compartir datos entre los componentes. Generalmente el `DI` va de la mano con los servicios.

En la seccion anterior vimos como crear un servicio. Y esta por defecto ya tiene el decorador `@Injectable` que nos permite trabajar con la inyección de dependencias.

```ts
import { Injectable } from '@angular/core';
@Injectable
export class DataService {
  constructor() {}
}
```

una vez creado el servicio, podemos inyectarlo en un componente de la siguiente manera:

- **Inyectar un Servicio en la raiz de la aplicación**

Si quieres injectar un servicio en la raiz de la aplicación, puedes uitilizar la propiedad `providedIn` del decorador `@Injectable` y asignarle el valor `root`.

```ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
}
```

- **Inyectar un Servicio en un Componente**

Si quieres injectar un servicio en un componente, puedes utilizar el decorador `@Component` y asignarle el valor `providers` con el servicio que quieres injectar.

```ts
@Component({
  standalone: true,
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}
```

##### Inyectar y Consumir un Servicio

En angular podemos inyectar y consumir un servicio de la siguiente manera:


- Inyectandolo directamente en el constructor del componente.
```ts
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

- Inyectandolo como un atributo de la clase utilizando el metodo `inject`.
```ts
@Component({ … })
class HeroListComponent {
  private service = inject(HeroService);
}
```
- Hay algo muy importante que debemos tener en cuenta, es que el servico debe importarse en `app.config.ts` en la sección de `providers`.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), tuServicio],
};
```


#






