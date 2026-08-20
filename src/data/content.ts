import { Stethoscope, Syringe, Microscope, HeartPulse, Scissors, ScanLine } from 'lucide-react';
export const services=[
 {slug:'consulta',title:'Consulta integral',text:'Evaluación completa, prevención y seguimiento adaptado a cada etapa de vida.',icon:Stethoscope,img:'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1400&q=85'},
 {slug:'prevencion',title:'Vacunación y prevención',text:'Planes responsables según edad, estilo de vida y antecedentes.',icon:Syringe},
 {slug:'laboratorio',title:'Laboratorio clínico',text:'Resultados oportunos para tomar decisiones informadas.',icon:Microscope},
 {slug:'cirugia',title:'Cirugía y recuperación',text:'Protocolos seguros y monitorización cercana.',icon:HeartPulse},
 {slug:'odontologia',title:'Salud dental',text:'Evaluación, limpieza y prevención oral.',icon:Scissors},
 {slug:'imagen',title:'Diagnóstico por imagen',text:'Ecografía y apoyo diagnóstico moderno.',icon:ScanLine}
];
export const team=[
 {name:'Dra. Elena Andrade',role:'Medicina interna',exp:'12 años de experiencia',bio:'Acompaña a cada familia con diagnósticos claros y planes de cuidado comprensibles.',img:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85'},
 {name:'Dr. Mateo Ruiz',role:'Cirugía y anestesia',exp:'9 años de experiencia',bio:'Formación continua en cirugía de tejidos blandos y manejo seguro del dolor.',img:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85'},
 {name:'Dra. Sofía Vallejo',role:'Medicina felina',exp:'8 años de experiencia',bio:'Atención respetuosa, de bajo estrés y especialmente diseñada para gatos.',img:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85'}
];
export const facilities=[
 ['Consulta tranquila','https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=85'],
 ['Diagnóstico moderno','https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85'],
 ['Recuperación vigilada','https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1400&q=85'],
 ['Atención cercana','https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1400&q=85'],
 ['Equipo especializado','https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=85'],
 ['Bienestar felino','https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1400&q=85']
];
export type CareArticle={
 slug:string;
 title:string;
 cat:string;
 img:string;
 alt:string;
 readTime:number;
 summary:string;
 intro:string;
 highlights:string[];
 sections:{title:string;paragraphs:string[]}[];
 sources:{label:string;url:string}[];
};

export const articles:CareArticle[]=[
 {
  slug:'vacunas-segun-su-estilo-de-vida',
  title:'Vacunas: una conversación que empieza con su estilo de vida',
  cat:'Prevención',
  img:'https://images.pexels.com/photos/6234627/pexels-photo-6234627.jpeg?auto=compress&cs=tinysrgb&w=1400',
  alt:'Veterinaria examinando a un perro durante una consulta preventiva',
  readTime:6,
  summary:'Cómo construir con tu veterinario un plan de vacunación individual, basado en edad, antecedentes y exposición real.',
  intro:'La vacunación no consiste en repetir una lista idéntica para todos. Las guías actuales distinguen vacunas esenciales y vacunas indicadas según el riesgo individual; por eso una buena consulta comienza entendiendo cómo vive tu mascota.',
  highlights:['Lleva el historial o carné de vacunación.','Cuenta si viaja, visita parques, guarderías o convive con otros animales.','No cambies intervalos ni refuerzos sin evaluación veterinaria.'],
  sections:[
   {title:'El riesgo también vive en la rutina',paragraphs:['La edad, el estado de salud y el historial de vacunación son el punto de partida. Después importan detalles cotidianos: contacto con otros perros, hospedajes, viajes, acceso al exterior, presencia de fauna silvestre y enfermedades frecuentes en la zona.','AAHA recomienda proteger a todos los perros frente a enfermedades esenciales y añadir otras vacunas cuando el estilo de vida o la exposición lo justifican. La normativa local sobre rabia también debe respetarse.']},
   {title:'Qué conversar antes de vacunar',paragraphs:['Informa al equipo si hubo una reacción previa, si tu mascota toma medicamentos o si atraviesa una enfermedad. Llevar registros evita duplicaciones y permite ajustar el calendario con criterio.','Una vacuna retrasada no significa que debas improvisar o reiniciar el esquema por tu cuenta. El profesional determinará cómo ponerlo al día según el producto, la edad y los antecedentes.']},
   {title:'Después de la cita',paragraphs:['Puede aparecer cansancio leve o sensibilidad local durante un periodo corto. Mantén observación y sigue las instrucciones entregadas por la clínica.','Busca atención inmediata si aparecen dificultad para respirar, colapso, hinchazón marcada del rostro, vómitos repetidos o empeoramiento rápido. Son signos poco frecuentes, pero necesitan valoración urgente.']}
  ],
  sources:[{label:'AAHA · 2022 Canine Vaccination Guidelines, actualizadas en 2024',url:'https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/'}]
 },
 {
  slug:'visita-tranquila-para-tu-gato',
  title:'Cómo preparar una visita tranquila para tu gato',
  cat:'Bienestar felino',
  img:'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1400&q=86',
  alt:'Veterinaria atendiendo con suavidad a un gato en consulta',
  readTime:5,
  summary:'La visita empieza en casa: transportadora familiar, trayecto seguro y señales que ayudan al equipo a adaptar el manejo.',
  intro:'Para muchos gatos, la transportadora aparece solo antes de una experiencia desconocida. Cambiar esa asociación requiere tiempo, pero pequeñas decisiones en casa pueden reducir el miedo y facilitar una evaluación más completa.',
  highlights:['Deja la transportadora abierta como parte del mobiliario.','Usa una manta con olor familiar y asegura la transportadora en el vehículo.','Pregunta antes de la visita si necesita preparación adicional.'],
  sections:[
   {title:'Haz que la transportadora deje de ser una alarma',paragraphs:['Colócala en una zona tranquila varios días —idealmente semanas— antes de la cita. Déjala abierta, incorpora una manta conocida y premia la exploración voluntaria. Los modelos rígidos con tapa removible permiten examinar a algunos gatos sin forzarlos a salir.','Nunca persigas ni empujes al gato a último momento. Si no entra con facilidad, pausa, reduce estímulos y consulta a la clínica para planificar la alternativa más segura.']},
   {title:'Un trayecto estable y predecible',paragraphs:['Cubre parcialmente la transportadora con una tela ligera sin bloquear la ventilación. En el automóvil debe viajar estable y sujeta; no suelta ni en brazos. Conduce con suavidad y evita música fuerte.','Al llegar, mantén distancia de perros desconocidos y pregunta si existe un lugar elevado o tranquilo para esperar. La visita veterinaria comienza desde que el gato sale de casa, no al entrar al consultorio.']},
   {title:'Cuéntale al equipo lo que observas',paragraphs:['Describe cómo reacciona durante el transporte y el manejo, y comparte videos de cambios que solo ocurren en casa. Si existe miedo intenso, el veterinario puede diseñar un plan previo; nunca administres sedantes ni medicamentos humanos sin prescripción.','Respirar con la boca abierta, presentar encías azuladas o muy pálidas, colapsar o mostrar dificultad respiratoria requiere atención inmediata.']}
  ],
  sources:[{label:'FelineVMA · Transportation of Cats in Motor Vehicles',url:'https://catvets.com/resource/transportation-of-cats-in-motor-vehicles-position-statement/'},{label:'FelineVMA · Cat Friendly Veterinary Interaction Guidelines',url:'https://catvets.com/clinical-resources/practice-guidelines/'}]
 },
 {
  slug:'senales-revision-dental',
  title:'Señales de que es momento de una revisión dental',
  cat:'Salud dental',
  img:'https://unsplash.com/photos/yme-xntjSKY/download?force=true&w=1400',
  alt:'Veterinario examinando la boca y los dientes de un perro',
  readTime:6,
  summary:'El mal aliento persistente no es solo una cuestión estética: aprende qué cambios observar y cómo prevenir dolor oral.',
  intro:'Los animales pueden seguir comiendo aun con molestias dentales. Por eso conviene mirar más allá del apetito y registrar cambios sutiles en la forma de masticar, jugar o aceptar que les toquen el rostro.',
  highlights:['Observa aliento, encías, sarro y cambios al masticar.','El cepillado en casa no reemplaza una evaluación profesional.','No uses pasta dental humana ni desprendas sarro por tu cuenta.'],
  sections:[
   {title:'Cambios que merecen una cita',paragraphs:['Mal aliento persistente, encías rojas o sangrantes, sarro visible, babeo, comida que cae de la boca, preferencia por un lado al masticar y rechazo a juguetes duros pueden acompañar enfermedad oral.','También pueden aparecer menor apetito, pérdida de peso, sensibilidad al tocar el hocico o inflamación facial. Una boca que parece normal desde fuera aún puede esconder enfermedad bajo la línea de la encía.']},
   {title:'Qué aporta una evaluación profesional',paragraphs:['El examen veterinario determina si hace falta una limpieza y evaluación dental más completa. Las radiografías dentales y la exploración bajo anestesia permiten valorar zonas que no se ven durante una revisión despierta.','Los productos cosméticos que solo reducen el olor no tratan la causa. El objetivo es identificar dolor, infección o piezas dañadas y definir un plan seguro para ese paciente.']},
   {title:'Prevención en casa, paso a paso',paragraphs:['El cepillado regular con productos formulados para mascotas es la medida doméstica de referencia cuando el animal lo tolera. Empieza gradualmente y detente si hay dolor o sangrado. Tu veterinario puede recomendar productos adecuados y una técnica realista.','Inflamación rápida del rostro, sangrado que no cede, traumatismo, incapacidad para cerrar la boca o dificultad para respirar requieren atención urgente.']}
  ],
  sources:[{label:'AVMA · Pet Dental Care',url:'https://www.avma.org/resources-tools/pet-owners/petcare/pet-dental-care'},{label:'WSAVA · Global Dental Guidelines',url:'https://wsava.org/global-guidelines/global-dental-guidelines/'}]
 },
 {
  slug:'dolor-que-no-siempre-se-ve',
  title:'Dolor que no siempre se ve: cambios cotidianos que importan',
  cat:'Confort y movilidad',
  img:'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1400&q=86',
  alt:'Perro descansando mientras su familia observa su bienestar',
  readTime:7,
  summary:'Postura, movilidad, sueño y conducta pueden contar una historia que la mascota no puede explicar con palabras.',
  intro:'El dolor no siempre produce llanto. En perros y gatos puede aparecer como menor actividad, aislamiento, irritabilidad, cambios de aseo o dificultad para repetir movimientos antes normales.',
  highlights:['Compara la conducta actual con su propia rutina habitual.','Graba videos cortos de marcha, escaleras o saltos.','Nunca des analgésicos humanos sin indicación veterinaria.'],
  sections:[
   {title:'Busca diferencias, no una señal perfecta',paragraphs:['Observa si tarda más en levantarse, evita escaleras, deja de saltar, cambia de postura al dormir o se aleja cuando intentas tocar una zona. En gatos, menos aseo, aislamiento o dificultad para entrar al arenero pueden ser relevantes.','Un solo cambio no confirma dolor, pero su repetición ayuda a construir una historia clínica más clara. Anota cuándo ocurre y qué actividad lo provoca.']},
   {title:'Tu registro ayuda a la consulta',paragraphs:['Los videos hechos en casa pueden mostrar movimientos que desaparecen en el consultorio por miedo o excitación. Graba sin forzar la actividad y registra también apetito, descanso e interacción.','Las guías de dolor enfatizan combinar la observación del cuidador con la evaluación clínica y reevaluar la respuesta al plan. El tratamiento debe ser individual y puede incluir medidas farmacológicas, ambientales, nutricionales o de rehabilitación.']},
   {title:'Cuándo no esperar',paragraphs:['Dolor intenso repentino, incapacidad para ponerse de pie, abdomen distendido, dificultad respiratoria, parálisis, traumatismo importante o vocalización inconsolable necesitan atención inmediata.','No administres ibuprofeno, paracetamol, naproxeno ni otros medicamentos humanos: pueden ser peligrosos o mortales para perros y gatos.']}
  ],
  sources:[{label:'AAHA · 2022 Pain Management Guidelines for Dogs and Cats',url:'https://www.aaha.org/resources/2022-aaha-pain-management-guidelines-for-dogs-and-cats/home-3/'},{label:'AAHA · Chronic Pain Assessment in Dogs',url:'https://www.aaha.org/resources/2022-aaha-pain-management-guidelines-for-dogs-and-cats/chronic-pain-assessment-in-dogs/'}]
 },
 {
  slug:'peso-saludable-mas-alla-de-la-balanza',
  title:'Peso saludable: mirar más allá del número de la balanza',
  cat:'Nutrición',
  img:'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=86',
  alt:'Perro activo al aire libre como parte de una rutina saludable',
  readTime:6,
  summary:'La condición corporal y la masa muscular completan la información del peso y permiten ajustar el plan a cada paciente.',
  intro:'Dos mascotas con el mismo peso pueden tener composiciones corporales muy diferentes. Por eso la evaluación nutricional no se limita a la balanza: también considera grasa corporal, masa muscular, dieta, actividad y estado de salud.',
  highlights:['Registra todo lo que come, incluidos premios y sobras.','Pide que evalúen condición corporal y masa muscular.','Los cambios de peso deben ser graduales y supervisados.'],
  sections:[
   {title:'Tres datos que se complementan',paragraphs:['El peso permite seguir tendencias. La puntuación de condición corporal estima las reservas de grasa mediante observación y palpación. La condición muscular evalúa zonas donde puede perderse masa incluso si la balanza cambia poco.','WSAVA recomienda integrar la evaluación nutricional en cada visita y ampliar el estudio cuando aparecen factores de riesgo. La meta no es perseguir una cifra universal, sino una condición saludable para ese animal.']},
   {title:'Haz visible la dieta completa',paragraphs:['Durante varios días registra alimento principal, cantidades, premios, masticables, suplementos, sobras y la forma de medir cada porción. Esta historia revela calorías que suelen pasar inadvertidas.','Evita recortes bruscos o dietas improvisadas. Cachorros, gatitos, pacientes mayores y animales con enfermedades requieren planes especialmente cuidadosos.']},
   {title:'Seguimiento que sí ayuda',paragraphs:['Acordar una forma consistente de medir porciones y una fecha de control permite saber si el plan funciona. La actividad debe adaptarse a edad, movilidad, clima y condición médica.','Pérdida rápida de peso, falta de apetito, vómitos repetidos, debilidad o aumento marcado de sed y orina justifican una consulta pronta.']}
  ],
  sources:[{label:'WSAVA · Global Nutrition Guidelines and Toolkit',url:'https://wsava.org/global-guidelines/global-nutrition-guidelines/'}]
 },
 {
  slug:'acompanar-la-etapa-senior',
  title:'Acompañar la etapa senior sin normalizar el malestar',
  cat:'Cuidado senior',
  img:'https://images.pexels.com/photos/7470634/pexels-photo-7470634.jpeg?auto=compress&cs=tinysrgb&w=1400',
  alt:'Veterinario realizando una revisión clínica a un perro adulto',
  readTime:7,
  summary:'Envejecer cambia las necesidades, pero no convierte el dolor, la desorientación o la pérdida de apetito en algo normal.',
  intro:'La edad senior no comienza igual para todos. Tamaño, especie, antecedentes y estado funcional importan más que una cifra aislada. Lo útil es detectar tendencias temprano y adaptar la casa y el plan de salud.',
  highlights:['Anota cambios en apetito, sed, peso, sueño y movilidad.','No atribuyas automáticamente la desorientación o el dolor a la edad.','Adapta el entorno antes de que una dificultad cause una caída.'],
  sections:[
   {title:'Cambios pequeños que cuentan',paragraphs:['Beber u orinar más, perder peso, dormir distinto, dejar de saltar, mostrarse irritable, desorientarse o tener accidentes en casa merecen conversación veterinaria. Pueden aparecer lentamente y confundirse con envejecimiento normal.','Las guías de cuidado senior recomiendan un plan individual que integre prevención, diagnóstico, tratamiento y calidad de vida según las necesidades del paciente.']},
   {title:'Una casa que acompaña',paragraphs:['Superficies antideslizantes, camas accesibles, rampas estables y areneros de entrada baja pueden reducir esfuerzo. Ubica agua, comida y zonas de descanso donde no obliguen a usar escaleras innecesarias.','Haz cambios de manera gradual. Observa si mejoran la autonomía y comparte con el equipo qué actividades siguen siendo importantes para tu mascota.']},
   {title:'Planifica antes de una crisis',paragraphs:['Las revisiones periódicas permiten comparar peso, masa muscular, movilidad, boca, conducta y resultados clínicos a lo largo del tiempo. Pregunta qué señales requieren adelantar el próximo control.','Colapso, dificultad respiratoria, convulsiones, incapacidad para caminar, dolor intenso o ausencia prolongada de orina son motivos de atención urgente.']}
  ],
  sources:[{label:'AAHA · 2023 Senior Care Guidelines for Dogs and Cats',url:'https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/introduction-3/'},{label:'AAHA · Pain Management in Senior Pets',url:'https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/pain-management/'}]
 }
];
