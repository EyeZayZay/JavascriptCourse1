namespace MyApp {

    class PetListController {
        public dogs;
        public bunnies;

        constructor() {
          this.dogs = [
            { id: 1, name: 'Rex', image: 'https://pbs.twimg.com/profile_images/621531738078969856/KePrZ2Rk.jpg' },
            { id: 2, name: 'Max', image: 'https://pbs.twimg.com/profile_images/707293435011575808/P_0lUm1R.jpg' },
            { id: 3, name: 'Bella', image: 'https://pbs.twimg.com/profile_images/616261201228464128/E7j8ho4W_400x400.jpg' }
          ];
          this.bunnies = [
            { id: 1, name: 'Buttercup', image: 'https://images-na.ssl-images-amazon.com/images/I/610tqHxj+LL._SL256_.jpg' },
            { id: 2, name: 'Cinnabun', image: 'https://at-cdn-s01.audiotool.com/2013/02/26/documents/csCEKYagXloFZUwjZ9Y7aUlZ6PGP/0/cover256x256-df6ac55d007f48aaa31b00bdf487e9e2.jpg' },
            { id: 3, name: 'Luna', image: 'https://pbs.twimg.com/profile_images/706564921258057729/Pk7hJe7X.jpg' }
          ];
        }
    }

    angular.module('PetApp').controller('PetListController', PetListController);

}
