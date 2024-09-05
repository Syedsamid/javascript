/*

1
1 2
1 2 3

*/
//Method 1:

// let N=3;
// let output = ""
// for(let i=1; i<=N; i++){
//         output += i + " "
//     console.log(i,"=>", output)
// }

// Method 2:
/*
let n=3
for (let i = 1; i <= n; i++) {
    let a = '';
    for (let j = 1; j <= i; j++) {
        a += `${j}`;

        console.log(`i:${i} j:${j} value:${a}`)
     }
      console.log(a)
  }
      */
  

  //i have practic it
  /*
    let number = 1;
    let row = 0;
    for (let i = 1; i <= row; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += number + ' ';
            number++;
        }
        console.log(row.());
    }
        */

/*
    let n=5
    let num = 1;
for (let i = 1; i <= n; i++) {
    let a = '';
    for (let j = 1; j <= i; j++) {
        a += `${num}`;
        num++;

        //console.log(`i:${i} j:${j} value:${a}`)
     }
      console.log(a)
  }
      */


//   console.log(String.fromCharcode(65))
//   console.log(String.fromCharcode(66))
//   console.log(String.fromCharcode(67))

/*
  let n=3
for (let i = 1; i <= n; i++) {
    let a = '';
    for (let j = 0; j <= i; j++) {
        a += '';
       a += `${String.fromCharCode(65 + j)}`;

       //console.log(65 + j,a)

        //console.log(`i:${i} j:${j} value:${a}`)
     }
     console.log('---------------------')
      console.log(a)
  }
      */
/*

  let n=3
for(let i=1;i<=n;i++){
     for(let j=1;j<=i;j++){
        console.log("* ")
     }
     console.log("\n")

}
     */
let n = 3;
for (let i = n; i >= 1; i--) { //i => no of lines
    let a = '';

    //first triangle #
    for (let j = 0; j < i-1; j++) { // #
        a += `  `;
    }

    //second triangle *
    for (let k=n; k>=i; k--){ // *
        a += `* `;
    }
    // console.log("-------------")
    console.log(a)
}




  
