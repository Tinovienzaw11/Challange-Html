function getIntersection(array1, array2) {
    return array1.filter(function(item) {
        return array2.indexOf(item) !== -1;
    });
}
const tari = ['Bali', 'Lombok', 'Labuan Bajo'];
const sastri = ['Surabaya', 'Bali', 'Lombok' ];
const tripDestination = getIntersection(tari, sastri);