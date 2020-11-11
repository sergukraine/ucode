var varNumber = 12345;
var bigintNumber = 1234567890123456789012345678901234567890n;
var varString = "String";
var varBoolean = true;
var varNull = null;
var varUndefined;
var varObject = Math;
var varSymbol = Symbol("id");
function myFunc(){
    alert("myFunc")
}
alert("varNumber is " + typeof(varNumber)+
"\nbigintNumber is " + typeof(bigintNumber)+
"\nvarString is " + typeof(varString)+
"\nvarBoolean is " + typeof(varBoolean)+
"\nvarNull is " + typeof(varNull)+
"\nvarUndefined is " + typeof(varUndefined)+
"\nvarObject is " + typeof(varObject)+
"\nvarSymbol is " + typeof(varSymbol)+
"\nmyFunc is " + typeof(myFunc));