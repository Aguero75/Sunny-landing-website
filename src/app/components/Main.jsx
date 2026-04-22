import React from 'react'

function Main() {
  return (
        <main>
      <!-- Transform brand section -->
      <div class="grid-section">
        <div class="grid-item">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" class="learn-more yellow-underline">LEARN MORE</a>
        </div>
        <div class="image-item">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="images/mobile/image-transform.jpg"
            />
            <img
              src="images/desktop/image-transform.jpg"
              alt="transform brand"
            />
          </picture>
        </div>
      </div>

      <!-- Stand out section (image left) -->
      <div class="grid-section">
        <div class="image-item">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="images/mobile/image-stand-out.jpg"
            />
            <img src="images/desktop/image-stand-out.jpg" alt="stand out" />
          </picture>
        </div>
        <div class="grid-item">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#" class="learn-more red-underline">LEARN MORE</a>
        </div>
      </div>

      <!-- Graphic design & Photography -->
      <div class="services-grid">
        <div class="service-card graphic-design">
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div class="service-card photography">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="testimonials">
        <h3>CLIENT TESTIMONIALS</h3>
        <div class="testimonial-cards">
          <div class="testimonial">
            <img src="images/image-emily.jpg" alt="Emily R." />
            <q
              >We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.</q
            >
            <div class="testimonial-name">Emily R.</div>
            <div class="testimonial-title">Marketing Director</div>
          </div>
          <div class="testimonial">
            <img src="images/image-thomas.jpg" alt="Thomas S." />
            <q
              >Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.</q
            >
            <div class="testimonial-name">Thomas S.</div>
            <div class="testimonial-title">Chief Operating Officer</div>
          </div>
          <div class="testimonial">
            <img src="images/image-jennie.jpg" alt="Jennie F." />
            <q
              >Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!</q
            >
            <div class="testimonial-name">Jennie F.</div>
            <div class="testimonial-title">Business Owner</div>
          </div>
        </div>
      </div>

      <!-- Image Gallery (4 images) -->
      <div class="gallery">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="images/mobile/image-gallery-milkbottles.jpg"
          />
          <img
            src="images/desktop/image-gallery-milkbottles.jpg"
            alt="milk bottles"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="images/mobile/image-gallery-orange.jpg"
          />
          <img
            src="images/desktop/image-gallery-orange.jpg"
            alt="orange slice"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="images/mobile/image-gallery-cone.jpg"
          />
          <img
            src="images/desktop/image-gallery-cone.jpg"
            alt="ice cream cone"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="images/mobile/image-gallery-sugar-cubes.jpg"
          />
          <img
            src="images/desktop/image-gallery-sugarcubes.jpg"
            alt="sugar cubes"
          />
        </picture>
      </div>
    </main>
  )
}

export default Main