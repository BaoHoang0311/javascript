
window.addEventListener('load', function () {
    function Slider() {

        this.img = document.querySelectorAll('img');
        this.sliderprev = document.querySelector('.slider-prev');
        this.slidernext = document.querySelector('.slider-next');
        this.slideritem = document.querySelectorAll('.slider-item');
        this.ul = document.querySelector('.slider-dots');
        this.idxCount = 0;
        this.custom_style = {
            height: '100%',
            width: '100%',
            flex: '1 0 100%',
        }

        this.idx = 0;
        [...this.img].forEach(x => {
            var li = document.createElement("li");
            li.classList.add("slider-dot-item");
            li.setAttribute("data-index", this.idx++);
            this.ul.append(li);
        });

        this.sliderdotitem = document.querySelectorAll('.slider-dot-item');
        [...this.sliderdotitem].forEach(x => {
            if (x.getAttribute('data-index') == 0) {
                x.classList.add('active');
            }
        })

        this.slidernext.addEventListener('click', () => {
            console.log(this);
            [...this.slideritem].forEach(x => x.removeAttribute('style'));
            this.assignCustomstyle(false,'tang');
            this.customdot();
        })

        this.sliderprev.addEventListener('click', () => {
            [...this.slideritem].forEach(x => x.removeAttribute('style'));
            this.assignCustomstyle(false,'das');
            this.customdot()
        })
    }

    Slider.prototype.assignCustomstyle = function (first, str) {
        if (first) {
            Object.assign(document.querySelector('.slider-main :nth-child(1)').style, this.custom_style);
        }
        else {
            Object.assign(this.slideritem[this.handleABC(prev = str)].style, this.custom_style);
        }
    }
    Slider.prototype.handleABC = function (prev = 'tang') {
        if (prev == 'tang') {
            if (this.idxCount == this.img.length - 1) {
                this.idxCount = 0;
            }
            else {
                ++this.idxCount;
            }
        }
        else {
            if (this.idxCount == 0) {
                this.idxCount = this.img.length - 1;
            }
            else {
                --this.idxCount;
            }
        }
        return this.idxCount;
    }
    Slider.prototype.customdot = function () {
        [...this.sliderdotitem].forEach(x => x.classList.remove('active'));
        this.sliderdotitem[this.idxCount].classList.add('active');
    }

    let g = new Slider();
    g.assignCustomstyle(first = true);

})
