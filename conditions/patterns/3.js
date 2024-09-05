

/*
AB
CDE
FGHI
*/

let num1 = 3
let num2 = 65
for (let i = 1; i <= num1; i++) {
    let a = '';
    for (let j = 0; j <= i; j++) {
       a += '';
       a += `${String.fromCharCode(num2)}`;
       num2++;

       //console.log(65 + j,a)

        //console.log(`i:${i} j:${j} value:${a}`)
     }
     //console.log('---------------------')
      console.log(a)
  }



// errer

// let n=3
// let num=a
// for (let i = 1; i >= n; i--) {
//     let a = '';
//     for (let j = 0; j < i; j++) {
//         a += '';
//        a += `${String.fromCharCode(num)}`;
//        a+= `* `;
//     }

//        //console.log(65 + j,a)

//         //console.log(`i:${i} j:${j} value:${a}`)
//       console.log(a)
//   }


/*

       *
     * *
   * * *

*/
/*
let n = 3;

for (let i = n; i>=1; i--){ //i => no of lines
    let a= '';

    //first triangle #
    for (let j = 0; j < i-1; j++){ // #
        a += ' ';
    }

    //second triangle *
    for (let k=n; k>=i; k--){
        a += '* ';
    }

    console.log(a)
}

*/