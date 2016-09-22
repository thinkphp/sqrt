/**
 *
 * Adrian Statescu (http://adrianstatescu.com) 
 *
 * Computes SQuar RooT (SQRT) using recurrence relations.
 *
 * anplus1 = ( an + n / an ) / 2 
 *
 * License MIT
 *
 */
package main

import ("fmt"
        "os"
        "strconv"
        "math")

func sqrt(n float64) float64 {    

     var an, anplus1, eps float64
     
     eps = 0.00001
  
     an =  n / 2.0

     anplus1 =  ( an + n / an) / 2.0 

     for math.Abs( anplus1 - an ) >= eps {

         an = anplus1
     
         anplus1 = ( an +  n / an) / 2.0 
     }

     return anplus1
}

func main() {

     var n float64

     n,_ = strconv.ParseFloat(os.Args[1], 64)

     fmt.Printf("%.10f", sqrt( n ))
}