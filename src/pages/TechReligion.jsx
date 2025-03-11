function TechReligion() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl animate-fadeIn">
        <div className="card-body">
          {/* Judul */}
          <h2 className="card-title text-center text-2xl animate-fadeInDown mb-6 transition-transform duration-500">
            Teknologi &amp; Agama: Seimbang dan Saling Menguatkan
          </h2>

          {/* Narasi Umum */}
          <div className="mb-6 animate-fadeInUp">
            <p className="text-lg text-justify">
              Kadang kita merasa khawatir bahwa dengan mendalami teknologi, aspek keagamaan bisa terlupakan. Namun, kenyataannya ilmu dunia dan ilmu agama tidak harus saling bertentangan. Dengan pengaturan waktu yang bijak dan niat yang tulus, keduanya bisa berjalan seiring untuk membawa kemajuan dan kebaikan bagi umat.
            </p>
          </div>

          <div className="divider"></div>

          {/* Langkah-langkah */}
          <h3 className="text-xl font-bold mb-4 text-center animate-fadeInUp">
            Langkah-langkah
          </h3>
          <ol className="space-y-6">
            {/* Langkah 1 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-xl">
                  1
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Niatkan Ilmu sebagai Ibadah</h4>
                <p className="text-base text-justify">
                  Mulailah dengan niat yang tulus bahwa setiap pengetahuan yang diperoleh adalah ibadah. Para ilmuwan Muslim belajar tidak hanya untuk kepentingan pribadi, tetapi juga demi kemajuan umat dan sebagai bentuk pengabdian kepada Allah. Karya Al-Khawarizmi adalah contoh nyata bagaimana ilmu dapat menjadi amal jariyah.
                </p>
              </div>
            </li>

            {/* Langkah 2 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl">
                  2
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Atur Waktu dengan Baik</h4>
                <p className="text-base text-justify">
                  Disiplin waktu adalah kunci kesuksesan. Para ilmuwan Muslim membagi jadwal antara studi agama, sains, dan karya tulis secara terstruktur—misalnya dengan teknik Pomodoro. Dengan pengaturan waktu yang tepat, setiap bidang mendapatkan perhatian optimal.
                </p>
              </div>
            </li>

            {/* Langkah 3 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white font-bold text-xl">
                  3
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Gabungkan Teknologi dengan Agama</h4>
                <p className="text-base text-justify">
                  Manfaatkan teknologi untuk mendalami dan menyebarkan ilmu agama. Kembangkan inovasi seperti aplikasi pengingat shalat atau platform kajian online yang mengedepankan nilai-nilai keislaman. Dengan begitu, teknologi dan agama dapat berjalan beriringan.
                </p>
              </div>
            </li>

            {/* Langkah 4 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 text-white font-bold text-xl">
                  4
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Ingat, Ulama Dulu Juga Ilmuwan</h4>
                <p className="text-base text-justify">
                  Sejarah mencatat banyak ulama yang juga merupakan ilmuwan terkemuka seperti Ibnu Sina, Al-Khawarizmi, dan Ibnu Khaldun. Mereka mengintegrasikan ilmu agama dengan pengetahuan dunia, membuktikan bahwa tradisi belajar yang harmonis dapat menghasilkan inovasi ilmiah.
                </p>
              </div>
            </li>
          </ol>

          <div className="divider"></div>

          {/* Penutup */}
          <div className="text-center mt-4 animate-fadeInUp">
            <p className="text-lg italic text-gray-700">
              Sekarang giliranmu memilih jalan untuk mengintegrasikan teknologi dan keimanan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechReligion;
