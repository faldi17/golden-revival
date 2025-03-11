function Generation() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl animate-fadeIn">
        <div className="card-body">
          {/* Judul */}
          <h2 className="card-title text-center text-2xl animate-fadeInDown mb-6 transition-transform duration-500">
            Generasi Emas atau Generasi Kini?
          </h2>

          {/* Narasi Umum */}
          <div className="mb-6 animate-fadeInUp">
            <p className="text-lg text-justify">
              Banyak pihak meragukan kemampuan generasi masa kini untuk melahirkan generasi emas yang disiplin dan berilmu. Hal ini disebabkan oleh kecenderungan mereka yang sering terjebak dalam tren pacaran, joget tanpa makna, penggunaan TikTok yang berlebihan, pamer aurat, obsesi selfie, tantangan viral, serta budaya influencer semata untuk mencari popularitas. Sementara itu, generasi emas lahir dari pemuda yang mengutamakan Allah dan bertakwa kepada-Nya, langkah mereka teguh karena iman dan tidak terbuai oleh popularitas.
            </p>
          </div>

          <div className="divider"></div>

          {/* Langkah-ciri */}
          <h3 className="text-xl font-bold mb-4 text-center animate-fadeInUp">
            Ciri-ciri Generasi Emas
          </h3>
          <ol className="space-y-6">
            {/* Poin 1 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-xl">
                  1
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Fokus dan Disiplin</h4>
                <p className="text-base text-justify">
                  Generasi emas menunjukkan komitmen tinggi dengan menetapkan jadwal belajar dan berkarya yang teratur. Mereka mengelola waktu secara bijaksana dan menjaga konsentrasi, sehingga dapat terus meningkatkan kualitas diri tanpa terganggu oleh hal-hal yang tidak produktif.
                </p>
              </div>
            </li>

            {/* Poin 2 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl">
                  2
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Tanpa Pencarian Validasi Sosial</h4>
                <p className="text-base text-justify">
                  Pemuda generasi emas mengejar ilmu dengan tulus, bukan untuk mendapatkan like atau pengakuan di media sosial. Fokus mereka tertuju pada pencapaian tujuan hidup yang bermakna dan berdampak.
                </p>
              </div>
            </li>

            {/* Poin 3 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white font-bold text-xl">
                  3
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Moral yang Kuat</h4>
                <p className="text-base text-justify">
                  Etika, adab, dan integritas merupakan fondasi utama. Generasi emas menjunjung tinggi nilai-nilai keislaman, menjaga akhlak, dan menolak perilaku yang tidak bermoral. Hal ini menjadi kunci dalam menciptakan pemimpin dan inovator masa depan.
                </p>
              </div>
            </li>

            {/* Poin 4 */}
            <li className="flex items-start transition-all duration-300 animate-fadeInUp">
              <div className="flex-shrink-0">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 text-white font-bold text-xl">
                  4
                </span>
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Islam Mengajarkan Keseimbangan</h4>
                <p className="text-base text-justify">
                  Ajaran Islam menekankan keseimbangan antara ibadah dan kehidupan dunia. Pemuda yang memahami hal ini mampu mengatur waktu untuk belajar dan beribadah sekaligus menikmati hiburan, sehingga hidup mereka tetap produktif dan bermakna.
                </p>
              </div>
            </li>
          </ol>

          <div className="divider"></div>

          {/* Penutup */}
          <div className="text-center mt-4 animate-fadeInUp">
            <p className="text-lg italic text-gray-700">
              Dengan kesadaran dan semangat itu, kini saatnya kamu menentukan jalan hidupmu. Apa langkah yang akan kamu ambil?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Generation;
