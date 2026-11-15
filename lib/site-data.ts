export const site = {
 name: 'Осер 2013', tagline: 'Қазақ тілді балабақша',
 headline: 'Әр баланың алғашқы қадамына қамқорлық',
 intro: 'Қарақыстақ ауылындағы балалардың бірге ойнап, үйреніп, өсуіне арналған орта',
 address: 'Алматы облысы, Жамбыл ауданы, Қарақыстақ ауылы, Бердіғұлов көшесі, 19А',
 about: '«Осер 2013» балабақшасы Қарақыстақ ауылында орналасқан. Мұнда балалар қазақ тілінде білім алып, жасына сәйкес төрт топта бірге ойнап, үйренеді. Күніне үш мезгіл тамақтану қарастырылған.',
 reel: 'https://www.instagram.com/reel/DZAXP9_MC3X/?mdxt=MWtndm1qdWhqcTVqeA==',
 phone: '', whatsapp: '', email: '', hours: '', instagram: '', legalName: '', documentsUrl: '', domain: '',
 media: { logo: '', hero: '', about: '', aboutType: 'image' as 'image' | 'video', poster: '' },
 groups: [
 { name: 'Құлыншақ', description: 'Мектепалды даярлық тобы', age: '5 жастан', motif: 'foal', color: 'peach' },
 { name: 'Балдаурен', description: 'Ересек тобы', age: '4 жастан', motif: 'sun', color: 'yellow' },
 { name: 'Балбөбек', description: 'Орта тобы', age: '3 жастан', motif: 'sprout', color: 'green' },
 { name: 'Бөбек', description: 'Кіші аралас топ', age: '2–3 жас', motif: 'bird', color: 'blue' }],
 meals: ['Таңғы ас', 'Түскі ас', 'Бесін ас'],
 facts: [{ label: 'Орналасуы', value: 'Қарақыстақ ауылы' }, { label: 'Оқыту тілі', value: 'Қазақ тілі' }, { label: 'Топ саны', value: '4 топ' }, { label: 'Тамақтану', value: 'Күніне 3 мезгіл' }],
 gallery: [] as { src: string; alt: string; position?: string }[],
 activities: [] as string[],
};
export const navigation = [{ id: 'about', label: 'Біз туралы' }, { id: 'groups', label: 'Топтар' }, { id: 'meals', label: 'Тамақтану' }, ...(site.gallery.length ? [{ id: 'gallery', label: 'Галерея' }] : []), ...(site.documentsUrl ? [{ id: 'documents', label: 'Құжаттар' }] : []), { id: 'contact', label: 'Байланыс' }];
