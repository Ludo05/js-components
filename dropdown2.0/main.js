function Dropdown(options) {
    this.options = options;

    window.getdd = (elem) => {
        let id = elem.closest('.dropdown').parentElement.id;
        return window.dropdowns[id];
    }

    this.init = () => {
        this.div = document.getElementById(this.options.id)

        let val = this.options.val;
        let html = `
<div class='dropdown'>
       <div class="dropdown-value">${val}</div>
       <div class="dropdown-arrow">▼</div>
       <div class="dropdown-panel">
            <div class="dropdown-items">
            
</div>
       </div>
</div>`

        this.div.innerHTML = html
        let div = this.div;

        this.div.style.display = 'inline-block'

        if (!window.dropdowns) window.dropdowns =  {};
        window.dropdowns[this.options.id] = this;
        this.items = div.querySelector('.dropdown-items')
        this.arrow = div.querySelector('.dropdown-arrow')
        this.value = div.querySelector('.dropdown-value')
        let data = this.options.data;
        html = ``
        data.forEach( dataItem => {
            html += `<div class="dropdown-item" onclick="var self=getdd(this);self.clicked(this);">${dataItem}</div>`
        })
        this.items.innerHTML = html;

        let self = this;

        document.addEventListener('click', () => {
            self.hide();
        })
        this.div.addEventListener('click', () => {
            event.stopPropagation();
            if(self.appear) {
                self.hide()
            } else {
                self.show()

            }
        })
    }

    this.show = () => {

        for(let dd in window.dropdowns) {
            window.dropdowns[dd].hide();
        }
        this.appear = true;
        this.items.style.transform = 'translate(0,0)';
        this.arrow.innerHTML = '▽'

    }

    this.hide = () => {

        if(!this.appear) return;
        this.appear = false;
        this.items.style.transform = 'translate(0,-200px)';
        this.arrow.innerHTML = '▼'
    }

    this.clicked = (elem) => {
        event.stopPropagation()
        this.hide();
        let selected = elem.innerHTML;
        this.value.innerHTML = selected;
    }



    this.init()
    return this;
}

const dd = new Dropdown({
    id: 'dd1',
    val: 'cat',
    data: ['one', 'two', 'three', 'four']
})
