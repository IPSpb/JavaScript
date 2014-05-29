/**
 * Created by IPopov on 29.05.14.
 */
var obj = {
    str : 'str',
    func : function() {
        console.log( this.str );
    }
};

console.log( obj.str );
console.log( obj.fff || 'name' ); // Если нет свойства то по умолчанию будет name
console.log( obj['str'] );
console.log( typeof obj.str );

obj.newvariable = 'New variable';
obj.str = "new str";
console.log( obj );

var a = {prop: 1}, b = {prop: 2}, c ={prop: 3};
console.log(a, b ,c);

a = b = c = {prop: 'allTheSame'};
console.log(a, b, c);
//
//delete obj.func;
//console.log(obj);

obj.func();

