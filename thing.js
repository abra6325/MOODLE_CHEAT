// Get all correct on correct page
let i = document.getElementsByClassName("answer")

let b = []

for (let n of i) {

    let found = false;

    for (let x of n.children){

        if (x.classList.contains("correct")) {

            b.push(x.children[1].children[1].children[0].innerHTML); found = true;}

        else if (x.classList.contains("incorrect")) {b.push(null); found = true;}}

    if (!found) {

        b.push(null)

    }}

console.log(b)



// Fetch All Options

b = []

for (let n of i) {

    opt = []

    for (let x of n.children){

        opt.push("'" + x.children[1].children[1].children[0].innerHTML + "'")

    }

    b.push("[" + opt.toString() + "]")

}

console.log("[" + b.join(",") + "]")




// Copy and set it to q on answer page




// Print Correct Answer

// q = Array(4)

// b = Correct Answer String




for (let i = 0; i < q.length; i ++) {

    let cor = b[i]

    let d = 0

    if (cor == null) {

        console.log(i + 1 + " think")

        continue

    }

    for (let x of q[i]) {

        d ++

        if (cor == x) {

            if (d == 1) console.log(i + 1 + "A")

            else if (d == 2) console.log(i + 1 + "B")

            else if (d == 3) console.log(i + 1 + "C")

            else if (d == 4) console.log(i + 1 + "D")

            break

        }

    }

}




// Generate Answers for autofill

let f = ""

for (let i = 0; i < q.length; i ++) {

    let cor = b[i]

    let d = 0

    if (cor == null) {

        f += "0"

        continue

    }

    let found = false;

    for (let x of q[i]) {

        d ++

        if (cor == x) {

            f += d

            found = true

            break

        }

       

    }

    if (!found) f += "N"

}

console.log(f)

// copy the printed string and set as variable "key" on question page.




// AutoFill

let cc = document.getElementsByClassName("answer")

let l = []

let o = 0

for (let i of key) {

    o ++;

    let d = parseInt(i)

    if (isNaN(d) || d == 0) {

        l.push(o)

        continue

    }

    d --

    for (let c = 0; c < cc[o - 1].children.length; c ++) {

        let dd = cc[o - 1].children[c].children[0]

        if (dd.value == d) {

            dd.checked = "checked"

        }

    }

}

if (l.length != 0) {

    alert(l.toString() + ": these questions were skipped because they were initially wrong or needs more reference and double check")

}
