# Inverfobia V1

## Tecnologías usadas y versiones

- React V. 18.2.0
- Vite V. 4.0.0
- React router dom V. 6.6.2
- TypeScript V. 4.9.3
- Axios V. 1.2.2

## Demás lenguajes o estándares usados

- CSS
- JavaScript
- HTML

## Scripts disponibles para el modo desarrollo

### `npm run dev`

Abre el proyecto en modo de desarrollo para que mientras se edita el código puedas ir viendo los cambios en tiempo real

### `npm run build`

Acciona que el proyecto genera una carpeta comprimida con el archivo el cual se puede colocar en cualquier servidor

## Variables de entorno

Uan vez se entregue el código fuente, en el archivo .env.local estarán todas las variables de entorno que usa el proyecto.

Este front va a estar apuntando a VITE_API_URL_PROD que relaciono el cual se encarga de procesar la parte del Google recaptcha y la integración con hubspot para el envío de los contactos a la base de Finamex usando los tokens y accesos secretos para este tipo de integración.

## Peso del proyecto

El proyecto tiene un peso total de 1.5MB siendo los componentes de imágen los que mayor pesos generar en el build de producción, sin embargo es un peso muy pequeño el cual se puede incorporar a cualquier servidor sin mayor novedad.

# Servidores aptos para este proyecto

Los servidores que permiten la correcta visualización del proyecto pueden ser:

- Apache
- Linux
- Windows
- Dedicado de NODE
- AWS a través de S3

Nuestra recomendación para que sea un deploy rápido, es el uso de un servidor Linux en donde pasamos a entregar el código fuente en una carpeta "dist" y una vez allí en la administración de los archivos se extare el contenido para que finalmente se vea en el dominio asociado a ese contenido que para este caso esperamos que sea [adiosinverfobia.com]

# Estructura del proyecto

El proyecto está conformado por las siguientes carpetas:

├── public
│   ├── background-hero.png
│   ├── bye.png
│   └── og.jpg
├── robots.txt
├── src
│   ├── Telemetry
│   │   └── rollbar-config.ts
│   ├── apis
│   │   └── createContact.ts
│   ├── assets
│   │   ├── fonts
│   │   │   ├── NeueWorld-ExtendedRegular.woff2
│   │   │   ├── TTFirsNeue-DemiBold.woff2
│   │   │   ├── TTFirsNeue-DemiBoldItalic.woff2
│   │   │   ├── TTFirsNeue-ExtraBoldItalic.woff2
│   │   │   ├── TTFirsNeue-ExtraLight.woff2
│   │   │   ├── TTFirsNeue-Medium.woff2
│   │   │   ├── TTFirsNeue-MediumItalic.woff2
│   │   │   ├── TTFirsNeue-Regular.woff2
│   │   │   ├── TTFirsNeue-Thin.woff2
│   │   │   ├── TTFirsNeue-ThinItalic.woff2
│   │   │   ├── cosi.woff2
│   │   │   └── neue-world.woff2
│   │   ├── icons
│   │   │   ├── Fondos.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Pesos.tsx
│   │   │   ├── Trading.tsx
│   │   │   └── index.tsx
│   │   └── images
│   │   ├── background-hero.png
│   │   ├── index.ts
│   │   ├── inverfobia-image.png
│   │   ├── logo-finamex-dark.png
│   │   └── logo-finamex.png
│   ├── components
│   │   ├── AlterText
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── CardResponse
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Cta
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Footer
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Form
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Hero
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── HeroImage
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Info
│   │   │   ├── info.tsx
│   │   │   └── styles.css
│   │   ├── Loading
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Question
│   │   │   └── index.tsx
│   │   ├── Responses
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── ScrollDown
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── component-styles.css
│   ├── containers
│   │   ├── AppRouter.tsx
│   │   └── Layout.tsx
│   ├── context
│   │   └── ScoreContext.tsx
│   ├── db
│   │   └── questions
│   │   └── questions.json
│   ├── global-styles.css
│   ├── hooks
│   │   └── useForm.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── App
│   │   │   └── index.tsx
│   │   ├── Target
│   │   │   └── index.tsx
│   │   └── Terms
│   │   ├── index.tsx
│   │   └── styles.css
│   ├── utils
│   │   ├── capitalize.ts
│   │   ├── index.tsx
│   │   ├── scrollTo.ts
│   │   ├── sumRadioValues.ts
│   │   ├── typeDevice.ts
│   │   └── validatePhone.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

## Scripts de seguimiento y control

El proyecto se entrga con la implementación de Google Analytics, Meta Pixel, Twitter Pixel y un script para conectar el pixel de un medio de difusión de pauta programática. Todo lo anterior funcionando correctamente.

## Las urls por donde ha pasado este proyecto son

Inverfobia Versión 1:
[https://inverfobia.vercel.app/]

Inverfobia Versión 2:
[https://inverfobia-v2.vercel.app/]

Url del dominio oficial:
[adiosinverfobia.com]
