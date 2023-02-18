(5) Version Control and Branch Management (Git)

1. Versioning, versioning berarti kita melakukan sebuah pengaturan versi/pelacakan dari setiap code program kita.

Tools untuk merevisi code :
- Version Control System (VCS)
- Source Code Manager (SCM)
- Revision Control System (RCS)

2. Git adalah salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama.Cara kita berkolaborasi menggunakan git yaitu dengan remote server untuk melakukan synchronisasi dari beberapa programmer

Pada Git terbagi menjadi 3 :
- Working directory, mengupdate dengan commit, dengan menggunakan git add
- Staging area, untuk menandai file file. Dengan menggunakan git commit untuk memberikan pesan dari apa aja yang sudah dirubah.
- Repository, untuk menyimpan dari semua commit.

3. Perintah dasar Git
- git status, menampilkan perubahan.
- git add, untuk mengubah working directory ke staging area.
- git commit -m, untuk menambahkan pesan, saat melakukan commit, jangan menggunakan pesan yang tidak jelas.
- git diff untuk mengetahui perubahan apa aja yang terjadi dalam projek kita.
- git stash, untuk menyimpan sementara yang dimanakan stash area.
- git log --oneline untuk melihat commit id nya
- git pull adalah gabungan dari git fetch dan git master