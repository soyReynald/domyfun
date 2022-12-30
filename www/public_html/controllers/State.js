class State {
    static statesCounter = 0;

    constructor(name, image, type) {
        this._name = name;
        this._image = image;
        this._type = type;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
    
    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    render() {
        const state = document.createElement("div");
        state.classList.add("state");
        if (this._type === "hotel") {
            state.innerHTML = `<a href="#" class="group">
                <div class="listing-box col-lg-12 col-md-6">
                    <div class="listing-feature">
                        <div class="img">
                            <div class="img-slider dots-3 owl-carousel">
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-1.jpg&quot;); background-size: cover;">
                                </div>
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-2.jpg&quot;); background-size: cover;">
                                </div>
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-3.jpg&quot;); background-size: cover;">
                                </div>
                            </div>
                            <div class="white-color review">                                               
                                <span class="rating">
                                    <span class="star active"></span>
                                    <span class="star active"></span>
                                    <span class="star active"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </span>
                                <!-- <span class="fsz-12 fw-600"> 3250 REVEW </span>  -->
                            </div>
                        </div>
                        <ul class="hotel-feature">
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-15.png"> <span>CAR PARK</span> 
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-16.png"> <span>SWIMMING POOL</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-17.png"> <span>RESTAURANT</span> 
                                        </div>
                                    </div>
                                </div> 
                            </li>
                            <li> 
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-18.png"> <span>FITNESS CENTER</span> 
                                        </div>
                                    </div>
                                </div>  
                            </li>
                        </ul>
                    </div>
                    <div class="listing-info">
                        <div class="detail">
                            <h2 class="fsz-20 fw-600 hotel-title">${this._name}</h2>
                            <div class="">
                                El exclusivo Holiday Inn - Lima Airport está ubicado en Lima, justo frente al aeropuerto, y ofrece alojamiento, restaurante, aparcamiento privado gratuito, centro de fitness y bar.
                            </div>

                            <div class="col-md-12" style="padding-left: 0px;margin-top: 10px;">
                                <a href="#" class="fsz-11 fw-600 hotel-link-website col-md-12" style="float: right; text-align: end;"> <i class="fa fa-link theme-color hotel-link"></i> HOTEL WEBSITE </a>

                                <div class="form-group col-md-4" style="float: right;">                                               
                                    <button class="theme-btn" data-width="100%" type="submit"> Ver Más </button>                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`;
        } else {
            state.innerHTML = `<a href="#" class="group">
                <div class="listing-box col-lg-12 col-md-6">
                    <div class="listing-feature">
                        <div class="img">
                            <div class="img-slider dots-3 owl-carousel">
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-1.jpg&quot;); background-size: cover;">
                                </div>
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-2.jpg&quot;); background-size: cover;">
                                </div>
                                <div class="item bg-img" style="background-image: url(&quot;assets/images/gallery/370x300-3.jpg&quot;); background-size: cover;">
                                </div>
                            </div>
                            <div class="white-color review">                                               
                                <span class="rating">
                                    <span class="star active"></span>
                                    <span class="star active"></span>
                                    <span class="star active"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </span>
                                <!-- <span class="fsz-12 fw-600"> 3250 REVEW </span>  -->
                            </div>
                        </div>
                        <ul class="hotel-feature">
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-15.png"> <span>CAR PARK</span> 
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-16.png"> <span>SWIMMING POOL</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-17.png"> <span>RESTAURANT</span> 
                                        </div>
                                    </div>
                                </div> 
                            </li>
                            <li> 
                                <div class="tbl-wrp">
                                    <div class="text-middle">
                                        <div class="tbl-cell">
                                            <img alt="" src="assets/images/icons/icon-18.png"> <span>FITNESS CENTER</span> 
                                        </div>
                                    </div>
                                </div>  
                            </li>
                        </ul>
                    </div>
                    <div class="listing-info">
                        <div class="detail">
                            <h2 class="fsz-20 fw-600 hotel-title">${this._name}</h2>
                            <div class="">
                                El exclusivo Holiday Inn - Lima Airport está ubicado en Lima, justo frente al aeropuerto, y ofrece alojamiento, restaurante, aparcamiento privado gratuito, centro de fitness y bar.
                            </div>

                            <div class="col-md-12" style="padding-left: 0px;margin-top: 10px;">
                                <a href="#" class="fsz-11 fw-600 hotel-link-website col-md-12" style="float: right; text-align: end;"> <i class="fa fa-link theme-color hotel-link"></i> HOTEL WEBSITE </a>

                                <div class="form-group col-md-4" style="float: right;">                                               
                                    <button class="theme-btn" data-width="100%" type="submit"> Ver Más </button>                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`;
        }
        
        return state;
    }
    // old ways but still valid and nice to have (toString rewritting)
    toString() {
        return `State: ${this._idState}, ${this._name}, ${this._price}, counter: ${State.statesCounter}`;
    }
}

export default State;
