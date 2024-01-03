const ColorSelect = () => {
    const cores = [
        '#668D3C',
        '#613318',
        '#8F3B1B',
        '#B99C8B',
        '#404F24',
    ];
    
    const indice = Math.floor(Math.random() * cores.length);

    return cores[indice];
}

export default ColorSelect;