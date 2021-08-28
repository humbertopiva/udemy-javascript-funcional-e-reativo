Number.prototype.log = function() { console.log(this) }
Function.prototype.log = function() { console.log(this.toString()) }


let r

const I = a => a

I(3).log()
I(I).log()

const SELF = f => f(f)

SELF(I).log()

const PRI = a => _ => a

PRI(7)(11).log()


const ULT = _ => b => b

ULT(7)(11).log()


const TRO = f => a => b => f(b)(a)

TRO(ULT)(7)(11).log()

TRO(PRI)(6)(12).log()

const ULT2 = a => b => TRO(PRI)(a)(b)

ULT2(13)(20).log()

// boolean TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

T.log()
F.log()

// NOT
const NOT = a => a(F)(T)

NOT(F).log()

// AND

const AND = a => b =>  a(b)(F)

AND(T)(T).log()

// OR

const OR = a => b => a(T)(b)

OR(T)(F).log()

// EQ

const EQ = a => b => a(b)(NOT(b))

EQ(T)(T).log()

EQ(F)(F).log()

EQ(T)(F).log()

EQ(F)(T).log()

// XOR 

const XOR = a => b => NOT(EQ(a)(b))

XOR(T)(T).log()
XOR(F)(F).log()
XOR(T)(F).log()
XOR(F)(T).log()