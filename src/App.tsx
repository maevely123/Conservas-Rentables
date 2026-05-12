import { useState, useEffect } from 'react';
import { 
  Check, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  Utensils, 
  Calculator, 
  TrendingUp, 
  Tag, 
  Truck, 
  Smartphone, 
  Lock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Home,
  HelpCircle,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Shared Components --- //

const carouselImages = [
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/download_3_q6s0d3.jpg", alt: "Recetas preparadas" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942119/picles_uw8gas.jpg", alt: "Picles artesanal" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/Knackiger_Radieschen-Gurken-Snack_im_Glas_oiefc8.jpg", alt: "Snack de rábano y pepino en pote" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/download_1_trwxsw.jpg", alt: "Variedad de conservas" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/Aprenda_preparar_salada_no_pote_de_vidro__Pr%C3%A1tica_gostosa_e_saud%C3%A1vel_cuhoax.jpg", alt: "Ensalada en pote de vidrio" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/Hydrating_Pineapple_Cucumber_Salad_Recipe_for_a_Slimmer_Summer_xhbdod.jpg", alt: "Ensalada hidratante" },
  { src: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777942118/download_4_v473si.jpg", alt: "Más recetas de conservas" }
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] mx-auto px-6 sm:px-14">
      <div className="overflow-hidden rounded-2xl shadow-md border border-olive-100 relative aspect-[4/5] bg-cream-50">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={goToPrev}
        className="absolute top-1/2 -left-2 sm:left-2 md:left-4 -translate-y-1/2 bg-white hover:bg-olive-50 text-olive-900 p-2 sm:p-3 rounded-full shadow-lg border border-olive-200 transition-all focus:outline-none focus:ring-2 focus:ring-olive-500 z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 -right-2 sm:right-2 md:right-4 -translate-y-1/2 bg-white hover:bg-olive-50 text-olive-900 p-2 sm:p-3 rounded-full shadow-lg border border-olive-200 transition-all focus:outline-none focus:ring-2 focus:ring-olive-500 z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 focus:ring-offset-white ${
              index === currentIndex ? 'bg-olive-600 w-8' : 'bg-olive-300 w-2.5 hover:bg-olive-400'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const CTAButton = ({ text = "QUIERO ACCEDER AHORA" }) => (
  <div className="flex flex-col items-center w-full">
    <a 
      href="#pricing"
      className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-cta-500 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-cta-500/30 transition-all hover:-translate-y-1 hover:bg-cta-600 hover:shadow-2xl hover:shadow-cta-500/40 active:translate-y-0"
    >
      {text}
      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black shadow-sm group-hover:animate-bounce">
        ✓
      </span>
    </a>
    <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-olive-600/70">
      <Lock className="h-3.5 w-3.5" />
      Compra 100% segura • Acceso inmediato
    </p>
  </div>
);

// --- Sections --- //

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-olive-200 selection:text-olive-900">
      
      {/* 🔴 1. HEADLINE (HERO) */}
      <section className="relative overflow-hidden bg-cream-50 pt-8 pb-20 lg:pt-12 lg:pb-28">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-olive-200 to-cream-100 opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:pt-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 lg:mt-0"
            >
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-olive-900 sm:text-6xl md:leading-tight">
                Convierte conservas caseras en un <span className="text-olive-600 relative inline-block">ingreso extra<svg className="absolute -bottom-2 w-full h-3 text-olive-300" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-olive-700 font-medium">
                Obtén acceso a <strong className="font-extrabold text-olive-900 bg-yellow-100/80 px-1.5 py-0.5 rounded-md">+100 recetas artesanales</strong> listas para hacer, vender y generar ingresos.
              </p>
              <img 
                src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1777856337/Gemini_Generated_Image_og9ha8og9ha8og9h_h8c8lx.png" 
                alt="Conservas caseras"
                className="relative left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] max-w-[calc(100%+2rem)] sm:w-full sm:max-w-lg sm:static sm:translate-x-0 sm:mx-auto mt-8 mb-10 object-contain rounded-xl border border-olive-200/60 shadow-md" 
              />
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <CTAButton />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🟡 2. SECCIÓN DE CONEXIÓN */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center rounded-full bg-olive-200/50 p-4 mb-4">
              <Home className="h-8 w-8 text-olive-700" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-olive-900 leading-snug">
              ¿Alguna vez has pensado en ganar dinero con algo simple, hecho en tu propia casa?
            </h2>
            <p className="text-lg leading-8 text-olive-700">
              Muchas personas quieren un ingreso extra, pero no saben por dónde empezar… o creen que necesitan invertir mucho.
            </p>
            <p className="text-xl leading-8 text-olive-800 font-medium bg-white/60 p-6 rounded-2xl shadow-sm border border-olive-100">
              La verdad es que los productos artesanales —como las conservas— tienen alta demanda, bajo costo y llaman la atención fácilmente cuando están bien hechos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🟢 3. PRESENTACIÓN DE LA SOLUCIÓN */}
      <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-olive-600 tracking-wide uppercase">Pensando en eso, creé el:</p>
            <h2 className="mt-2 text-4xl font-serif font-black tracking-tight text-olive-900 sm:text-5xl">
              <span className="inline-block transform -rotate-2 bg-olive-100 px-4 py-1 rounded-lg border-2 border-olive-200 shadow-sm mt-2">
                🥒 Método Conserva Rentable
              </span>
            </h2>
            <p className="mt-8 text-lg leading-8 text-olive-600">
              Un material completo que te enseña desde lo básico hasta cómo convertir tus conservas en una fuente de ingresos.
            </p>
            <img 
              src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1777856336/Gemini_Generated_Image_eqfgmceqfgmceqfg_ekaove.png" 
              alt="Método Conserva Rentable"
              className="relative left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] max-w-[calc(100%+2rem)] sm:w-full sm:max-w-xl sm:static sm:translate-x-0 sm:mx-auto mt-12 object-contain rounded-xl border border-olive-200/60 shadow-md" 
            />
          </div>
        </div>
      </section>

      {/* 📦 4. QUÉ RECIBES (STACK DE VALOR) */}
      <section className="bg-olive-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-olive-900">Al ingresar, recibes:</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
            
            <div className="flex gap-x-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-olive-200/50 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-100">
                <BookOpen className="h-6 w-6 text-olive-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-olive-900">Guía Completa de Conservas Caseras</h3>
                <p className="mt-1 text-base leading-6 text-olive-600">El paso a paso exacto para dominar la base de cualquier conserva.</p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-olive-200/50 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-100">
                <Utensils className="h-6 w-6 text-olive-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-olive-900">+100 Recetas Artesanales probadas</h3>
                <p className="mt-1 text-base leading-6 text-olive-600">Desde las más clásicas hasta combinaciones lucrativas.</p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-olive-200/50 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-100">
                <Calculator className="h-6 w-6 text-olive-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-olive-900">Hoja de Costos y Precios</h3>
                <p className="mt-1 text-base leading-6 text-olive-600">Para que nunca pierdas dinero y sepas exactamente cuánto cobrar.</p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-olive-200/50 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-100">
                <TrendingUp className="h-6 w-6 text-olive-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-olive-900">Estrategias simples para empezar a vender</h3>
                <p className="mt-1 text-base leading-6 text-olive-600">Técnicas probadas para conseguir a tus primeros clientes rápidamente.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📸 4.5. GALERÍA DE RECETAS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-serif font-black tracking-tight text-olive-900 sm:text-4xl">Mira un poco de lo que vas a aprender a preparar:</h2>
            <p className="mt-4 text-lg text-olive-600 font-medium max-w-2xl mx-auto">Recetas que además de deliciosas, llaman mucho la atención y son un éxito de ventas.</p>
          </div>
          
          <ImageCarousel />
        </div>
      </section>

      {/* 🎁 5. BONOS */}
      <section className="bg-olive-900 py-24 sm:py-32 relative text-center lg:text-left">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596792376997-6a1682701e74?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <span className="inline-flex items-center gap-2 rounded-full bg-cta-500/10 px-4 py-2 text-sm font-black text-cta-500 ring-1 ring-cta-500/20 mb-6">
                🎁 BONOS GRATIS
              </span>
              <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
                Además, también recibes bonos exclusivos:
              </h2>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1769132164/4_srzleu.png", icon: Tag, title: "+60 Recetas en Frasco Goumert Rentable", desc: "" },
                { icon: Truck, title: "Lista de Proveedores Económicos", desc: "Encuentra insumos al mejor precio." },
                { icon: Smartphone, title: "Guía rápida para vender", desc: "Por WhatsApp e Instagram." }
              ].map((bono, i) => (
                <div key={i} className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center lg:items-start text-center lg:text-left overflow-hidden ${bono.image ? 'p-0 pb-6' : 'p-6'}`}>
                  {bono.image ? (
                    <img src={bono.image} alt={bono.title} className="w-full h-auto object-cover mb-4" />
                  ) : (
                    <bono.icon className="h-8 w-8 text-yellow-400 mb-4" />
                  )}
                  <div className={bono.image ? "px-6 w-full flex flex-col items-center lg:items-start" : "w-full flex flex-col items-center lg:items-start"}>
                    <h3 className="text-lg font-bold text-white leading-tight mb-2">{bono.title}</h3>
                    {bono.desc && <p className="text-sm text-olive-200">{bono.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 6. BENEFICIOS */}
      <section className="bg-cream-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-olive-600 uppercase tracking-wide">La Transformación</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-olive-900 sm:text-4xl">Con este material, vas a poder:</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              
              <div className="relative pl-16">
                <dt className="text-lg font-bold leading-7 text-olive-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-olive-200">
                    <Check className="h-6 w-6 text-olive-700" />
                  </div>
                  Producir conservas atractivas
                </dt>
                <dd className="mt-2 text-base leading-7 text-olive-600">y con apariencia profesional que la gente quiera comprar solo con verlas.</dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-lg font-bold leading-7 text-olive-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-olive-200">
                    <Check className="h-6 w-6 text-olive-700" />
                  </div>
                  Ahorrar y calcular
                </dt>
                <dd className="mt-2 text-base leading-7 text-olive-600">el precio correcto para tener un margen de ganancia real y seguro.</dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-lg font-bold leading-7 text-olive-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-olive-200">
                    <Check className="h-6 w-6 text-olive-700" />
                  </div>
                  Evitar errores comunes
                </dt>
                <dd className="mt-2 text-base leading-7 text-olive-600">de principiantes que echan a perder ingredientes y tiempo.</dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-lg font-bold leading-7 text-olive-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-olive-200">
                    <Check className="h-6 w-6 text-olive-700" />
                  </div>
                  Empezar a vender
                </dt>
                <dd className="mt-2 text-base leading-7 text-olive-600">incluso sin ninguna experiencia previa en ventas o cocina profesional.</dd>
              </div>

            </dl>
          </div>
          <div className="mt-16 flex justify-center">
            <CTAButton text="QUIERO ESTOS RESULTADOS AHORA" />
          </div>
        </div>
      </section>

      {/* 🛡️ 7. GARANTÍA */}
      <section className="bg-olive-100 py-24 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ShieldCheck className="mx-auto h-20 w-20 text-olive-600 mb-6" />
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-olive-900 sm:text-4xl">
            Garantía Riesgo Cero Total
          </h2>
          <p className="mt-4 text-xl text-olive-800 font-medium">
            No corres ningún riesgo.
          </p>
          <div className="mt-8 bg-white/60 p-8 rounded-3xl text-left shadow-sm border border-olive-200/50">
            <ul className="space-y-4 text-lg text-olive-800">
              <li className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-olive-600 shrink-0" />
                📲 Recibes el material primero en WhatsApp
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-6 w-6 text-olive-600 shrink-0" />
                💬 Lo revisas con calma
              </li>
              <li className="flex items-center gap-3 font-bold text-olive-900">
                <ShieldCheck className="h-6 w-6 text-cta-500 shrink-0" />
                💰 Y solo después decides si quieres pagar
              </li>
            </ul>
          </div>
          <p className="mt-8 text-lg font-medium text-olive-700">
            Si no te gusta, no pagas absolutamente nada.
          </p>
        </div>
      </section>

      {/* ⏳ 8. URGENCIA */}
      <section className="bg-[#fff3cd] border-y-2 border-[#ffeeba] py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <AlertTriangle className="h-10 w-10 text-[#856404] shrink-0 animate-pulse" />
          <div>
            <h3 className="text-lg font-bold text-[#856404]">⚠️ Atención: El acceso con todos los bonos está disponible por tiempo limitado</h3>
            <p className="text-sm text-[#856404]/80 mt-1">Y la atención por WhatsApp tiene cupos limitados por día. Después de eso, el acceso puede pausarse o los bonos ser retirados.</p>
          </div>
        </div>
      </section>

      {/* 💳 9. PRECIO + CTA */}
      <section id="pricing" className="bg-cream-50 py-24 sm:py-32 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-white shadow-2xl shadow-olive-900/10 ring-1 ring-olive-200 overflow-hidden"
          >
            <div className="bg-olive-800 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">🥒 Acceso completo al Método Conserva Rentable</h3>
            </div>
            
            <div className="p-8 sm:p-12">
              <div className="text-center mb-10">
                <p className="text-lg text-olive-400 font-medium line-through decoration-cta-500">De: $37,90</p>
                <div className="mt-2 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-black tracking-tight text-olive-900">👉 Por solo $ 7,00</span>
                </div>
                <p className="mt-3 text-xs font-semibold text-olive-500 px-4">
                  * El valor será convertido a la moneda de tu país en la página de pago.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-10">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-olive-500 shrink-0" /><span className="text-olive-700">Guía Completa de Conservas</span></li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-olive-500 shrink-0" /><span className="text-olive-700">+100 Recetas Artesanales</span></li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-olive-500 shrink-0" /><span className="text-olive-700">Hoja de Costos y Precios</span></li>
                  <li className="flex items-center gap-3"><Check className="h-5 w-5 text-olive-500 shrink-0" /><span className="text-olive-700">Estrategias simples para vender</span></li>
                </ul>
                <ul className="space-y-4 border-t sm:border-t-0 sm:border-l border-olive-100 pt-6 sm:pt-0 sm:pl-12">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🎁</span>
                    <span className="font-bold text-cta-600">+ Bonos exclusivos incluidos</span>
                  </li>
                  <li className="flex items-start gap-3 mt-6">
                    <ShieldCheck className="h-6 w-6 text-olive-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-olive-900 block">Garantía Riesgo Cero Total</span>
                      <span className="text-sm text-olive-600">Tienes acceso inmediato y puedes probar. Si no te gusta, puedes solicitar reembolso.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm font-bold text-cta-600 mb-4 animate-pulse">⏳ Oferta por tiempo limitado - Los bonos pueden retirarse en cualquier momento</p>
                <CTAButton />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 📸 10. PRUEBA SOCIAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <h2 className="text-center text-3xl font-bold tracking-tight text-olive-900 sm:text-4xl mb-12">
              Quienes ya empezaron están viendo resultados
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fake WhatsApp Testimonial 1 */}
              <div className="bg-cream-50 p-6 rounded-2xl shadow-sm border border-olive-100 relative">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-olive-200 rounded-full flex items-center justify-center font-bold text-olive-700">M</div>
                   <div>
                     <p className="font-bold text-sm text-olive-900">María G.</p>
                     <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                   </div>
                </div>
                <p className="text-olive-700 text-sm italic">"¡Nunca imaginé que sería tan sencillo! Hice mis primeras conservas de pepino siguiendo la receta y las vendí todas en el trabajo el mismo día."</p>
              </div>

              {/* Fake WhatsApp Testimonial 2 */}
              <div className="bg-cream-50 p-6 rounded-2xl shadow-sm border border-olive-100">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-olive-200 rounded-full flex items-center justify-center font-bold text-olive-700">C</div>
                   <div>
                     <p className="font-bold text-sm text-olive-900">Carmen L.</p>
                     <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                   </div>
                </div>
                <p className="text-olive-700 text-sm italic">"La hoja de costos vale oro. Antes vendía pero no veía la ganancia real, ahora sé exactamente cuánto cobro. ¡Gracias por el material!"</p>
              </div>

              {/* Fake WhatsApp Testimonial 3 */}
              <div className="bg-cream-50 p-6 rounded-2xl shadow-sm border border-olive-100">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-olive-200 rounded-full flex items-center justify-center font-bold text-olive-700">R</div>
                   <div>
                     <p className="font-bold text-sm text-olive-900">Rosa P.</p>
                     <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                   </div>
                </div>
                <p className="text-olive-700 text-sm italic">"Empecé a hacerlo solo como pasatiempo y ahora tengo pedidos todas las semanas. Las etiquetas que dan de bono hacen que se vea súper profesional."</p>
              </div>
           </div>
        </div>
      </section>

      {/* ❓ 11. FAQ */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-olive-900 sm:text-4xl">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="¿Necesito experiencia?" answer="No, el material es para principiantes. Te enseña desde el paso cero hasta que tengas tu producto listo para vender." />
            <FAQItem question="¿Necesito invertir mucho?" answer="No, puedes empezar con bajo costo, usando los utensilios que ya tienes en casa y comprando ingredientes básicos." />
            <FAQItem question="¿Cómo lo recibo?" answer="Directamente en tu WhatsApp e-mail inmediatamente después de la confirmación." />
          </div>
        </div>
      </section>
      
      <footer className="bg-olive-900 py-8 text-center text-olive-300 text-sm">
        <p>© {new Date().getFullYear()} Método Conserva Rentable. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

// --- FAQ Item Component --- //
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-olive-200 rounded-2xl bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-olive-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-olive-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-olive-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-olive-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
