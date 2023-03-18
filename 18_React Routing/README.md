(18) React Routing

1. Routes
   Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application).
   Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.
   Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

Kelebihan :
SPA :
-Waktu loading website jauh lebih cepat
-Tidak ada query tambahan ke server
-Front-end yang cepat dan responsif
-Meningkatkan pengalaman pengguna (user experience)
MPA :
-SEO website akan lebih mudah dioptimasi
-Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
-Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website

Kekurangan :
SPA :
-Tidak bagus dalam hal SEO
-Berat saat di-load/buka pertama kali
-Kurang aman dibanding dengan website biasa
-Masalah kompatibilitas browser
MPA :
-Kecepatan download website lebih jauh lebih lama jika dibandingkan dengan single page application
-Kamu perlu mengintegrasikan antara front-end dan back-end
-Lebih sering membutuhkan maintenance dan update
-Mungkin akan lebih sering menemukan masalah performa pada website

2. URL Params
   Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

Perbedaan Link dan Redirect :
Link :
-Dapat digunakan pada kondisi apapun
-Memberikan history baru pada browser
-Bereaksi dengan click seperti a href
Redirect :
-Lebih sering digunakan pada halaman 404
-Menimpa history pada browser
-Bereaksi dengan suatu kondisi

3. Hook routing react
   useHistory memberikan kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi
   Contoh :

- length, (angka) jumlah entri dalam tumpukan riwayat
- go, (fungsi) memindahkan penunjuk di tumpukan riwayat sebanyak n entri
- goBack, (fungsi)setara dengan go(-1)
- goForward, (fungsi)setara dengan go(1)
- Push, (fungsi)mendorong entri bau ke tumpukan riwayat
- replace, (fungsi)mengganti entri saat ini di tumpukan riwayat history
