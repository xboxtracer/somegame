export default class gameFieldRendering {
    constructor(size) {
        this.divContainer = document.querySelector('.flex-container'),
        this.size = size,
        this.render()
    }
    render() {
        let i = 0;
        while (i < this.size) {
            i++;
            const field = document.createElement('div');
            field.className = 'flex-inner';
            this.divContainer.appendChild(field);
        };
    }
}