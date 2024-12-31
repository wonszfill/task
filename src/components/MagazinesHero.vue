<template>
  <section class="magazines-hero">
    <div class="magazines-hero__watermark-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="448.706"
        height="472.241"
        viewBox="0 0 448.706 472.241"
        class="magazines-hero__watermark"
      >
        <path
          fill="none"
          stroke="#fff"
          d="M560.519,508.536c-10.745,14.054-33.066,29.751-72.738,29.751-54.562,0-86.8-24.794-86.8-67.769v-177c-.83-57.03-27.278-57.848-41.327-57.848H275.433c-4.128,0-4.952.819-4.952,2.473V384.46c0,25.624.824,31.417,8.261,31.417h32.242c5.788,0,6.612,2.473,6.612,4.946s-.824,4.139-6.612,4.139H121.69c-6.612,0-7.442-1.66-7.442-4.139s.83-4.946,7.442-4.946h32.236c6.612,0,7.442-5.793,7.442-31.417V116.64c0-25.618-.83-30.57-7.442-30.57H121.69c-6.612,0-7.442-2.5-7.442-4.969s.83-4.139,7.442-4.139H263.039c5.782,0,7.442,1.66,7.442,4.139V224.917c0,1.66.824,3.315,4.952,3.315h71c25.624,0,34.715-10.74,34.715-38.854,0-23.145-7.442-43.811-7.442-66.945,0-38.024,30.587-55.387,67.786-55.387,33.884,0,71.084,22.321,71.084,61.174,0,28.916-22.32,48.769-50.429,48.769-26.448,0-51.242-17.357-51.242-45.466,0-22.326,19.836-29.751,19.836-40.514,0-7.436-6.612-10.734-13.224-10.734-19.012,0-34.72,17.363-34.72,38.842,0,24.788,7.442,47.945,7.442,72.738,0,14.049-4.958,28.108-16.533,36.375v.819c61.169-5.788,135.561,25.635,135.561,100.858V500.27c0,9.927,1.654,21.49,15.714,21.49,10.74,0,22.315-8.266,28.1-17.357,1.655-3.3,3.309-4.958,7.442-2.479,1.649,1.654,2.479,3.314,0,6.612"
          transform="translate(-113.748 -66.547)"
        />
      </svg>
    </div>

    <div class="container magazines-hero__container">
      <div class="magazines-hero__description">
        <h1>Czasopisma</h1>

        <p class="magazines-hero__description-highlight">
          Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym razem
          poświęcony jest w dużej części zmianom w podatkach w roku 2019.
        </p>
        <p>
          Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów
          używania samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczące poboru podatku
          u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.
        </p>
      </div>

      <div class="magazines-hero__image">
        <img
          class="magazines-hero__image-front"
          src="/Hero1.png"
          width="325.47"
          height="408.37"
          loading="lazy"
          alt="Czasopisma"
        />
        <img
          class="magazines-hero__image-back"
          src="/Hero2.png"
          width="246.37"
          height="310.95"
          loading="lazy"
          alt="Czasopisma"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.magazines-hero {
  background-color: $primary;
  color: #fff;
  margin-bottom: 7.7194rem;
  position: relative;

  &__container {
    padding: 4rem 0 3.75rem;
    display: flex;
    position: relative;
  }

  &__watermark-container {
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  &__watermark {
    position: absolute;
    opacity: 0.2;
    top: -4.625rem;
    left: 5.25rem;
  }

  &__description {
    max-width: 35.125rem;
    font-size: 0.875rem;
    color: $light-gray;
    font-weight: 300;
    line-height: 1.5rem;

    h1 {
      margin-top: 0;
      font-size: 3.5rem;
      font-weight: bold;
      line-height: 3.75rem;
      margin-bottom: 2rem;
    }
  }

  &__description-highlight {
    font-weight: 400;
    color: #fff;
    margin-bottom: 1.8rem;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  &__image-front {
    position: absolute;
    right: 5.5rem;
    right: 11.9081rem;
    top: 3.4375rem;
    z-index: 2;
    box-shadow: 20px 20px 40px #00000026;
  }

  &__image-back {
    position: absolute;
    right: 5.5rem;
    top: 5.41rem;
    z-index: 1;
    box-shadow: 20px 20px 40px #00585126;
  }
}
</style>
