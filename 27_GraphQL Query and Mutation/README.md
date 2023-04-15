(27) GraphQL Query and Mutation

1.  Query

Query with Apollo Client

- Import gql dan useQuery atau anda bisa langsung menyalin dari hasura.
- Memanggil useQuery dengan tujuan mendapatkan data awal
- Melakukan komsumsi data yang terdapat pada kode jsx, pastikan bahwa pada permintaan pertama data adalah nol sehingga perlu menggunakan rangkaian opsional untuk menghindari kesalahan.

- Query with Apollo Client - lazy query

useLazyQuery sangat cocok untuk mengeksekusi Query sebagai respons selain rendering komponen. Berbeda dengan useQuery, pemanggilan useLazyQuery, tidak akan segera mengeksekusi Query yang terkait.

- Query with Apollo Client - refetching

Refetching merupakan proses pengambilan ulang yang memungkinkan dalam menyegarkan hasil Query sebagai respons terhadap tindakan seorang pengguna. Refetching tidak menggunakan interval tetap. Cara kerjanya adalah secara opsional yaitu dengan memberikan objek variabel baru ke fungsi refetch. Jika tidak, Query akan secara otomatis menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya

2.  Mutation

- Mutation with Apollo Client

1. Import useMutation hooks dari apollo client dan definisikan.

Mutation Insert Data with Apollo Client

2. Aktifkan useMutation dan gunakan array destruction define mutation handler (insert).
3. Panggil fungsi insert dengan sebuah variabel.

Mutation Update Data with Apollo Client

- Definisikan update Query
- Buatlah mutation handler untuk mengupdate
- Panggil fungsi update Query.

Mutation Delete Data with Apollo Client

- Definisikan delete Query.
- Buatlah mutation handler untuk delete
- Panggil fungsi delete Query.
