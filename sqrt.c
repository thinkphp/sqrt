/*
 * Adrian Statescu <mergesortv@gmail.com> http://adrianstatescu.com
 * Square Root(SQRT) Algorithm using Recurrence relation an+1 = ( an + n / an ) / 2.0; 
 * MIT License
 */

#include <stdio.h>
#include <math.h>

float mySQRT(float n) {

      float an = (float)n/2.0, 

            anplus1 = (an + (float)n/an ) / 2.0;

      float EPS = 0.00001;

      while( (fabs(an - anplus1)) >= EPS) {

            an = anplus1;

            anplus1 = (an + (float)n/an ) / 2.0;
      }                

   return anplus1;
}


float mySQRT2(float n) {
      
      int i;   

      float an = 1, 

            anplus1 = (an + n ) / 2.0;

      for(i = 1; i <= 100; ++i) {

            an = anplus1;

            anplus1 = (an + (float)n/an ) / 2.0;
      }                

   return anplus1;
}

int main() {

    float n;

    printf("n=");
    scanf("%f", &n);

    printf("%.15f",mySQRT(n));       


}