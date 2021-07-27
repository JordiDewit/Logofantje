import { Materiaal } from "./materiaal/materiaal.model";

const JsonMateriaal = [
    {
        naam: 'spel 1',
        datum: '2020-02-07T18:25:43.511Z',
        thema: 'Herfst',
        leergebied: 'Rekenen',
        foto: './assets/images/tm1.JPG',
        pdfLink: 'dit is de link van de pdf'
    },
    {
        naam: 'spel 2',
        datum: '2020-02-07T18:25:43.511Z',
        thema: 'Kerstmis',
        leergebied: 'Spellen',
        foto: './assets/images/tm1.JPG',
        pdfLink: 'dit is de link van de pdf'
    },
    {
        naam: 'spel 3',
        datum: '2020-02-07T18:25:43.511Z',
        thema: 'Zomer',
        leergebied: 'Lezen',
        foto: './assets/images/tm1.JPG',
        pdfLink: 'dit is de link van de pdf'
    },
    {
        naam: 'spel 4',
        datum: '2020-02-07T18:25:43.511Z',
        thema: 'Pasen',
        leergebied: 'Lezen',
        foto: './assets/images/tm1.JPG',
        pdfLink: 'dit is de link van de pdf'
    },
    {
        naam: 'spel 5',
        datum: '2020-02-07T18:25:43.511Z',
        thema: 'Sinterklaas',
        leergebied: 'Taal',
        foto: './assets/images/tm1.JPG',
        pdfLink: 'dit is de link van de pdf'
    }
];

export const MATERIAAL: Materiaal[] = JsonMateriaal.map(Materiaal.fromJson);