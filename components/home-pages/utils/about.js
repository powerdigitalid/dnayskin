import slider1 from "../../../public/dist/img/products/vita.png";
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
            <div className="col">
              <div className="hero-slider d-flex justify-content-end">
                <Image src={slider1} className="h-50 w-50" alt="#" />
              </div>
            </div>
            <div className="col">
              <div className="text-justify ">
                <h2 className="text-primary">Rumah Athan</h2>
                <p style={{ height: "210px" }}>
                  Rumah Athan Skincare and Treatment merupakan tempat perawatan untuk wajah dan badan yang sangat terpercaya. Untuk anda yang menginkan kulit cantik yang mempesona. <br/>
                  Dengan pengalaman lebih dari 8 tahun kami berusaha selalu menjaga kualitas pelayanan dan memastikan anda mendapatkan kenyamanan yang tidak akan ditemukan ditempat perawatan manapun.<br/>
                  Untuk menambah kepuasan anda kami menawarkan produk andalan D'Nayskin sebagai pelengkap perjalanan untuk kulit sehat dan terawat.  
                </p>

                <div className="tombol">
                  <div className="btn-group text-left">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
