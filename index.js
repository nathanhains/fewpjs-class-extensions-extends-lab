class Polygon{
    constructor(arrayOfSides){
        this.arrayOfSides = arrayOfSides
    }

    get countSides() {
        return this.arrayOfSides.length
    }

    get perimeter(){
        return this.arrayOfSides.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){

        let side1 = this.arrayOfSides[0]
        let side2 = this.arrayOfSides[1]
        let side3 = this.arrayOfSides[2]

        if((side1 + side2 < side3)|| (side2 + side3 < side1) || (side3 + side1 < side2)) {
            return false
        }else{
            return true
        }
    }
}

class Square extends Polygon{
    get area(){
        return (this.arrayOfSides[0]*this.arrayOfSides[1])
    }

    get isValid(){
        if(this.arrayOfSides.every( (val, i, arr) => val === arr[0] ) ){
            return true
        }else{
            return false
        }
    }
}