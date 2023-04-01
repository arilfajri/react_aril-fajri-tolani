(20) Global State Management and Data Fetching

1. Global State Introduction
   Apa itu Global State Management?
   Global State Management dibuat sebagai sarana untuk memusatkan dan mengelola data dalam aplikasi, membuatnya mudah berubah dan tersedia untuk semua komponen dalam aplikasi.

Redux
Redux adalah open-source JavaScript library untuk mengelola dan memusatkan status aplikasi.

Kapan saat yang tepat untuk menggunakan Redux
Banyak state yang perlu ditaruh di banyak tempat
State pada app sering berubah
Logic untuk mengubah state kompleks
Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Redux Libraries dan Tools
React-Redux
Redux Toolkit
Redux DevTools Extension

Komponen Penting di Redux
Actions
Digunakan untuk memberikan informasi dari aplikasi ke store

    Reducer

Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru

    Store

Objek sentral yang menyimpan state pada aplikasi

2. Redux Thunk
   Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

Kenapa perlu Redux Thunk
• Untuk menghandle side effect logic yang kompleks
• Untuk logic async seperti request data

3. Rangkuman
   Redux adalah library untuk manajemen state global
   Redux menggunakan struktur "one-way data flow"
   Redux menggunakan beberapa tipe code
