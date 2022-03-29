//Código js del menú 
const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// version responsive
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// funciones boton departamentos
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// funciones boton regresar categoria
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// funciones boton regresar categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});


//De aqui en adelante la seccion de productos y carrito

document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async() => {
	try{
		const res = await fetch('../api.json');
		const data = await res.json ();
		pintarCard(data)

	}catch(error){
		console.log(error);
	}
};

let containerShoppin = document.getElementById('divProductos')

const pintarCard = data => {
	data.forEach(productos => {
		containerShoppin.innerHTML+= `
		<div id="card_1" class="card shadow border-primary mb-3 rounded"  style="max-width: 20rem;">
            <h5 class="card-title mb-1 pt-2 text-center">${productos.title}</h5>
            <img src="../img/${productos.id}.png" class=" mx-auto imgCard"  alt="...">
            <div class="card-body">
                <p class="card-text description"></p>
                <h5 class="text-primary">Precio: <span class="precio">$ ${productos.price}</span></h5>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary button" ${productos.id} >Añadir a Carrito</button>
                </div>
            </div>
        </div>
		<div class="card shadow border-primary mb-3 ${productos.sub_category} rounded" id="card_2" style="max-width: 20rem;">
            <h5 class="card-title mb-1 pt-2 text-center">${productos.title}</h5>
            <img src="../img/${productos.id}.png" class=" mx-auto imgCard"  alt="...">
            <div class="card-body">
                <p class="card-text description"></p>
                <h5 class="text-primary">Precio: <span class="precio">$ ${productos.price}</span></h5>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary button" ${productos.id} >Añadir a Carrito</button>
                </div>
            </div>
        </div>
		`
	})
	const btnCelulares = document.getElementById('btn_celulares'),
		btnAcesoriosCelulares = document.getElementById('btn_accesorios_celulares'),
		btnComponentesParaPc = document.getElementById('btn_componentes_para_pc'),
		btnImpresion = document.getElementById('btn_impresion'),
		btnPcEscritorio = document.getElementById('btn_pc_escritorio'),
		btnNotebooks = document.getElementById('btn_notebook'),
		btnCamarasDigitales = document.getElementById('camaras_digitales'),
		btnAccesoriosCamaras = document.getElementById('accesorios_camaras'),
		btnAudio = document.getElementById('btn_audio'),
		btnAccesoriosAudio = document.getElementById('btn_accesorios_audio_y_video'),
		btnComponentesElectronicos = document.getElementById('btn_componentes_electronicos'),
		btnDrones = document.getElementById('btn_drones_y_accesorios'),
		btnVideoJuegos = document.getElementById('btn_videojuegos'),
		btnParaPlaystation = document.getElementById('btn_para_playstation'),
		btnSansung = document.getElementById('btn_samsung'),
		btnPhilips = document.getElementById('btn_philips'),
		btnLg = document.getElementById('btn_lg'),
		btnOtrasMarcas = document.getElementById('btn_otras_marcas'),
		btnTodos= document.getElementById('btn_otras_marcas')
		
	btnCelulares.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18' )){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo1');
			}
		});
	});
	btnAcesoriosCelulares.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18' )){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo2');
			}
		});
	});
	btnComponentesParaPc.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18' )){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo3');
			}
		});
	});
	btnImpresion.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18' )){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo4');
			}
		});
	});
	btnPcEscritorio.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18' )){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo5');
			}
		});
	});
	btnNotebooks.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo6');
			}
		});
	});
	btnCamarasDigitales.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo7');
			}
		});
	});
	btnAccesoriosCamaras.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo8');
			}
		});
	});
	btnAudio.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo9');
			}
		});
	});
	btnAccesoriosAudio.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo10');
			}
		});
	});
	btnComponentesElectronicos.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo11');
			}
		});
	});
	btnDrones.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo12');
			}
		});
	});
	btnVideoJuegos.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo13');
			}
		});
	});
	btnParaPlaystation.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo14');
			}
		});
	});
	btnSansung.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo15');
			}
		});
	});
	btnPhilips.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo16');
			}
		});
	});
	btnLg.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo17');
			}
		});
	});
	btnOtrasMarcas.addEventListener('click', (e) => {
		document.querySelectorAll('#card_1' ).forEach((elemento) => {
			elemento.classList.toggle('noMostrar')
		});
		document.querySelectorAll('#card_2' ).forEach((elemento) => {
			if(elemento.classList.contains('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18')){
				elemento.classList.remove('activo1', 'activo2', 'activo3', 'activo4', 'activo5', 'activo6', 'activo7', 'activo8', 'activo9', 'activo10', 'activo11', 'activo12', 'activo13', 'activo14', 'activo15', 'activo16', 'activo17', 'activo18');
			}else{
				elemento.classList.add('activo18');
			}
		});
	});
	
	
const clickButton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener( 'click', addToCarritoItem)
} )

function addToCarritoItem (e){
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle =item.querySelector('.card-title').textContent
    const itemPrice = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.imgCard').src
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1     
    }
    addItemCarrito(newItem)
}
function addItemCarrito(newItem){
    
   setTimeout(function() {
    swal("Felicidades!!!", " Tu producto a sido añadido al carrito", "success");
   })
  //Producto añadido al carrito

    const imputElemento = tbody.getElementsByClassName('input__elemento')

    for(let i=0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++
            const inputValue = imputElemento[i].value
            inputValue.value ++
            carritoTotal ()
            return null
        }
       
    }
    carrito.push(newItem);
    renderCarrito()
}
function  renderCarrito(){
   
    tbody.innerHTML =''
    carrito.map(item => {
        const tr = document.createElement('tr'); 
        tr.classList.add('itemCarrito');
        const content = `
        <th scope="row">Active</th>
        <td class="table__productos">
            <img class="imgTable" src=${item.img} alt="">
            <h6 class="title">${item.title} </h6>
        </td>
        <td class="table__precio"><p>${item.precio} </p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value= ${item.cantidad} class="input__elemento">
            <button type="button" class=" delete btn btn-primary">x</button>
        </td>
        `
        tr.innerHTML = content  
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito);   
    } )
    carritoTotal () 
}
function carritoTotal(){ 
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal');
    carrito.forEach((item) => { 
        const precio = Number (item.precio.replace("$" ,''))
        total = total + precio*item.cantidad    
    })
    itemCartTotal.innerHTML = `Total $${total} `
    addLocalStorage()
}
function  removeItemCarrito(e){
    const buttonDelete = e.target;
    const tr = buttonDelete.closest(".itemCarrito");
    const title = tr.querySelector('.title').textContent;
  
    for(let i=0; i<carrito.length; i++){
       
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }   
    tr.remove()
    carritoTotal()
}


function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));

    if(storage){
        carrito = storage;
        renderCarrito()
    }
}
}
