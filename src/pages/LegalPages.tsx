import { Link } from 'react-router-dom';
import { business } from '../config/business';

const updated = '18 de agosto de 2026';

function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <header className="legal-hero">
      <span className="eyebrow light-text">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
      <small>Última actualización: {updated}</small>
    </header>
    <section className="legal-page">
      <aside aria-label="Navegación legal">
        <span>Documentos legales</span>
        <Link to="/privacy">Política de privacidad</Link>
        <Link to="/terms">Términos de uso</Link>
        <a href={`mailto:${business.email}`}>Contacto de privacidad</a>
      </aside>
      <article>{children}</article>
    </section>
  </>;
}

export function PrivacyPage() {
  return <LegalPage eyebrow="Privacidad y seguridad" title="Política de privacidad" intro={`Esta política explica cómo ${business.clinicName} trata y protege los datos personales recibidos a través de este sitio y de sus canales de contacto.`}>
    <h2>1. Responsable del tratamiento</h2>
    <p><strong>{business.clinicName}</strong>, con domicilio en {business.address}, {business.city}, es responsable del tratamiento de los datos personales descritos en esta política. Las solicitudes relacionadas con privacidad pueden enviarse a <a href={`mailto:${business.email}`}>{business.email}</a> o realizarse mediante el teléfono <a href={`tel:${business.phone}`}>{business.phone}</a>.</p>

    <h2>2. Datos que tratamos</h2>
    <p>Al solicitar una cita podemos recibir el nombre del responsable de la mascota, número telefónico, nombre y tipo de mascota, servicio solicitado, fecha y hora preferidas y el mensaje opcional que la persona decida proporcionar. También tratamos los datos incluidos voluntariamente en comunicaciones por WhatsApp, teléfono o correo electrónico.</p>
    <p>Este sitio no crea cuentas de usuario ni solicita contraseñas, datos bancarios o información de pago. No deben enviarse datos personales sensibles de personas mediante el campo de mensaje, salvo que sean estrictamente necesarios para atender una solicitud y exista una base legal válida.</p>

    <h2>3. Finalidades y bases de legitimación</h2>
    <ul>
      <li>Gestionar solicitudes de cita, confirmar disponibilidad y prestar los servicios solicitados, como medidas precontractuales y ejecución de la relación de servicios.</li>
      <li>Responder consultas, brindar orientación administrativa y mantener comunicaciones relacionadas con la atención, sobre la base del consentimiento o de la relación solicitada por el titular.</li>
      <li>Cumplir obligaciones legales, regulatorias, contables y requerimientos legítimos de autoridad competente.</li>
      <li>Proteger la seguridad del sitio, prevenir usos indebidos y defender derechos, cuando exista interés legítimo y no prevalezcan los derechos del titular.</li>
    </ul>
    <p>No utilizamos la información enviada para publicidad no solicitada ni adoptamos decisiones basadas únicamente en tratamientos automatizados.</p>

    <h2>4. Envío mediante WhatsApp y destinatarios</h2>
    <p>El formulario de cita prepara un mensaje en el dispositivo del usuario y abre WhatsApp. La información solo se envía cuando el usuario confirma el envío dentro de esa plataforma. Desde ese momento, WhatsApp/Meta trata los datos conforme a sus propios términos y políticas, y puede procesarlos fuera de Ecuador. El usuario puede optar por llamar o escribir por correo electrónico en lugar de utilizar WhatsApp.</p>
    <p>Podremos comunicar datos a proveedores tecnológicos que actúen por cuenta de la clínica, sujetos a deberes de confidencialidad, seguridad y tratamiento limitado; a autoridades cuando exista obligación legal; o a profesionales que intervengan en la atención cuando sea necesario. No vendemos datos personales.</p>

    <h2>5. Conservación</h2>
    <p>Las solicitudes no confirmadas se conservarán únicamente durante el tiempo razonablemente necesario para responderlas y realizar seguimiento. La información incorporada a una relación asistencial, contractual, contable o de reclamos se conservará durante los plazos exigidos por la normativa aplicable y, después, será eliminada, anonimizada o bloqueada de forma segura.</p>

    <h2>6. Seguridad</h2>
    <p>Aplicamos medidas administrativas, técnicas, físicas, organizativas y jurídicas razonables y proporcionales al riesgo para preservar la confidencialidad, integridad y disponibilidad de los datos, incluyendo control de acceso, deberes de confidencialidad, minimización de información y revisión de incidentes. Ningún sistema conectado a internet es absolutamente invulnerable; ante un incidente que genere riesgo para los derechos de los titulares, actuaremos y notificaremos conforme a la legislación aplicable.</p>

    <h2>7. Derechos del titular</h2>
    <p>El titular puede ejercer gratuitamente los derechos de información, acceso, rectificación y actualización, eliminación, oposición, portabilidad, suspensión o limitación del tratamiento, revocación del consentimiento y a no ser objeto de decisiones basadas únicamente en valoraciones automatizadas, cuando correspondan conforme a la Ley Orgánica de Protección de Datos Personales.</p>
    <p>La solicitud debe enviarse a <a href={`mailto:${business.email}`}>{business.email}</a>, identificar al titular, describir el derecho ejercido y aportar la información necesaria para verificar su identidad. Si considera que su solicitud no fue atendida conforme a la ley, puede presentar un reclamo ante la Superintendencia de Protección de Datos Personales del Ecuador.</p>

    <h2>8. Menores de edad</h2>
    <p>Los canales digitales están dirigidos a personas con capacidad legal para solicitar servicios. Cuando se proporcionen datos personales de niñas, niños, adolescentes o personas sujetas a representación, quien los entregue declara contar con la representación o autorización exigida por la ley.</p>

    <h2>9. Cookies, recursos externos y enlaces</h2>
    <p>Actualmente el sitio no utiliza cookies propias con fines publicitarios ni herramientas propias de perfilado. Puede cargar recursos técnicos de terceros, como tipografías, imágenes o enlaces externos. Al seguir un enlace a WhatsApp, Google Maps o redes sociales, el usuario queda sujeto a las prácticas de privacidad del proveedor correspondiente.</p>

    <h2>10. Cambios a esta política</h2>
    <p>Podremos actualizar esta política cuando cambien nuestros procesos o la normativa. La versión vigente se publicará en esta página con su fecha de actualización. Los cambios que requieran un nuevo consentimiento serán comunicados y gestionados antes del tratamiento correspondiente.</p>
  </LegalPage>;
}

