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

    ].map(item => {
        return { id: getNewId(), ...item, invertida: false };
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));