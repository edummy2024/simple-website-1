export default function About() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1572256947996-P1OBBDUDXL94R021X61I/IMG_7460_BW.jpg?format=1000w"
          alt="profile"
          width={500}
          className="max-w-full w-full"
        />
      </div>
      <div>
        <p className="leading-6">Lars Tornøe is a Norwegian design studio devoted to furniture design and related fields of product design, working with various clients in Europe and US. </p>
        <br />
        <p className="leading-6">Tornøe’s work has received several awards such as the DogA award, Red Dot Award and Designer of The Year by Bo Bedre Magazine.</p>
        <br />
        <br />
        <address>
          <h3 className="font-semibold text-lg">Address:</h3>
          <span>Kvitsøygata 10A</span><br />
          <span>4014 Stavanger</span><br />
          <span>Norway</span>
          <br />
          <br />

          <h3 className="font-semibold text-lg">Email:</h3>
          <a href="mailto:">hello (at) larstornoe.com</a>
          <br />
          <br />

          <h3 className="font-semibold text-lg">Phone:</h3>
          <a href="tel:+">+47 90 88 77 61</a>
          <br />
          <br />

          <h3 className="font-semibold text-lg">Istagram:</h3>
          <a href="tel:+">@larstornoe</a>
        </address>

      </div>
    </div>
  )
}
