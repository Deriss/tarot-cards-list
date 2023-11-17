import { getNewId } from '../services/idService';

export const allTarotCards = [{
            nome: 'El Loco',
            image: 'url',
            representa: 'El Loco representa el Espíritu',
            descricao: 'Locura. Irreflexión. Extravagancia. Falta de disciplina. Desconsideración. Delirio. Frenesí. Inseguridad. Frivolidad. Pasión. Entusiasmo.',
            desc_invertida: 'El Loco representa el Espíritu. Descuido. Ausencia. Indecisión. Apatía. Decisión errónea.'
        },
        {
            nome: 'El Mago',
            image: 'url2',
            representa: 'El Mago representa la fuerza de voluntad',
            descricao: 'Habilidad, diplomacia, autoestima, flexibilidad, autoridad, estrategia.',
            desc_invertida: 'Falta de voluntad, torpeza, inseguridad, vacilación, la fuerza de voluntad se usa para malos fines, indecisión.'
        },
        {
            nome: 'La Suma Saterdotisa',
            image: 'url3',
            representa: 'La Suma Saterdotisa representa el saber secreto o la sabiduría oculta',
            descricao: 'Sabiduría. Sentido común. Erudición. Serenidad. Objetividad. Previsión. Comprensión. Insensibilidad. Impaciencia. Solter, demasiado pragmática. Maestra.',
            desc_invertida: 'Ignorancia. Incomprensión. Egoísmo. Juicio equivocado. Superficialidad.'
        },
        {
            nome: 'La Emperatriz',
            image: '',
            representa: 'La Emperatriz simboliza la Fecundación por Intuición.',
            descricao: 'Éxito gracias a la habilidad femenina. Fecundidad, riqueza material, madre, hermana, esposa, boda, hijos, influencia femenina, bienestar, castigo, plenitud, capacidad de motivar a los otros, mujer directiva de negocios, equilibrada, pragmática, decidida, intuición.',
            desc_invertida: 'Indecisión. Inactividad. Falta de concentración Miedo, Derroche. Sin hijos. Infidelidad. Pérdida de bienes materiales.'
        },
        {
            nome: 'El Emperador',
            image: '',
            representa: 'El Emperador simboliza el Control Autoritario por Inteligencia.', 
            descricao:'Poder mundano. Gran capacidad de rendimiento. Confianza. Riqueza. Estabilidad. Autoridad. Espíritu Intransigencia. Padre Hermano. Esposo. Influencia masculina. Presión directa. Comunicación. Convicción. Fuerza. Consigue sus metas.',
            desc_invertida: 'Inmadurez. Debilidad Indecisión incapaz de controlar emociones mezquinas.'
        },
        {
            nome: 'El Sumo Sacerdote',
            image: '',
            representa: 'El Sumo Sacerdote simboliza el Conformismo y Ortodoxia',
            descricao: 'Ceremonias Humildad Bondad. Amabilidad. Inspiración. Servilismo. Falta de convicción, timidez o lo contrario. Esclavo de sus propias ideas. Persona a la cual puede uno refugiarse y confiar. Ritualismo. Indulgencia.',
            desc_invertida: 'Exceso de amabilidad, susceptible. Impotencia. Vulnerabilidad. Heterodoxia. Renunciación. Libre de prejuicios, fragilidad.'
        },
        {
            nome: 'Los Enamorados',
            image: '',
            representa: 'Los Enamorados simbolizan el equilibroentre dos potencias.',
            descricao: 'Amor Belleza Unanimidad Pruebas superadas Confianza Honor Comienzo de un posible idilio. Apasionamiento. Optimismo. Desespero. Abandonarse. Necesidad de probar o someterse a la prueba. Lucha entre el amor sagrado y el profano. Examen Anhelo ardiente.',
            desc_invertida: 'Incapacidad de superar la prueba Infidelidad. Seperación. Frustración en el amor y en el matrimonio. Interferencias de otros Inconstancia. Proyectos imprudentes.'
        },
        {
            nome: 'El Carro',
            image: '',
            representa: 'El Carro simboliza el Dominio, el Espiritu Triunfador',
            descricao: 'En posición normal Adversidad, posiblemente ya superada Influencia conflictiva Disturbios.Venganza. Éxito. Huída. Evasión de la realidad.Perplejidad. Necesidad de revisión. ',
            desc_invertida: 'Desafortunado. Derrota Fracaso, Vencido Superado.'
        },
        {
            nome: 'La Justicia',
            image: '',
            representa: 'La Justicia simboliza el Espíritu Equilibrado',
            descricao: 'Justicia. Armonía. Equidad Virtud. Honor. Virginidad. Justa recompensa. Acciones bien intencionados. Consejo. Autosatisfacción.',
            desc_invertida: 'Indecisión. Acusaciones falsas. Fanatismo. Severidad de juicio. Abuso.'  
        },
        {
            nome: 'El Ermitaño',
            image: '',
            representa: 'El Ermitaño simboliza el Espiritu Guía',
            descricao: 'Consejo Conocimiento. Solicitud. Prudencia. Precaución. Abnegación. Retirada. Extravío. Incapacidad de enfrentarse a los hechos. Guardián de secretos.',
            desc_invertida: 'Imprudencia Juicio incorrecto. Inmadurez. Precipitación. Atolondramiento.'
        },
        {
            nome: 'La Rueda de la Fortuna',
            image: '',
            representa: 'La Rueda de la Fortuna simboliza el Espiritu enfrentado al Destino.',
            descricao: 'Destino. Felicidad. Satisfacción. Providência. Ganancias especiales o pérdidas insolitas. Resultado. Avance. Casos inevitables.',
            desc_invertida: 'Fracaso. Curso interrumpido. Irregularidades debidas a causas inesperadas.'
        },
        {
            nome: 'La Fuerza',
            image: '',
            representa: 'La Fuerza simboliza el espíritu Eterno, Capacidad de Superar Todos los Obstáculos y Resistencias.',
            descricao: 'Fuerza. Valor. Convicción. Energía. Determinación. Provocación. Acción. Confianza. Habilidad innata. Celos. Fervor. Consecución con peligro considerable. Conquista. Heroismo. Virilidad. Resolución. Habilidad física.',
            desc_invertida: 'Debilidad. Mezquindad. Enfermedad. Tiranía. Fata de confianza. Incapacidad.'
        },
        {
            nome: 'El Colgado',
            image: '',
            representa: 'El Colgado simboliza el Espíritu de Renuncia y Sacrificio.',
            descricao: 'Vida en suspenso. Transición. Apatía y torpeza. Aburrimiento. Abandono, Sacrificio. Arrepentimiento. Asimilación. Regeneración Mejora. Capitulación.',
            desc_invertida: 'Falta de sacrificio. Incapacidad de entregarse. Preocupación por si mismo, Falsa profecía. Sacrificio inútil. '
        },
        {
            nome: 'La Muerte',
            image: '',
            representa: 'La Muerte simboliza el Espíritu en Transformación.',
            descricao: 'Cambio inesperado. Pérdida. Fracaso. Final de una situación familiar o de una amistad. Pérdida de ingresos o de seguridad financiera. Enfermedad. Muerte posible.',
            desc_invertida: 'Inercia imperturbable. Cambios lentos y cambios parciales. Grave accidente evitado.Inercia.'
        },
        {
            nome: 'Templanza',
            image: '',
            representa: 'Templanza simboliza el Espíritu Autoritario',
            descricao: 'Moderación. Paciencia. Adaptación. Armonía. Administración. Compatibilidad. Fusión. Buena influencia. Consolidación. Imagen materna y paterna. Imagen del mundo. Inspira confianza y complacencia. Presagios afortunados.',
            desc_invertida: 'Discordia. Conflicto. Hostilidad. Impaciencia. Esterilidad. Frustración.'
        },
        {
            nome: 'El Diablo',
            image: '',
            representa: 'El Diablo simboliza el Espíritu Autoritario.',
            descricao: 'Subordinación. Ruina. Esclavitud. Malevolencia. Fracaso. Experiencias sobrenaturales. Incapacidad de ponerse metas a si mismo. Violencia. Choque. Fatalidad. Autocastigo. Inclinación al mal. Autodestrucción. Falta de principios.',
            desc_invertida: 'Liberación de relaciones. Tregua. Necesidad de comunicar con otras personas, elevación por encima de limites insuperables.'
        },
        {
            nome: 'La Torre',
            image: '',
            representa: 'La Torre simboliza la Destrucción.',
            descricao: 'Cambio completo y repentino Ruptura de relaciones anteriores. Sucesos inesperados. Retorno. Adversidad. Precipitación. Interrupción. Pérdida de estabilidad. Pérdida de dinero. Pérdida de amor y afecto. Cambio terrible. Contrariedad.',
            desc_invertida: 'Represión continua. Vida rutinaria. Bloqueado en situación penosa.'
        },
        {
            nome: 'La Estrella',
            image: '',
            representa: 'La Estrella simboliza la Esperanza.',
            descricao: 'Fé. Inspiración. Perspectivas brillantes. Obtiene la mezcla del pasado y del presente. Placer. Oportunidad que promete.',
            desc_invertida: 'Esperanzas perdidas. Decepción. Falta de oportunidad. Obstinación.'
        },
        {
            nome: 'La Luna',
            image: '',
            representa: 'La Luna simboliza la Inspiración.',
            descricao: 'Decepción. Crepúsculo. Oscuridad, Engaño. Precaución Mensaje. Malas influencias. Motivos secretos. Egoismo. Astucia. Falsas promesas. Desgracia. Difamación. Calumnia. Obligación, Explotación. Peligro.',
            desc_invertida: 'Decepción insignificante, advertida antes de suceder el daño. Errores insignificantes. Superación de malas tentaciones. Abusar de alguien.'
        },
        {
            nome: 'El Sol',
            image: '',
            representa: 'El Sol significa la Paz del Espíritu.',
            descricao: 'Satisfacción. Realización. Estado contento. Éxito. Relaciones favorables. Amor. Alegría. Devoción. Sentimientos altruistas. Compromiso. Augurios favorables. Un buen amigo. Espiritu elevado. Calor. Sinceridad. Logros en las artes. Celebración.',
            desc_invertida: 'Desgracia. Soledad. Proyectos anulados. Futuro sombrío. Falta de amistad.'
        },
        {
            nome: 'El Juicio',
            image: '',
            representa: 'El Juicio simboliza el Espíritu dotado de Conciencia Cósmica.',
            descricao: 'Expiación, Juicio. Posibilidad de que el comportamiento actual frente a los otros sea injusto y desagradable. Rejuvenecimiento. Adelanto. Deseo de inmortalidad. Posibilidad de que alguien abuse de uno y que en el futuro se arrepienta. Sentencia legal en su proprio favor.',
            desc_invertida: 'Retraso. Disgusto. Incapacidad de comprender los hechos. Indecisión. Divorcio, Robo. Enajenación de afecto.'
        },
        {
            nome: 'El Mundo',
            image: '',
            representa: 'El Mundo simboliza el Espíritu que abandona el mundo material.',
            descricao: 'Adhesión. Realización. Perfección, Cambio definitivo. Resultado final detodos los esfuerzos. Éxito. Seguridad. Síntesis. Cumplimiento. Capacidad. Recompensa por un duro trabajo. El camino de la liberación Vida eterna.',
            desc_invertida: 'Imperfección. Incapacidad de finalizar la tarea iniciada. Falta de visión Fracaso. Contrariedad.'
        }
        




    ].map(item => {
        return { id: getNewId(), ...item, invertida: false };
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));