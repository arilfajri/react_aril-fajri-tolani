(26) Introduction GrahpQL and Apollo Client Setup

1. Apa itu React JS & GraphQl
   Adalah sintak yang melakukan permintaan kepada database. memberikan data sesuai apa yang kita minta.

   3 fitur utama GraphQL :

   - Query, mengambil data yang spesific dari yang diquery
   - Muntation, manipulasi insert, update, delete data
   - Subscription, mengambil data terbaru yang realtime

2. Basic Query
   Bisa menentukan field apa saja yang diperlukan.

   Query - multiple
   bisa melakukan query yang data tersebut collection.
   bisa membuat query dengan menggabungkan lebih dari 1 data dalam satu query.

   Query – fragment
   Potongan logic yang bisa dipakai dibeberapa tempat sekaligus.

   Mutation
   Ada beberapa fungsi seperti update, insert, dan delete data.
   Untuk melakukan pengambilan API di GraphQL

   renturing
   menampilkan respon yang diminta, misalnya id

   Subscription
   Web soket
   sebuah konfigurasi komunikasi pada web, atau fitur chat.

3. Apollo
   Memungkinkan query dan state management libary dari js.

   Apollo
   Terbagi menjadi 2 yaitu Apollo Client dan Apollo Server

   - Apollo Client
     Digunakan pihak client untuk mengambil data dari server.
   - Apollo Server
     Digunakan untuk Back-end membuat server GraghQL.
