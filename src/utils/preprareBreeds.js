export const preprareBreeds= items => {
    const preparedList = items && Object.entries(items).map(item => {
        const preparedBreeds = [];
        const hasSubBreeds = item[1].length < 1;
        hasSubBreeds ?
            preparedBreeds.unshift(item[0])
            : item[1].map(el => preparedBreeds.unshift(`${item[0]}-${el}`));
        
        return preparedBreeds;
    });
    return preparedList && preparedList.flat();
}
