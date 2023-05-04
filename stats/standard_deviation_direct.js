const fre =[7,10,14,12,7];
const mid =[5,15,25,35,45];
let fm = []
let fm2 = []

for (let i = 0;i<fre.length;i++){
  fm.push(fre[i]*mid[i])
}

for (let j = 0;j<fre.length;j++){
  fm2.push(fm[j]*mid[j])
}
console.log(`value of fm --> ${fm}\n `)
console.log(`value of fm^2 --> ${fm2}\n `)
let summ_fm =0
let summ_fm2 = 0
fm.forEach(n=>summ_fm+=n)
console.log(`T fm --> ${summ_fm}`)
fm2.forEach(ans=>summ_fm2+=ans)
console.log(`T fm2 --> ${summ_fm2}`)
let N =0
fre.forEach(f=>N+=f)
console.log(`N--> ${N}`)
let fm_N = summ_fm / N
let sd = Math.sqrt((summ_fm2/N)-((fm_N) *(fm_N)))
let mean = summ_fm/N
let cv = (sd/mean)*100

console.log(`Mean --> ${mean}`)
console.log(sd)
console.log(`cv --> ${cv}`)
