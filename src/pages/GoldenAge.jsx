function GoldenAge() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl animate-fadeIn">
        <div className="card-body">
          {/* Judul */}
          <h2 className="card-title text-center text-2xl animate-fadeInDown mb-6 transition-transform duration-500">
            Menguasai Ilmu Dunia &amp; Agama ala Ilmuwan Muslim
          </h2>

          {/* Narasi Umum */}
          <div className="mb-6 animate-fadeInUp">
            <p className="text-lg text-justify">
              Para ilmuwan Muslim mencapai keemasan melalui disiplin, niat yang kuat, dan pembagian waktu yang teratur. Mereka mengintegrasikan ilmu dunia dan akhirat sehingga setiap pengetahuan tidak hanya menjadi ladang amal, tetapi juga sumber inovasi dan pemahaman mendalam.
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
                <h4 className="font-bold text-lg">Niat yang Kuat dan Ikhlas</h4>
                <p className="text-base text-justify">
                  Para ilmuwan Muslim memulai perjalanan ilmu mereka dengan niat yang suci, menyadari bahwa setiap pengetahuan merupakan bentuk ibadah. Dengan niat yang tulus, proses belajar tidak hanya sekadar mengumpulkan informasi, melainkan juga upaya mendekatkan diri kepada Allah. Karya-karya besar seperti yang dihasilkan Al-Khawarizmi menunjukkan bahwa ilmu yang diperoleh dapat berubah menjadi amal jariyah yang membawa berkah.
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
                <h4 className="font-bold text-lg">Jadwal Belajar Teratur</h4>
                <p className="text-base text-justify">
                  Mereka menyusun jadwal belajar yang teliti, membagi waktu antara studi agama, sains, dan kegiatan intelektual lainnya. Contohnya, Ibnu Sina menjalani hari-harinya dengan jadwal yang sangat terstruktur hingga 16 jam belajar setiap hari. Pendekatan ini memungkinkan mereka menjaga fokus dan memastikan tidak ada bidang yang terabaikan, menciptakan keseimbangan optimal antara dunia dan akhirat.
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
                <h4 className="font-bold text-lg">Gabungkan Ilmu Agama dan Sains</h4>
                <p className="text-base text-justify">
                  Alih-alih memisahkan kedua disiplin, para ilmuwan mengintegrasikan nilai-nilai keislaman dengan pengetahuan ilmiah. Mereka menggunakan prinsip-prinsip Al-Qur'an dan hadits untuk menafsirkan fenomena alam, sehingga penelitian yang dihasilkan tidak hanya praktis tetapi juga sarat makna spiritual. Pendekatan holistik ini membuktikan bahwa ilmu agama dan sains dapat berjalan beriringan untuk menghasilkan inovasi yang bermanfaat.
                </p>
              </div>
            </li>

            {/* Langkah 4 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                  4
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Menghormati Guru dan Berbagi Ilmu</h4>
                <p className="text-base text-justify">
                  Menghargai para guru adalah landasan utama dalam tradisi belajar mereka. Ilmuwan Muslim tidak hanya menyerap pengetahuan dari para guru, tetapi juga aktif menularkan apa yang telah dipelajari melalui tulisan, ceramah, dan pengajaran. Dengan berbagi ilmu, mereka memastikan pengetahuan yang didapatkan dapat diwariskan ke generasi berikutnya dan terus tumbuh seiring waktu.
                </p>
              </div>
            </li>

            {/* Langkah 5 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-600 text-white font-bold text-xl">
                  5
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Konsistensi Sampai Akhir Hayat</h4>
                <p className="text-base text-justify">
                  Konsistensi dalam belajar dan menyebarkan ilmu adalah kunci utama dari keemasan. Meski menghadapi berbagai rintangan dan tantangan zaman, para ilmuwan Muslim tetap melanjutkan pencarian ilmu hingga akhir hayat mereka. Semangat pantang menyerah ini menginspirasi kita untuk terus berupaya, karena keemasan sejati terwujud melalui dedikasi tanpa henti untuk menimba dan menyebarkan pengetahuan.
                </p>
              </div>
            </li>
          </ol>

          <div className="divider"></div>

          {/* Penutup */}
          <div className="text-center mt-4 animate-fadeInUp">
            <p className="text-lg italic text-gray-700">
              Kini saatnya kamu menerapkan semangat keemasan dalam hidupmu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoldenAge
