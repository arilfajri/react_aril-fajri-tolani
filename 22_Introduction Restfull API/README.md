(22) Intoduction Restfull API

1. API (Application Programming Interface)
   Menyediakan akses ke fitur atau data dari suatu sistem atau aplikasi yang dapat digunakan oleh aplikasi lain.

   How API worked
   Client 1. Request <> Server 2. Response

   Front-end Backend
   Database <-> business logic

   Service to Server
   sepulsa <-> mitrans <-> bank

   API Tools :

   - Katalon
   - Jmeter
   - SoapUI
   - Postman
     Postman adalah http client yang digunakan untuk melakukan testing sebuah web services, dapat membantu untuk melakukan testing dengan mudah dan melakukan development dengan cepat dan simple.

---

2. REST (Representastion State Transfer)

   Ada beberapa get :

   - GET = melakukan reques hanya datanya saja
   - POST = mengirim data dari client ke server, mengirim datanya dari body/params
   - PUT = digunakan untuk melakukan update resource pada server
   - DELETE = digunakan untuk menghapus resource yang sudah ada

   untuk format pengambilan Reques & Response format :

   - JSON (javaScript Object Notation)
   - XML
   - SOAP

   Create Server API

   - Package (net/http) yang bisa digunakan untuk membuat server API.
   - Package (encoding/json)

---

3. Http Response Code

   - 500, internal server error
   - 405, method not allowed
   - 401, unauthorized
   - 200, Ok
   - 201, Created
   - 400, Bad Request
     - 404, Not Found
