import React from 'react'
import endgame from "../../assets/img/end.jpg"
import blood from "../../assets/img/blood.jpg"
import spider from "../../assets/img/spider.jpg"

const Slider = () => {
  return (
      <>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={endgame} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
              <h1>Selamat Datang Di Website Aril Movie</h1>
              <p>
                Aril Movie adalah layanan streaming yang menawarkan berbagai acara TV
                pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di
                ribuan perangkat yang terhubung ke Internet. Kamu bisa menonton
                sepuasnya, kapan pun kamu mau semuanya dengan satu harga bulanan yang
                murah.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={blood} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
              <h1>Bloodshot</h1>
              <p>
                Berdasarkan buku komik terlaris, dibintangi Vin Diesel sebagai Ray
                Garrison, seorang prajurit yang terbunuh dalam tugasnya dan dihidupkan
                kembali sebagai pahlawan super oleh perusahaan RST. Dengan sepasukan
                nanoteknologi di nadinya, kekuatan yang lebih kuat dari sebelumnya dan
                mampu menyembuhkan luka dengan sangat cepat.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={spider} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption">
              <h1>Spider-Man: Far From Home</h1>
              <p>
                Peter Parker (Tom Holland) tengah mengunjungi Eropa untuk liburan
                panjang bersama temaan-temanya. Sayangnya , Parker tidak bisa dengan
                tenang menikmati liburannya, karena Nick Fury datang secara tiba-tiba
                di kamar hotelnya. Selama di Eropa pun Peter harus menghadapi banyak
                musuh mulai dari Hydro Man, Sandman dan Molten Man.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </>
  )
}

export default Slider
