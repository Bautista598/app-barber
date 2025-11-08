# 💈 BarberApp — Sistema Web para Barberías

**BarberApp** es una aplicación web moderna para la gestión integral de una barbería.  
Permite a administradores y clientes manejar citas, barberos y servicios desde una interfaz rápida y responsiva.

---

## 🚀 Características Principales

### 👑 Administrador

- Crear, editar y eliminar **barberos**.
- Agendar, editar y eliminar **citas** de clientes.
- Visualizar información detallada de cada cita (cliente, barbero, servicio, horario y sucursal).

### 💬 Usuario

- Crear nuevas **citas** seleccionando fecha, hora, barbero y servicio.
- Ver el historial y estado de sus **citas agendadas**.

---

## 🛠️ Tecnologías Utilizadas

### ⚡ Frontend

- **Vite + JSX + JavaScript (SWC)** — rendimiento optimizado y entorno de desarrollo ultra rápido.
- **TailwindCSS** — diseño responsivo, limpio y personalizable.
- **Axios** — para la comunicación con el backend mediante peticiones HTTP.

### 🧩 Backend

- **Express** — servidor web minimalista y eficiente.
- **Bun** — runtime moderno y rápido para JavaScript/TypeScript.
- **MongoDB + Mongoose** — base de datos NoSQL para el almacenamiento de usuarios, barberos y citas.

---

## 🧱 Estructura del Proyecto

```
barberapp/
├── src/             # Aplicación frontend (Vite)
│   ├── components/  # Componentes reutilizables (CardAppointment, Modales, etc.)
│   ├── pages/       # Páginas principales
│   ├── services/    # Configuración de Axios y API calls
│   ├── App.jsx      # Gestor de rutas del usuario/administrador
│   └── main.jsx     # Punto de entrada del cliente
│
├── server/              # API Backend (Express + Bun)
│   ├── models/          # Modelos Mongoose (User, Barber, Appointment)
│   ├── routes/          # Rutas API
│   ├── controllers/     # Lógica de negocio
│   └── server.js        # Configuración principal del servidor
│
├── index.html
└── README.md
```

---

## ⚙️ Instalación y Uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/miush-env/app-barber.git
cd app-barber
```

### 2️⃣ Instalar dependencias

**Frontend**

```bash
bun install
```

**Backend**

```bash
cd server
bun install
```

### 3️⃣ Ejecutar la app

**Cliente (Vite)**

```bash
bun run dev
```

**Servidor (Express)**

```bash
bun run start
```

La aplicación estará disponible en  
👉 `http://localhost:5173` (Frontend)  
👉 `http://localhost:3000` (Backend)

---

## 🎨 Estilo y UI

La interfaz está construida con **TailwindCSS**, priorizando una experiencia moderna, fluida y adaptada a cualquier dispositivo.  
Se utilizan iconos de **Lucide-React** y componentes modales personalizados para mejorar la interacción del usuario.

---

## 🔐 Gestión de Roles

| Rol               | Permisos                                   |
| ----------------- | ------------------------------------------ |
| **Administrador** | Gestiona barberos y citas (CRUD completo). |
| **Usuario**       | Agenda y visualiza sus propias citas.      |

---

## 🌍 API REST

El backend proporciona endpoints para manejar:

- `/api/barbers` → CRUD de barberos
- `/api/appointments` → CRUD de citas
- `/api/users` → autenticación y datos de usuarios

---

## 💡 Objetivo

Digitalizar la administración de una barbería con un sistema rápido, accesible y escalable, optimizando la gestión de citas y la comunicación entre clientes y barberos.

---

## 🧔‍♂️ Autor

**Bautista Sánchez**  
Desarrollador web full stack 💻  
📧 Contacto: [basach1582@gmamil.com]

---
