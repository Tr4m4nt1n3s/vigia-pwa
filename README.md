# 👁️ Vigía — Estación de análisis de amenazas

**Comprueba antes de abrirlo, hacer clic o instalarlo.**

Vigía es una aplicación web (PWA) que analiza heurísticamente URLs, correos electrónicos, apps móviles, SMS, imágenes, códigos QR, documentos y archivos ejecutables en busca de señales de phishing y malware — **sin backend, sin registro y sin enviar tus datos a ningún sitio salvo que tú lo pidas expresamente**.

Todo el análisis ocurre en tu propio navegador. Es un único archivo HTML: no hay servidor, no hay base de datos, no hay cuenta que crear.

> Creado por [Jorge Bayán Escobar](https://jorgebayanescobar.es), con ayuda de IA.

---

## 📑 Índice

- [¿Qué es Vigía?](#-qué-es-vigía)
- [¿Por qué existe?](#-por-qué-existe)
- [Funcionalidades](#-funcionalidades)
- [Instalación como PWA](#-instalación-como-pwa)
  - [Android (Chrome)](#android-chrome)
  - [iPhone / iPad (Safari)](#iphone--ipad-safari)
  - [Windows / macOS / Linux (Chrome o Edge)](#windows--macos--linux-chrome-o-edge)
  - [Firefox](#firefox)
  - [Usar Vigía sin instalar nada](#usar-vigía-sin-instalar-nada)
- [Privacidad y seguridad](#-privacidad-y-seguridad)
- [Lo que Vigía NO puede hacer](#-lo-que-vigía-no-puede-hacer)
- [Tecnología](#-tecnología)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Preguntas frecuentes](#-preguntas-frecuentes)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## 🔍 ¿Qué es Vigía?

Vigía es una "estación de análisis" pensada para cualquier persona, sin conocimientos técnicos, que tenga dudas sobre algo sospechoso: un enlace raro por WhatsApp, un correo que parece del banco, una app que pide demasiados permisos, un SMS que promete un paquete que nunca pediste...

Pegas o subes lo que quieras analizar, y Vigía te da un veredicto claro:

```
RIESGO: ALTO (82/100)
```

con una explicación en lenguaje sencillo de por qué, y qué deberías hacer al respecto.

No sustituye a un antivirus ni a un experto en seguridad — es una primera línea de defensa, rápida y honesta, para que puedas decidir con más información antes de arriesgarte.

## 💡 ¿Por qué existe?

Vigía nació de una idea simple: la mayoría de estafas y ataques de phishing no son sofisticados, son heurísticamente detectables — un dominio que imita a un banco, un remitente falsificado, un permiso de Android que no tiene ningún sentido para una app de linterna. Cualquiera puede aprender a verlas si alguien se las señala con claridad.

Vigía se construyó siguiendo unas normas que no se negocian:

- **Local-first**: cualquier consulta que salga de tu navegador (a un servicio externo gratuito como Cloudflare, RDAP o ipapi.co) es una decisión tuya, con un botón explícito. Nunca se envía nada automáticamente.
- **Honestidad ante los límites de la plataforma**: hay cosas que una web, por diseño, no puede hacer de verdad — leer los SMS del sistema, monitorizar el tráfico de otra app, hacer un test de fugas DNS real. Cuando eso ocurre, Vigía te lo explica y te ofrece la alternativa más honesta posible. **Nunca simula un resultado que no puede garantizar.**
- **Sin dependencias frágiles**: se ha rechazado deliberadamente integrar funciones que dependerían de proxys de terceros no garantizados, porque el riesgo de darte un dato erróneo pesa más que la comodidad añadida.
- **Sin registro, sin claves de API**: todos los servicios externos que usa son gratuitos y no requieren que tú (ni Vigía en tu nombre) os registréis en ningún sitio.

## 🧩 Funcionalidades

Vigía está organizada en 8 módulos, cada uno con sus propias sub-pestañas:

| Módulo | Qué analiza |
|---|---|
| 🔗 **URLs, dominios e IPs** | Typosquatting, TLDs sospechosos, homógrafos y punycode, WHOIS/DNS/ASN reales, entropía del dominio, redirecciones de acortadores, fugas de IP por WebRTC |
| ✉️ **Correo electrónico** | Archivos `.eml` y `.msg` de Outlook, verificación criptográfica real de SPF/DKIM/DMARC, cadena de servidores `Received`, manipulación emocional, cliente de correo declarado |
| 📱 **Apps móviles** | Formulario manual, búsqueda en tiendas oficiales, análisis de `.apk`/`.ipa` (permisos, certificados, trackers, SDKs, packers), verificación de identidad del desarrollador |
| 💬 **SMS y teléfono** | Smishing, tarificación especial, spoofing del remitente, tarjetas bancarias mencionadas, enlaces ocultos, técnica del "wangiri" |
| 📁 **Archivos** | Imágenes (esteganografía, metadatos EXIF), códigos QR (subida o cámara en vivo), ejecutables y scripts, comprimidos (ZIP, RAR, 7z...), documentos ofimáticos y PDF |
| 🏠 **Dashboard** | Resumen de tu actividad y un Centro de Inteligencia que detecta patrones repetidos entre tus propios análisis |
| ❔ **Guía** | Glosario de más de 60 términos, preguntas frecuentes y explicación de los niveles de riesgo |
| 🕘 **Historial** | Registro local de tus análisis anteriores, con modo privado opcional |

Todos los módulos comparten el mismo lenguaje visual de veredicto (`RIESGO: X (N/100)`) y permiten exportar cualquier resultado a PDF.

## 📲 Instalación como PWA

Vigía es una **Progressive Web App**: no hace falta descargarla de ninguna tienda de aplicaciones. Se "instala" directamente desde el navegador y queda como un icono más en tu dispositivo, funcionando en su propia ventana, sin la barra del navegador.

### Android (Chrome)

1. Abre la URL de Vigía en Chrome.
2. Toca el menú de tres puntos (⋮) arriba a la derecha.
3. Selecciona **"Instalar aplicación"** o **"Añadir a pantalla de inicio"**.
4. Confirma tocando **"Instalar"**.

También es posible que te aparezca automáticamente un aviso en la parte inferior de la pantalla ofreciéndote instalarla; en ese caso, solo tienes que tocarlo.

### iPhone / iPad (Safari)

En iOS, la instalación **solo funciona desde Safari** (no desde Chrome ni otros navegadores, por restricción del propio sistema):

1. Abre la URL de Vigía en **Safari**.
2. Toca el icono de compartir (el cuadrado con la flecha hacia arriba), en la barra inferior.
3. Desplázate hacia abajo y selecciona **"Añadir a pantalla de inicio"**.
4. Toca **"Añadir"** arriba a la derecha.

Vigía aparecerá como un icono más en tu pantalla de inicio, con su propio icono.

### Windows / macOS / Linux (Chrome o Edge)

1. Abre la URL de Vigía en Chrome o Edge.
2. Busca el icono de instalación (un monitor con una flecha ⬇, o un símbolo "+") en la barra de direcciones, a la derecha.
3. Haz clic en él y confirma **"Instalar"**.

Alternativamente: menú de tres puntos → **"Instalar Vigía..."**. Quedará como una aplicación independiente en tu menú de inicio o dock, con icono propio y su propia ventana.

### Firefox

Firefox de escritorio no ofrece instalación nativa de PWAs. Puedes seguir usando Vigía normalmente como página web, o crear un acceso directo manual desde el menú del navegador. En Firefox para Android sí es posible instalarla desde el menú (⋮) → **"Instalar"**.

### Usar Vigía sin instalar nada

No es obligatorio instalarla. Puedes:

- Abrir directamente el archivo `index.html` con doble clic en cualquier navegador de escritorio, sin necesidad de conexión a internet para las funciones que no requieran servicios externos.
- Guardarla como marcador/favorito en tu navegador y acceder por la URL cuando la necesites.

## 🔒 Privacidad y seguridad

- **Nada sale de tu navegador salvo que tú pulses un botón para ello.** Cada llamada externa (comprobar DNS, geolocalizar una IP, consultar VirusTotal...) es una acción explícita, nunca automática.
- **Tu historial se guarda solo en tu dispositivo** (`localStorage`), nunca en un servidor de Vigía — porque no existe tal servidor. Puedes borrarlo cuando quieras desde la pestaña Historial.
- **Modo privado**: si prefieres que ni siquiera tu propio dispositivo guarde un análisis puntual, puedes activarlo desde el Historial; el resultado se seguirá mostrando en pantalla, pero no se almacenará.
- Vigía no tiene ni necesita cuenta de usuario, ni recopila datos de uso, ni usa cookies de rastreo.

## ⚠️ Lo que Vigía NO puede hacer

Ser honesto sobre los límites es parte del proyecto. Vigía **no puede**:

- Sustituir a un antivirus o a un equipo de seguridad profesional.
- Detectar malware polimórfico, ataques de día cero (*zero-day*), o payloads que solo se activan después del análisis.
- Leer los SMS del sistema operativo o monitorizar el tráfico de red de otras apps (limitación técnica de cualquier página web, no solo de Vigía).
- Garantizar al 100% que algo marcado como "seguro" lo sea realmente: reduce el riesgo, no lo elimina.

Cuando una función no es técnicamente posible desde una web, Vigía te lo explica y te dirige a la herramienta correcta (por ejemplo, un enlace a `crt.sh` para certificados, o a `dnsleaktest.com` para un test de fugas DNS completo) en lugar de simular un resultado.

## 🛠️ Tecnología

- **HTML, CSS y JavaScript puro** — sin frameworks, sin build, sin `node_modules`. Todo cabe en un único archivo.
- **Sin backend**: no hay servidor propio; todo se ejecuta en el navegador del usuario.
- Librerías externas cargadas **solo bajo demanda** desde CDN, únicamente cuando el módulo correspondiente las necesita: JSZip (comprimidos), Tesseract.js (OCR), jsPDF (exportar a PDF), jsQR (lectura de códigos QR).
- Servicios externos gratuitos y sin necesidad de clave de API, siempre bajo acción explícita del usuario: DNS-over-HTTPS de Cloudflare, RDAP, ipapi.co, binlist.net, iTunes API.

## 📂 Estructura del repositorio

```
index.html                     ← la aplicación completa (un único archivo)
manifest.json                  ← manifiesto de la PWA
favicon.ico
favicon-16.png
favicon-32.png
apple-touch-icon.png
vigia-icon-192.png
vigia-icon-512.png
```

> ⚠️ Importante: todos los archivos de icono y `manifest.json` deben estar en la **misma carpeta** que el `.html`, ya que las rutas son relativas.

## ❓ Preguntas frecuentes

**¿Necesito instalar algo o crear una cuenta?**
No. Puedes usar Vigía directamente desde el navegador, con o sin instalarla como PWA. No existe registro ni cuenta de usuario.

**¿Vigía guarda mis análisis en algún servidor?**
No. No hay servidor. Todo se queda en tu propio dispositivo, y puedes borrarlo cuando quieras.

**¿Funciona sin conexión a internet?**
Las funciones que no dependen de servicios externos (analizar un permiso, calcular un hash, leer un QR, etc.) funcionan sin conexión. Las que consultan datos externos (WHOIS, DNS, geolocalización de IP...) necesitan internet en el momento en que las actives.

Para más preguntas, consulta la propia sección **Guía → FAQ** dentro de la aplicación, con explicaciones adicionales y un glosario de más de 60 términos de seguridad.

## 📄 Licencia

Todos los derechos reservados. El código de este repositorio es público para que puedas revisarlo y entender exactamente cómo funciona cada análisis, pero no está disponible para su reutilización, copia o redistribución sin autorización expresa del autor.

## 👤 Autor

Vigía es un proyecto personal de **[Jorge Bayán Escobar](https://jorgebayanescobar.es)**, creado con ayuda de IA.

---

<p align="center">👁️ Vigía — analiza antes de confiar</p>
