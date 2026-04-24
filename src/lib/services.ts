export interface Service {
  id: string;
  slug: string;
  title: string;
  tag: string; // years of experience
  backImg: string; // filename in /public/images/
  previewImg: string; // path in /src/assets/portfolio/
  text1: string;
  text2: string;
  text3?: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'caracterizacion-danos',
    title: 'CARACTERIZACIÓN DE DAÑOS PSICOSOCIALES',
    tag: '13',
    backImg: '/images/back-dano-old.png',
    previewImg: '/portfolio/in-dano.png',
    text1:
      'A partir de un modelo propio, se han definido tres macrocategorías del daño útiles a la justicia restaurativa: analizar los marcos de reconcibilidad del daño que preexisten en los responsables de los hechos, los daños psicosociales que se observan en los hechos mismos o en la destructividad que éstos pretenden y los daños psicosociales que sobrevienen como consecuencia de los hechos que originaron la victimización.',
    text2:
      'Esta caracterización del daño persigue fines para su reconocimiento en los jueces, las víctimas y los responsables de los crímenes, pues controvierte la idea de que los daños psicosociales y morales puedan suponerse y alienta a su entendimiento y caracterización para que todos se vean concernidos en su restauración.',
    metaTitle: 'Caracterización de Daños Psicosociales | Las Paces',
    metaDescription:
      'Modelo propio de tres macrocategorías del daño psicosocial útiles a la justicia restaurativa. 13 años de experiencia acompañando procesos de reconocimiento y restauración del daño.',
  },
  {
    id: '2',
    slug: 'construccion-protocolos',
    title: 'CONSTRUCCIÓN DE PROTOCOLOS',
    tag: '17',
    backImg: '/images/back-protocolos.png',
    previewImg: '/portfolio/in-protocolos.png',
    text1:
      'El apoyo de la psicología a los procesos de justicia se puede hacer desde diferentes perspectivas, una de estas es apoyando a los equipos de trabajo en crear categorías de análisis para construir procesos y establecer modelos de buenas prácticas en las entidades de justicia o en aquellas que le dan soporte.',
    text2:
      'Los protocolos son procesos estructurados que permiten mejorar el funcionamiento de las entidades y las organizaciones. El apoyo que damos se orienta a: construir procesos y procedimientos institucionales que involucran contenidos emocionales (entregas de restos, participación en audiencias, diseño de diligencias judiciales), procesos de pedagogía a la ciudadanía y procesos que buscan mejorar el acceso a la justicia.',
    metaTitle: 'Construcción de Protocolos de Justicia | Las Paces',
    metaDescription:
      'Apoyo psicológico para construir protocolos institucionales en entidades de justicia. 17 años de experiencia en procesos y procedimientos que involucran contenidos emocionales.',
  },
  {
    id: '3',
    slug: 'atencion-agotamiento',
    title: 'ESTRATEGIA DE ATENCIÓN AL AGOTAMIENTO EMOCIONAL',
    tag: '3',
    backImg: '/images/back-estrategias-old.png',
    previewImg: '/portfolio/in-estrategias.png',
    text1:
      'Se trata de asesorías dirigidas al afrontamiento del efecto que produce la atención de graves violaciones a los derechos humanos o de infracciones al DIH. Las asesorías se realizan a equipos de trabajo y a las personas individualmente consideradas, dado que el efecto residual del trauma se observa también en las relaciones de los equipos de trabajo.',
    text2:
      'Bajo este componente se realizan sesiones individuales de asesoría que son confidenciales y se orientan, en específico, a mitigar el impacto de atender casos que exceden la capacidad de entendimiento o la capacidad para procesar emocionalmente los crímenes aún los profesionales más competentes.',
    text3:
      'También se realizan consultorías a instituciones que por su naturaleza están llamadas a hacer estas atenciones, pues es importante disponer una estructura organizacional capaz de dar soporte a la exigencia emocional de la tarea.',
    metaTitle: 'Atención al Agotamiento Emocional en Equipos de Justicia | Las Paces',
    metaDescription:
      'Asesorías individuales y grupales para el afrontamiento del agotamiento emocional en profesionales que atienden graves violaciones a los derechos humanos y al DIH.',
  },
  {
    id: '4',
    slug: 'mediacion-encuentros',
    title: 'MEDIACIÓN Y ENCUENTROS ENTRE VÍCTIMAS Y RESPONSABLES',
    tag: '9',
    backImg: '/images/back-mediacion-old.png',
    previewImg: '/portfolio/in-mediacion.png',
    text1:
      'Se proponen como espacios grupales o privados para facilitar diversas comprensiones sobre los conflictos, disponer a las partes para la escucha empática del otro y aproximarse a la razonabilidad en la manera como desde las diferentes perspectivas se hacen lecturas complejas de las realidades.',
    text2:
      'Los encuentros no buscan, ni se orientan a forzar procesos de perdón que sólo pueden definirse desde la esfera privada y no siempre concluyen en acuerdos para la lectura de los problemas o del pasado. En ocasiones, la máxima expresión del consenso es la aceptación de la diferencia con la que se han impactado las vidas, los valores y los principios de las personas.',
    metaTitle: 'Mediación y Encuentros entre Víctimas y Responsables | Las Paces',
    metaDescription:
      'Espacios de mediación grupales y privados para facilitar comprensiones sobre conflictos, escucha empática y procesos de justicia restaurativa. 9 años de experiencia.',
  },
  {
    id: '5',
    slug: 'formacion-herramientas',
    title: 'FORMACIÓN EN HERRAMIENTAS DE ATENCIÓN PSICOSOCIAL',
    tag: '12',
    backImg: '/images/back-formacion-old.png',
    previewImg: '/portfolio/in-formacion.png',
    text1:
      'Se trata de entrenamientos vivenciales para la atención del trauma a nivel grupal e individual. Con estas herramientas se puede fortalecer la capacidad de operadores judiciales que no son psicólogos o terapeutas con el fin de que todos tengan herramientas para producir efectos restaurativos en las víctimas a partir del tipo de asesoría que les dan.',
    text2:
      'Desde esa perspectiva, las atenciones tienen siempre un alcance en la recuperación y dignificación de quienes han sufrido de manera directa e indirecta los hechos de violencia.',
    metaTitle: 'Formación en Herramientas de Atención Psicosocial | Las Paces',
    metaDescription:
      'Entrenamientos vivenciales para la atención del trauma grupal e individual. Formación para operadores judiciales en herramientas psicosociales con efectos restaurativos.',
  },
  {
    id: '6',
    slug: 'asesorias',
    title: 'ASESORÍAS',
    tag: '12',
    backImg: '/images/back-asesorias-old.png',
    previewImg: '/portfolio/in-asesorias-new.png',
    text1:
      'Son asistencias técnicas que se prestan en el nivel organizacional y personal. Se trata de sesiones privadas y de carácter confidencial que tienen como propósito dar elementos a los operadores judiciales para que integren a su actuación judicial herramientas psicosociales que les ayuden a hacer comprensiones relacionadas con el trámite de las emociones en escenarios judiciales.',
    text2:
      'También se prestan asesorías en el contexto y desarrollo de diligencias judiciales que tienen como fin dar soporte técnico con relación al daño o a la formulación de preguntas o intervenciones en el escenario judicial a los operadores de justicia.',
    metaTitle: 'Asesorías en Justicia Restaurativa | Las Paces',
    metaDescription:
      'Asistencias técnicas organizacionales y personales para operadores judiciales. Sesiones confidenciales de asesoría psicosocial aplicada a escenarios judiciales.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
