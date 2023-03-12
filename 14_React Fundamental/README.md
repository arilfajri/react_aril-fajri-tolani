(14) React Fundamental

1. Apa itu JSX

   Yaitu singkatan dari Javascript XML dan ekstensi pada javascript

   JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
   Separation of Technology > separation of Concerns

   Spesifikasi jenis Elemen React

   - Kapasitas untuk komponen React
   - Huruf kecil (lowercase) untuk komponen bawaan

   JSX adalah expression
   Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek Javascript.
   Menentukan atribut dengan JSX

2. Apa itu komponen

   Adalah bagian kode yang dapat digunakan Kembali yang digunakan untuk menentukan tampilan, behavior, dan state Sebagian UI
   Membagi UI menjadi beberapa component

   Komposisi komponen & props
   Apa itu props ?

   - Singkatan dari properties, membuat kita dapat memberikan argument / data pada component.
   - Props membantu untuk membuat komponen menjadi lebih dinamis
   - Props dioper ke component sama seperti memberikan atribut pada tag HTML
   - Props pada component adalah read-only dan tidak dapat diubah.
   - Props component diberikan oleh parent component ke children component.
   - Kontainmen
   - Spesialisasi

3. Method
   React Lifecycle

   1. render()

   2. componentDidMount()

   3. componentDidUpdate()

   4. componentWillUnmount()

   Render bersyarat & list

   1. Render bersyarat
      Pada react, dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi.

      - Menggunakan if
      - Inline if dengan operator &&
      - Inline if-else dengan ternary conditional operator
      - Mencegah komponen untuk rendering

   2. Render List
      Dapat membangun koneksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal {}.

      - Render komponen list

   3. Key
      Membantu React untuk mengidentifikasi item nama yang telah dibuah, ditambahkan, atau dihilangkan.

      - Indeks sebagai key
      - Menanamkan map() pada JSX

   4. Struktur Directori
      React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukan file ke folder.

      - Pengelompokan berdasarkan fitur atau rute
      - Pengelompokan berdasarkan jenis file
      - Hindari terlalu banyak nesting
      - Jangan terlalu memikirkannya

   5. Styling

      - Classes dan CSS
      - Atribut style
      - Modul CSS
