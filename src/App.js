import "./App.css";
import logo from "./cat.png";

function App() {
  const date = new Date();

  console.log(date);
  console.log(new Date("2023-12-23 12:00:00"));

  if (date < new Date("2023-12-23 12:00:00")) {
    return (
      <div className="waitlist">
        <h1>Prašome sugrįžti 12:00</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="header">
        GRAFO TUTO IR LEDI PUPOS
        <br />
        NAUJŲ METŲ BALIUS
      </h1>
      <img className="cat-image" src={logo} alt="" />
      <div className="content">
        <div>
          <p className="desc">
            Gruodžio 31d. 19:00 Grafas Tutas ir Ledi Pupa visus kviečia
            pasislėpti po lova fejerverkų apsupty ir pasidžiaugti dar viena
            neįvykusia pasaulio pabaiga!
          </p>
        </div>
        <div className="separate" />
        <div className="party">
          <h3>🌟Vakarėlio tema🌟</h3>
          <h1>NAUJAMETINIS TĖVŲ BALIUS</h1>
          <div className="party-details">
            <h3>Pasiruošimas vakarėliui:</h3>
            <ol>
              <li>
                Rasti seną nuotrauką, kurioje jūsų tėvai baliavotų, geriausia
                naujų metų proga,
              </li>
              <li>
                Pasistengti kuo tiksliau atkartoti mamos, tėčio ar linksmojo
                dėdės aprangą bei šukuoseną,
              </li>
              <li>Atsinešti bent vieną užkandį iš savo nuotraukos.</li>
            </ol>
            <div className="card">
              <h4>🚨SVARBU🚨</h4>
              <p>Būtina turėti nuotrauką įrodančią jūsų įkvėpimo šaltinį.</p>
            </div>

            <div className="card">
              <h4>🚨🚨🚨SVARBIAU🚨🚨🚨</h4>
              <p>
                Balta mišrainė rezervuojama pirmam "Kalėdos Vileišy" chat'e
                parašiusiam
              </p>
              <h3 className="important">BALTA MIŠRAINĖ</h3>
              <p>(balta mišrainė privalo būti nuotraukoje)</p>
            </div>

            <p>
              Jei nuotraukos neturite, prašome naudoti AI nuotraukų generatorių.
            </p>
          </div>
          <div className="separate" />
          <div>
            <h3>🎲Vakaro žaidimas🎲</h3>
            <h1>PREZENTACIJŲ RINGAS</h1>
            <p className="center">Daugiau informacijos bus paskelbta vėliau.</p>
          </div>
          <div className="separate" />
          <div>
            <p>
              Lauksime jūsų{" "}
              <a
                className="link"
                href="https://maps.app.goo.gl/GnKLVT1LCmEYhbRD8"
              >
                {/* <b>Ateities g. 1G-19</b> */}
                <b>Ateities g. 1G-19</b>
              </a>
              , parkingas už namo pravažiavus pro Alyną ir soliarumą. Nakvynės
              skaičius ribotas. Už aštrius kačiukų nagus neatsakome.
            </p>
            <iframe
              className="iframe"
              title="adresas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.2687074151804!2d25.270522477903818!3d54.74007707272626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9122f2e5f07b%3A0x9a05de57be9297b7!2sAteities%20g.%201G%2C%2008311%20Vilnius!5e0!3m2!1sen!2slt!4v1703285000901!5m2!1sen!2slt"
              // width="600"
              // height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="separate" />
          <div className="footer">
            <div className="footer-info">
              <p>Renginio organizatoriai:</p>
              <p>
                <b>Tutas ir Pupa 🙀😻</b>
              </p>
            </div>
            <div className="footer-info">
              <p>Renginio remėjai:</p>
              <p>
                <b>Tuto ir Pupos vergai 👫</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
