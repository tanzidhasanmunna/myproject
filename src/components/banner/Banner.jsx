import "./Banner.css";
import zoro from '../../assets/zoro.jpg'

export default function Banner() {
  return (
    <section className="banner-cotainer">
      <img src={zoro} alt="Banner Image" />
    </section>
  );
}
