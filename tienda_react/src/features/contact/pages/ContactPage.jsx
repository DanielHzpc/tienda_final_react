import { useState } from "react";

function ContactPage() {

  const [enviando,setEnviando] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true)

    const serviceID = 'default_service';
    const templateID = 'template_m8n5hps';

    emailjs.sendForm(serviceID, templateID, e.target)
      .then(() => {
        alert('Enviado!!');
        setEnviando(false)
        e.target.reset()
      }, (err) => {
        alert(JSON.stringify(err));
      });
  }

  return (
    <div className="flex flex-col items-center text-center w-full min-h-screen">
      <section className="bg-[#1B1718] text-white w-full py-20 flex-grow flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contáctanos
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-6">
          ¿Tienes alguna pregunta o necesitas ayuda? Envíanos un mensaje y te
          responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-xl p-6 bg-white rounded-lg shadow-xl text-black">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-gray-700 font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            id="button"
            className="w-full bg-red-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-300 hover:text-black transition"
          >
            {enviando ? "Enviando Mensaje..." : "Enviar"}
          </button>
        </form>
      </section>

    </div>
  );
}



export default ContactPage;