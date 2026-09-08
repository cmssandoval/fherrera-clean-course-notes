(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService {

        private httpAdapter: Object = {};

        getProduct( id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
        
    }

    class EmailSender {
        private originEmail: string = 'asdasdas@asd.asd';
            
        sendEmail( emailList:string[], message: string ) {
            console.log('Enviando correo a los clientes', emailList, message);
        }
    
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private emailSender: EmailSender;
    
        constructor( productService: ProductService, emailSender: EmailSender ){
            this.productService = productService;
            this.emailSender = emailSender;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients( emailList:string[], message: string ) {
            this.emailSender.sendEmail( emailList, message );
        }

    }

    class CartBloc{

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }

    }
    
    const productService = new ProductService();
    const emailSender = new EmailSender();

    // Dependencies Injection keep each class with a single responsibility.
    const productBloc = new ProductBloc( productService, emailSender);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    emailSender.sendEmail(['asdasd@gmail.com'], 'Hola clientes');
    cartBloc.addToCart(10);

})();