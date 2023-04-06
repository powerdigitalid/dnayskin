import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section id="about" style={{ marginTop: 12 }} className="section">
        <div className="container text-center mt-4">
          <div className="section-title text-center ">
            <h2>tentang Kami</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hero-slider">
                <Image src="/dist/img/products/vita.png" width={400} height={400} alt="#" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-justify ">
                <h2 className="text-primary">Rumah Athan</h2>
                <p>
                  Rumah Athan Skincare and Treatment merupakan tempat perawatan
                  untuk wajah dan badan yang sangat terpercaya. Untuk anda yang
                  menginkan kulit cantik yang mempesona. <br />
                  Dengan pengalaman lebih dari 8 tahun kami berusaha selalu
                  menjaga kualitas pelayanan dan memastikan anda mendapatkan
                  kenyamanan yang tidak akan ditemukan ditempat perawatan
                  manapun.
                  <br />
                  Untuk menambah kepuasan anda kami menawarkan produk andalan
                  D`Nayskin sebagai pelengkap perjalanan untuk kulit sehat dan
                  terawat.
                <div className="row">
                  <Link href="/allproduk/#allproduk" className="btn">
                    <button type="button" className="btn btn-primary">
                      Semua Produk
                    </button>
                  </Link>
                  <Link href="/alltreatment/#alltreatments" className="btn">
                    <button type="button" className="btn btn-primary">
                      Semua Treatment
                    </button>
                  </Link>
                </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
