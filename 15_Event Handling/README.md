(15) Event Handling

1. State
   Adalah data private sebuah component. Yang tersedia unutk component tersebut dan tidak bisa diakses dari component lain.

- Data yang bisa dimodifikasi menggunakan steSate
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat asynchronous
- Dipakai dalam class

Props

- Data tidak bisa diubah
- Sebagai parameter / variable
- Lebih kurang karena parameter / variable reaktif

State

- Data bisa diubah
- Bisa reaktif

2. Stateful & Stateless Component
   Stateful component adalah component yang memiliki state dibuat dengan class. Kelebihannya dari lifecycle.
   Stateless Component adalah component yang tidak memiliki state hanya prop. Component ini dibuat dengan function kerena codenya ringkas.

   Perbedaan Stateful & Stateless Component :
   Stateless Component Stateful Component
   Tidak tahu tentang aplikasi Mengerti tentang aplikasi
   Tidak melakukan data fetching Melakukan data fetching
   Tujuan utamanya adalah visualisasi Berinteraksi dengan aplikasi
   Dapat digunakan kembali Tidak dapat digunakan Kembali
   Hanya berkomunikasi dengan induk Meneruskan status dan data kea child

3. Penangan event di react
   Handling event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan ke suatu komponen.
   Event adalah suatu peristiwa pada komponen, seperti tombol ditekan.
   Component list Event

- Clipboard Event (promise terpenuhi)
- Form Event (onChange, onSubmit)
- Mouse Event (onClick, onDoubleClick, onMouseOver)
- Generic Event (onError, onLoad)
