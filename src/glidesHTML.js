export default function(){
    const sliderContainer =  document.getElementById('sliderSection')
    

    const sliderHTML = `
    <h1 class="sliderSection__productNameRed">
          [product name]<span class="sliderSection__productName"> blend</span>
        </h1>

        <!-- all slides starts here ----------------------->
        <div class="glide" id="glideCarousel">
          <section class="glide--slidesWithDescription">
            <h2 class="glide__description">
              <span class="glide__bold">Metabolism Boosting</span
              ><br />These powerful superfoods ignite your metabolism and reduce
              bloating. They improve digestion and deliver the energy you need
              to get things done.
              <br />
              <span>Main Organic Ingredients:</span>
            </h2>
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <!-- slide one  -->
                <div class="glide__slide">
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/acai berry.png" alt="" />
                      <h4>organic acai berry</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/acacia gum.png" alt="" />
                      <h4>organic acacia gum</h4>
                    </div>
                  </div>
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/cinnamon bark.png" alt="" />
                      <h4>organic ceylon cinnamon bark</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/green tea.png" alt="" />
                      <h4>organic green tea</h4>
                    </div>
                  </div>
                </div>
                <!-- second slide -->
                <div class="glide__slide">
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/cinnamon bark.png" alt="" />
                      <h4>organic acai berry</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/acacia gum.png" alt="" />
                      <h4>organic acacia gum</h4>
                    </div>
                  </div>
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/acai berry.png" alt="" />
                      <h4>organic acai berry</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/green tea.png" alt="" />
                      <h4>organic green tea</h4>
                    </div>
                  </div>
                </div>
                <!-- third slide -->
                <div class="glide__slide">
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/acai berry.png" alt="" />
                      <h4>organic acai berry</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/acacia gum.png" alt="" />
                      <h4>organic acacia gum</h4>
                    </div>
                  </div>
                  <div class="glide__container">
                    <div class="glide__singleProduct">
                      <img src="/assets/cinnamon bark.png" alt="" />
                      <h4>organic acai berry</h4>
                    </div>
                    <div class="glide__singleProduct">
                      <img src="/assets/green tea.png" alt="" />
                      <h4>organic acacia gum</h4>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </section>

          <!-- slide navigation -->

          <section class="glide glide--navigationContainer">
            <div class="glide__navigation" data-glide-el="controls">
              <button
                class="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <img src="./assets/angle-left-solid.png" alt="back arrow" />
              </button>

              <div class="glide__progress" id="tracker">
                <img
                  src="./assets/Ellipse-Empty.png"
                  alt="slide off"
                  id="navigationImgOne"
                />
                <img
                  src="./assets/Ellipse-Empty.png"
                  alt="slide off"
                  id="navigationImgTwo"
                />
                <img
                  src="./assets/Ellipse-Empty.png"
                  alt="slide off"
                  id="navigationImgThree"
                />
              </div>

              <button
                class="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <img src="./assets/angle-left-solid.png" alt="next arrow" />
              </button>
            </div>
          </section>
        </div>

        <button class="sliderContainer__button">
          <h2>add to cart</h2>
        </button>
    
    `

    sliderContainer.insertAdjacentHTML('beforeend', sliderHTML )
}
