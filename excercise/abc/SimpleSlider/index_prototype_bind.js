window.addEventListener("load", function () {
    function Slider() {
        console.log(this);
        this.sliderMain = document.querySelector(".slider-main");
        this.sliderItems = document.querySelectorAll(".slider-item");
        this.nextBtn = document.querySelector(".slider-next");
        this.prevBtn = document.querySelector(".slider-prev");
        this.dotItems = document.querySelectorAll(".slider-dot-item");
        this.sliderItemWidth = this.sliderItems[0].offsetWidth;
        this.slidesLength = this.sliderItems.length;
        this.postionX = 0;
        this.index = 0;

        this.nextBtn.addEventListener("click", function (e) {
            console.log(this);
            handleChangeSlide(1,e);
        });

        this.prevBtn.addEventListener("click", function (e) {
            handleChangeSlide(-1,e);
        });
        
        [...this.dotItems].forEach((item) =>
            item.addEventListener("click", function (e) {
                handleChangeDots(e);
            })
        );
    }
    const slider = new Slider();

    function abc(){
        console.log(this);
        [...this.dotItems].forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        this.index = slideIndex;
        this.postionX = -1 * this.index * this.sliderItemWidth;
        this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
    }
    const handleChangeDots = abc.bind(slider);

    function abcd(direction,e){
        console.log(e);
        if (direction === 1) {
            if (this.index >= this.slidesLength - 1) {
                this.index = this.slidesLength - 1;
                return;
            }
            this.postionX = this.postionX - this.sliderItemWidth;
            this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
            this.index++;
        } else if (direction === -1) {
            if (this.index <= 0) {
                this.index = 0;
                return;
            }
            this.postionX = this.postionX + this.sliderItemWidth;
            this.sliderMain.style = `transform: translateX(${this.postionX}px)`;
            this.index--;
        }
        [...this.dotItems].forEach((el) => el.classList.remove("active"));
    }
    // handleChangeSlide ~~ abcd(direction,e)
    const handleChangeSlide = abcd.bind(slider);
});
