import React from 'react'
import about from '../../assets/img/about.jpg'

const About = () => {
  return (
    <div className='testimonial pt-5 pb-5' id='about'>
      <div className="container text-center">
        <div className="row mb-5">
          <div className="col text-center mb-5">
            <h1 className="title-text">About Us</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="gambar">
              <img src={about} alt="" className='rounded float-start' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <p className="pt-2 text-start">
                Selamat datang di website Aril Movie! Kami adalah platform online yang menyediakan informasi lengkap mengenai film-film terbaru dari berbagai genre dan negara. Kami bertekad untuk memberikan pengalaman terbaik kepada pengunjung kami dengan menyajikan konten yang akurat, terkini, dan informatif mengenai film-film yang sedang populer.
              </p>
              <p className=" text-start">
                Kami berkomitmen untuk selalu menghadirkan informasi yang terpercaya dan berguna bagi pengunjung kami. Jika Anda memiliki saran atau masukan mengenai website kami, jangan ragu untuk menghubungi kami melalui halaman kontak. Terima kasih telah mengunjungi website Aril Movie!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
