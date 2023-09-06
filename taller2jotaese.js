/*sistema de ventas, vector ventas que tiene atributos de: factura,fecha,subtotal,

funciones, buscar por factura, filtrar por total (min max), prom ventas.*/


let sisventas={
    ventas:[],
    agregarfactura:function(fact){
        this.ventas.push(fact);
    },
    buscarporfactura:function(id){
        return this.ventas.find(index=>index.idfact==id);
     },
    filtroportotal:function(preciomin,preciomax){
        const res=this.ventas.filter(index=>index.total>preciomin && index.total<preciomax)
        return res;
    },
    promvent:function(){
        let total2=0
    for(let i in this.ventas){
        total2+=this.ventas[i].total
    }
    return total2/this.ventas.length
}
}
let obj1={
    idfact:1001,
    fecha: "10/12/2023",
    subtotal: 50000,
    iva: 9500,
    total: 59500,
}
let obj2={
    idfact:1002,
    fecha: "9/11/2023",
    subtotal: 10000,
    iva: 1900,
    total: 11900,
}
let obj3={
    idfact:1003,
    fecha: "8/17/2023",
    subtotal: 80000,
    iva: 15200,
    total: 95200,
}
sisventas.agregarfactura(obj1)
sisventas.agregarfactura(obj2)
sisventas.agregarfactura(obj3)
console.log(sisventas.ventas)
console.log(sisventas.buscarporfactura("1001"))
console.log(sisventas.filtroportotal(10000,20000))
console.log(sisventas.promvent())

let buscar_factura=prompt("INGRESE ID DE LA FACTURA QUE DESEA VER")
console.log(sisventas.buscarporfactura(buscar_factura))

let rango_precio1=prompt("INGRESE EL RANGO MINIMO")
let rango_precio2=prompt("INGRESE EL RANGO MAXIMO")
console.log(sisventas.filtroportotal(rango_precio1,rango_precio2))