export function TermsPage() {
  return <LegalPage eyebrow="Condiciones del sitio" title="Términos de uso" intro={`Estos términos regulan el acceso y uso del sitio web de ${business.clinicName}, sus contenidos y sus canales digitales de solicitud de atención.`}>
    <h2>1. Aceptación y alcance</h2>
    <p>Al utilizar este sitio, el usuario acepta estos términos y la <Link to="/privacy">Política de privacidad</Link>. Si no está de acuerdo, debe abstenerse de utilizar sus funciones. El sitio está destinado a informar sobre la clínica, sus servicios, equipo, espacios y contenidos de cuidado, y a facilitar solicitudes de contacto o cita.</p>

    <h2>2. Solicitudes de cita</h2>
    <p>El envío de una solicitud no confirma ni reserva automáticamente una cita. La cita existe únicamente cuando {business.clinicName} confirma expresamente la fecha y hora por uno de sus canales de contacto. La clínica puede proponer otra disponibilidad según capacidad, prioridad clínica y horario de atención. El usuario debe proporcionar información veraz, completa y actualizada, y avisar oportunamente si no puede asistir.</p>

    <h2>3. Emergencias y alcance de la información</h2>
    <p>El sitio, el formulario y los mensajes electrónicos no son canales de diagnóstico ni de respuesta inmediata. Ante una emergencia o deterioro súbito, el usuario debe llamar al <a href={`tel:${business.emergencyPhone}`}>{business.emergencyPhone}</a> o acudir sin demora a un centro veterinario habilitado. Los artículos y demás contenidos son informativos y no sustituyen la exploración, diagnóstico, prescripción o tratamiento individual realizado por un profesional veterinario.</p>

    <h2>4. Uso permitido</h2>
    <p>El usuario se obliga a utilizar el sitio de forma lícita y a no interferir con su seguridad o funcionamiento. Queda prohibido intentar acceder sin autorización a sistemas o datos, introducir código malicioso, realizar solicitudes fraudulentas, suplantar identidades, extraer contenidos de forma automatizada que afecte el servicio o utilizar el sitio para vulnerar derechos de terceros.</p>

    <h2>5. Propiedad intelectual</h2>
    <p>La estructura, textos, identidad gráfica, logotipos, elementos visuales, código y contenidos propios del sitio pertenecen a {business.clinicName} o se utilizan bajo autorización. Se permite la consulta y copia estrictamente personal y no comercial. Cualquier reproducción, adaptación, distribución, explotación comercial o uso de signos distintivos requiere autorización previa y escrita, salvo los usos permitidos expresamente por la ley.</p>

    <h2>6. Enlaces y servicios de terceros</h2>
    <p>El sitio puede enlazar a WhatsApp, Google Maps, redes sociales u otros servicios independientes. Estos proveedores controlan sus plataformas, disponibilidad, condiciones y tratamiento de datos. {business.clinicName} no responde por contenidos o fallos atribuibles exclusivamente a terceros, sin perjuicio de las responsabilidades que no puedan excluirse conforme a la ley.</p>

    <h2>7. Disponibilidad y responsabilidad</h2>
    <p>Procuramos mantener información correcta y un acceso seguro, pero el sitio puede suspenderse por mantenimiento, actualizaciones, fallos de red o causas fuera de control razonable. La información sobre horarios, profesionales y servicios puede cambiar; la disponibilidad definitiva será la confirmada directamente por la clínica. Nada en estos términos limita derechos irrenunciables del consumidor ni excluye responsabilidad cuando la ley ecuatoriana prohíba hacerlo.</p>

    <h2>8. Privacidad y seguridad</h2>
    <p>El tratamiento de datos personales se rige por nuestra <Link to="/privacy">Política de privacidad</Link> y por la normativa ecuatoriana aplicable. El usuario es responsable de no enviar información innecesaria y de proteger el acceso a sus propios dispositivos y cuentas de terceros utilizadas para comunicarse.</p>

    <h2>9. Modificaciones</h2>
    <p>Podremos modificar el sitio y estos términos para reflejar cambios legales, técnicos u operativos. La versión aplicable será la publicada con su fecha de actualización. Los cambios no afectarán retroactivamente derechos adquiridos ni relaciones ya confirmadas, salvo disposición legal.</p>

    <h2>10. Legislación y solución de controversias</h2>
    <p>Estos términos se rigen por las leyes de la República del Ecuador. Las partes procurarán resolver de buena fe cualquier desacuerdo mediante contacto directo. Sin perjuicio de los mecanismos administrativos y de protección al consumidor aplicables, las controversias serán conocidas por las autoridades competentes de Quito, Ecuador, cuando legalmente corresponda.</p>

    <h2>11. Contacto</h2>
    <p>Las consultas sobre estos términos pueden dirigirse a <a href={`mailto:${business.email}`}>{business.email}</a>, al teléfono <a href={`tel:${business.phone}`}>{business.phone}</a> o a {business.address}, {business.city}.</p>
  </LegalPage>;
}
