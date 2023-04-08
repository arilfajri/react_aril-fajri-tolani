(25) Authentication in React

1. Fungsinya

   Berfungsi untuk memberikan akses kepada orang yang benar. Berhubungan dengan informasi yang umum dan keamanan, dan untuk mengakses halaman secara benar untuk memberikan akses ke orang yang benar.
   Auth Work

   - User Register
     POST app/auth/singup
     return Message

   - User Login
     POST api/auth/sign
     return Jwt Response

   - Acces Resource
     Reques data with JWT on header
     return Response based om Authorities

2. Biasanya digunakan pada Login
   Digunakan untuk keamanan dari sistem, proses Ketika user mendapatkan akses ke computer sistem dengan mengidentifikasi user tersebut dengan memasukan username dan password.

3. Ada beberapa yang dibutuhkan

   cookies : tersimpan JWT (Token)
   header : informasinya
   verify signature : buat tokennya

   intersektor axios : melakukan penambahan data ketika request aplikasi.
   common : unutuk meng set ke semua state

   localStorage -> gak ada waktu kadaluarsanya
   sessionStorage -> ada waktu kadaluarsanya
