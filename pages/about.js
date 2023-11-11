import { Navbar } from "./components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>Tentang Kami</h1>
        <p>
          Selamat datang di situs kami! Kami adalah tim yang bersemangat dan
          berdedikasi untuk menyediakan informasi dan sumber daya yang berharga.
        </p>
        <p>
          Misi kami adalah berbagi pengetahuan, menginspirasi kreativitas, dan
          membina rasa komunitas. Apakah Anda seorang pelajar, profesional, atau
          sekadar ingin tahu, Anda akan menemukan sesuatu yang menarik di sini.
        </p>
        <p>
          Selamat mengeksplorasi dan terhubung dengan kami. Kami sangat senang
          memiliki Anda dalam perjalanan ini!
        </p>
        <p>
          Saya sebagai pelajar memiliki ambisi besar untuk menjadi seorang
          pengembang. Saya percaya bahwa dengan belajar dan berkontribusi dalam
          dunia pengembangan, saya dapat mencapai impian tersebut.
        </p>
      </div>
    </>
  );
};

export default About;